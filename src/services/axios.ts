import axios from "axios";

export const API_URL = import.meta.env.API_URL || "http://localhost:5000/api";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
