import {Ratelimit} from '@upstash/ratelimit';
import {Redis} from '@upstash/redis';
import dotenv from 'dotenv';

dotenv.config();

// Verify environment variables exist
if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    console.error('Missing Upstash Redis environment variables');
    process.exit(1);
}

// Create Redis client with explicit configuration
const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

// Test Redis connection
async function testRedisConnection() {
    try {
        await redis.ping();
        console.log('✅ Upstash Redis connected successfully');
    } catch (error) {
        console.error('❌ Upstash Redis connection failed:', error.message);
        throw error;
    }
}

// Create rate limiter that allows 100 requests per 60 seconds
const ratelimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(100, "60 s"),
});

// Test the connection when module loads
testRedisConnection().catch((error) => {
    console.error('Failed to connect to Upstash Redis:', error);
});

export default ratelimit