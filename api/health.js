export default function handler(req, res) {
  res.status(200).json({
    success: true,
    message: "Weather API is running successfully!",
    timestamp: new Date().toISOString(),
  });
}