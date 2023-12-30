import { CreatePostBody, DeletePostBody } from "../../utils/types";

const URL = `${import.meta.env.VITE_API_BACKEND_ENDPOINT}/posts`;

const actions = {
  get: async function (endpoint: string) {
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
  put: async function (endpoint: string) {
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
  delete: async function (endpoint: string, token: string, body: any) {
    const options = {
      method: "DELETE",
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
};

export const getPosts = async (order: string, tagFilter: string) => {
  let endpoint = URL + `?sort=${order}`;
  if (tagFilter !== "") {
    endpoint += `&tag=${tagFilter}`;
  }
  const response = await actions.get(endpoint);
  return response;
};

export const getPostById = async (postId: string) => {
  const endpoint = URL + `/${postId}`;
  const response = await actions.get(endpoint);
  return response;
};

export const getUserPosts = async (userId: number) => {
  const endpoint = URL + `/users/${userId}`;
  const response = await actions.get(endpoint);
  return response;
};

export const updatePostViews = async (postId: string) => {
  const endpoint = URL + `/views/${postId}`;
  const response = await actions.put(endpoint);
  return response;
};

export const createPost = async (token: string, body: CreatePostBody) => {
  const response = await actions.post(token, body);
  return response;
};

export const deletePost = async (
  token: string,
  postId: string,
  body: DeletePostBody
) => {
  const endpoint = URL + `/${postId}`;
  const response = await actions.delete(endpoint, token, body);
  return response;
};

export const getTags = async () => {
  const endpoint = URL + `/tags`;
  const response = await actions.get(endpoint);
  return response;
};
