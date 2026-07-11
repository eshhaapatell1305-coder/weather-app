import axios from "axios";

const API = axios.create({
  baseURL: "https://weather-app-l4u6.onrender.com/api",
});

export default API;