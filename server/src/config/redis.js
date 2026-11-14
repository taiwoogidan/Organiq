import { createClient } from "redis";
import env from "./env.js";

export const redis = createClient({
  url: env.REDIS_URL,
});

redis.on("error", (error) => {
  console.log(`Redis error: ${error}`);
});

export const connectRedis = () => {
  redis.connect();
  console.log("Redis connected successfully");
};
