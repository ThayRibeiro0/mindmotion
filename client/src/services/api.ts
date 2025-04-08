import axios from "axios";

const API_BASE_URL = process.env.VITE_API_BASE_URL || "http://localhost:10000";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});



