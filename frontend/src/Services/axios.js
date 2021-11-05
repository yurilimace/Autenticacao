import axios from "axios";

export const base_API = axios.create({
  baseURL: "https://localhost:44348/api/",
  headers: { "Access-Control-Allow-Origin": "*" },
});
