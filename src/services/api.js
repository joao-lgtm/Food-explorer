import axios from "axios";

export const api = axios.create({
  baseURL: 'https://foodexplorer-api-z0vq.onrender.com/'
});