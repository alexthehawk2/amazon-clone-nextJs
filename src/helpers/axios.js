const axios = require("axios").default;

export const signIn = async (url, payload) => {
  const { data } = await axios.post(url, payload);
  return data;
};
