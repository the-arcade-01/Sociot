import { create } from "zustand";
import { UserDetails } from "../utils/types";
import { getUserById } from "../services/api/user";

interface UserState {
  userId: string;
  token: string;
  userDetails: UserDetails;
  saveUserId: (value: string) => void;
  saveToken: (value: string) => void;
  saveUserDetails: (value: UserDetails) => void;
  removeUserState: () => void;
  getUserDetails: () => void;
}

const useUser = create<UserState>((set, get) => ({
  userId: localStorage.getItem("sociot-user-id") || "",
  token: localStorage.getItem("sociot-auth-token") || "",
  userDetails: {
    userId: "",
    username: "",
    email: "",
    createdAt: "",
    updatedAt: "",
  },
  saveUserId: (value: string) => {
    localStorage.setItem("sociot-user-id", value);
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
      userId: "",
      token: "",
      userDetails: {
        userId: "",
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
    const saveUserDetails = get().saveUserDetails;
    const response = await getUserById(userId, token);
    saveUserDetails(response.data);
  },
}));

export default useUser;
