const redis = require('redis');
const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: 6379
});

client.on('connect', () => {
  console.log('Redis client connected');
});

client.on('error', (err) => {
  console.log('Redis client error', err);
});

module.exports = client;