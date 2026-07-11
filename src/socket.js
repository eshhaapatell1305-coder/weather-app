import { io } from "socket.io-client";

const socket = io("https://weather-app-l4u6.onrender.com");

export default socket;