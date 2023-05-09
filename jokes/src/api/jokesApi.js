import axios from 'axios';

const BASE_URL = 'https://v2.jokeapi.dev/joke/';

export const fetchJoke = async () => {
  const response = await axios.get(`${BASE_URL}Programming?type=single`);
  return response.data.joke;
};
