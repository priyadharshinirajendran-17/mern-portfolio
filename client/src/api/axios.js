import axios from "axios";

// Base URL comes from the environment so it can point at localhost in dev
// and the deployed Render URL in production.
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default api;
