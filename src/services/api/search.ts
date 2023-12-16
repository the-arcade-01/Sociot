let URL = `${import.meta.env.VITE_API_BACKEND_ENDPOINT}/search`;

const actions = {
  get: async function (search: string, type: string) {
    const endpoint = URL + `?option=${type}&search=${search}`
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
}

export const getSearch = async (search: string, type: string) => {
  const response = await actions.get(search, type)
  return response
}
