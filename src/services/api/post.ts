import { CreatePostBody } from "../../utils/types";

let URL = `${import.meta.env.VITE_API_BACKEND_ENDPOINT}/posts`;

const actions = {
  get: async function (order: string) {
    const endpoint = URL + `?sort=${order}`
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(endpoint, options);
    const data = await response.json();
    return data;
  },
  put: async function (postId: string) {
    const endpoint = URL + `/views/${postId}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(endpoint, options);
    const data = await response.json();
    return data;
  },
  post: async function (token: string, body: any) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    };
    const response = await fetch(URL, options);
    const data = await response.json();
    return data;
  },
};

export const getPosts = async (order: string) => {
  const response = await actions.get(order);
  return response;
};

export const updatePostViews = async (postId: string) => {
  const response = await actions.put(postId);
  return response;
};

export const createPost = async (token: string, body: CreatePostBody) => {
  const response = await actions.post(token, body);
  return response;
};
