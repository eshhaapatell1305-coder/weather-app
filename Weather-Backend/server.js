const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();
require("./jobs/notificationJob");

const passport = require("passport");
require("./config/passport"); // IMPORTANT

const logger = require("./middleware/logger");
const weatherRoutes = require("./routes/weather");
const userRoutes = require("./routes/users");
const oauthRoutes = require("./routes/oauth");

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5000",
  "https://weather-app-hazel-nine-27.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

// Initialize Passport
app.use(passport.initialize());

// Logger
app.use(logger);

// Routes
app.use("/api", weatherRoutes);
app.use("/api/users", userRoutes);
app.use("/auth", oauthRoutes);

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Weather Forecast Backend Running 🚀",
  });
});

// HTTP Server
const server = http.createServer(app);

// Socket.IO
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.set("io", io);

io.on("connection", (socket) => {
  console.log("✅ User Connected:", socket.id);

  socket.emit("message", "Connected to Weather Server");

  socket.on("disconnect", () => {
    console.log("❌ User Disconnected");
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});