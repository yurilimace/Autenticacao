import axios from "axios";

export const base_API = axios.create({
  baseURL: "https://localhost:32534/api",
});
