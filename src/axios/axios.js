import axios from "axios";

export const authInstance = axios.create({
  baseURL: "https://spi-auth.onrender.com",
});

export const opsInstance = axios.create({
  baseURL: "https://spi-backend.onrender.com",
});
