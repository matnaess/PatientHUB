import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://65d4b6ae3f1ab8c63435d54b.mockapi.io/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
