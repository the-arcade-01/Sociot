import { create } from "zustand";
import { UserDetails } from "../utils/types";
import { getUserById } from "../services/api/user";

interface UserState {
  userId: number;
  token: string;
  userDetails: UserDetails;
  saveUserId: (value: number) => void;
  saveToken: (value: string) => void;
  saveUserDetails: (value: UserDetails) => void;
  removeUserState: () => void;
  getUserDetails: () => void;
  isUserLoggedIn: () => boolean;
}

const useUser = create<UserState>((set, get) => ({
  userId: Number(localStorage.getItem("sociot-user-id")) || -1,
  token: localStorage.getItem("sociot-auth-token") || "",
  userDetails: {
    userId: -1,
    username: "",
    email: "",
    createdAt: "",
    updatedAt: "",
  },
  saveUserId: (value: number) => {
    localStorage.setItem("sociot-user-id", String(value));
    set(() => ({ userId: value }));
  },
  saveToken: (value: string) => {
    localStorage.setItem("sociot-auth-token", value);
    set(() => ({ token: value }));
  },
  saveUserDetails: (value: UserDetails) => {
    set(() => ({ userDetails: value }));
  },
  removeUserState: () => {
    localStorage.removeItem("sociot-user-id");
    localStorage.removeItem("sociot-auth-token");
    set(() => ({
      userId: -1,
      token: "",
      userDetails: {
        userId: -1,
        username: "",
        email: "",
        createdAt: "",
        updatedAt: "",
      },
    }));
  },
  getUserDetails: async () => {
    const userId = get().userId;
    const token = get().token;
    if (userId != -1 && token != "") {
      const saveUserDetails = get().saveUserDetails;
      const response = await getUserById(userId, token);
      saveUserDetails(response.data);
    }
  },
  isUserLoggedIn: () => {
    return get().userId != -1 && get().token != "";
  },
}));

export default useUser;
