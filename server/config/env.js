const dotenv = require('dotenv');
dotenv.config({
    path: '.env'
})

const {
    PORT,
    MONGODB_URI,
    UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN,
} = process.env;

module.exports = {
    PORT,
    MONGODB_URI,
    UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN,
}