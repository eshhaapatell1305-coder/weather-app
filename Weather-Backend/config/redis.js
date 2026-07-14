const { createClient } = require("redis");

const client = createClient({
  url: process.env.REDIS_URL,
});

client.on("error", (err) => {
  console.log("❌ Redis Error:", err.message);
});

(async () => {
  try {
    await client.connect();
    console.log("✅ Redis Connected Successfully");
  } catch (err) {
    console.log("Redis Connection Failed");
  }
})();

module.exports = client;