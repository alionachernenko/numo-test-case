import axios from 'axios';

const API_URL = 'https://v2.jokeapi.dev/joke/';

const instance = axios.create({
  baseURL: API_URL,
});

export const fetchJoke = async () => {
  const response = await instance.get('Programming?type=single');
  return response.data.joke;
};
