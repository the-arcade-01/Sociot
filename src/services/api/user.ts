import {
  UserLoginBody,
  UserRegisterBody,
  UserUpdateUserPasswordBody,
  UserUpdateUsernameBody,
} from "../../utils/types";

let URL = `${import.meta.env.VITE_API_BACKEND_ENDPOINT}/users`;

const actions = {
  get: async function (endpoint: string, token: string) {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(endpoint, options);
    const data = await response.json();
    return data;
  },
  post: async function (endpoint: string, body: any) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    const response = await fetch(endpoint, options);
    const data = await response.json();
    return data;
  },
  put: async function (endpoint: string, body: any, token: string) {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    };
    const response = await fetch(endpoint, options);
    const data = await response.json();
    return data;
  },
  delete: async function (endpoint: string, token: string) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(endpoint, options);
    const data = await response.json();
    return data;
  },
};

export const registerUser = async (body: UserRegisterBody) => {
  const response = await actions.post(URL, body);
  return response;
};

export const loginUser = async (body: UserLoginBody) => {
  const endpoint = URL + "/login";
  const response = await actions.post(endpoint, body);
  return response;
};

export const getUsers = async () => {
  const response = await actions.get(URL, "");
  return response;
};

export const getUserById = async (userId: string, token: string) => {
  const endpoint = URL + `/${userId}`;
  const response = await actions.get(endpoint, token);
  return response;
};

export const updateUserById = async (
  userId: string,
  body: UserUpdateUsernameBody,
  token: string
) => {
  const endpoint = URL + `/${userId}`;
  const response = await actions.put(endpoint, body, token);
  return response;
};

export const updateUserPasswordById = async (
  userId: string,
  body: UserUpdateUserPasswordBody,
  token: string
) => {
  const endpoint = URL + `/password/${userId}`;
  const response = await actions.put(endpoint, body, token);
  return response;
};

export const deleteUser = async (userId: string, token: string) => {
  const endpoint = URL + `/${userId}`;
  const response = await actions.delete(endpoint, token);
  return response;
};
