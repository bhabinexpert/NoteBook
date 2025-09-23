import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next)=>{
    try {
        const {success} = await ratelimit.limit("my-limit-key") // user id for retelimiting individual users.

        if(!success) return res.status(429).json({message: "To many requests, try again Later!"})
        next()
    } catch (error) {
        console.log("Rate Limit Error", error)
        next(error);
    }
}

export default rateLimiter;