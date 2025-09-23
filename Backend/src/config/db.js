import mongoose from "mongoose"

export const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected Successfully!")
    } catch (error) {
        console.error("Database Connection error", error);
        process.exit(1); //exit with failure
    }
}