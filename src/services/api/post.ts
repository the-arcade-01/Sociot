let URL = `${import.meta.env.VITE_API_BACKEND_ENDPOINT}/posts`;

const actions = {
  get: async function () {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(URL, options);
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
};

export const getPosts = async () => {
  const response = await actions.get();
  return response;
};

export const updatePostViews = async (postId: string) => {
  const response = await actions.put(postId);
  return response;
};
