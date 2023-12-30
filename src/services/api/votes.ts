const URL = `${import.meta.env.VITE_API_BACKEND_ENDPOINT}/votes`;

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
    const data = response.json();
    return data;
  },
  put: async function (endpoint: string, token: string) {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    await fetch(endpoint, options);
  },
};

export const getVotesByPostId = async (postId: string) => {
  const endpoint = URL + `/${postId}`;
  const response = await actions.get(endpoint, "");
  return response;
};

export const getUserVotesStatus = async (
  postId: string,
  userId: number,
  token: string
) => {
  const endpoint = URL + `/status?postId=${postId}&userId=${userId}`;
  const response = await actions.get(endpoint, token);
  return response;
};

export const updateUserVotes = async (
  postId: string,
  userId: number,
  token: string,
  type: string
) => {
  const endpoint = URL + `?postId=${postId}&userId=${userId}&type=${type}`;
  await actions.put(endpoint, token);
};
