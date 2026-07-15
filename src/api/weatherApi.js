import axios from "axios";

const API = axios.create({
  baseURL: "https://weather-app-hazel-nine-27.vercel.app",
});

export default API;