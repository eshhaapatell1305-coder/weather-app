import { io } from "socket.io-client";

const socket = io("https://weather-app-l4u6.onrender.com", {
  autoConnect: false,
});

export default socket;