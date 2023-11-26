let URL = `${import.meta.env.VITE_API_BACKEND_ENDPOINT}/posts/tags`;

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
  }
}
  
export const getTags = async () => {
    const response = await actions.get();
    return response;
}
