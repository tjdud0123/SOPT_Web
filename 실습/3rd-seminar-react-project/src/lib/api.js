import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.github.com/users/',
});

export const getUserAPI = async userName => {
  const data = await client.get(userName);
  return data.data;
};
