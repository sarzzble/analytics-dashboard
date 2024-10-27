import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://helping-scorpion-21962.upstash.io",
  token: process.env.REDIS_KEY,
});
