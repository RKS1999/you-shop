import axios from "axios";
import { baseUrl } from "./EndPoints";

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
