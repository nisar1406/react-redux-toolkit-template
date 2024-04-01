import axios, { AxiosInstance } from 'axios';

const token = localStorage.getItem('token');

const api: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Your API base URL
  headers: {
    'Content-Type': 'application/json',
    Authorization: token ? `Bearer ${token}` : undefined, // Set Authorization header if token exists
    // Add any additional headers as needed
  },
});

export default api;
