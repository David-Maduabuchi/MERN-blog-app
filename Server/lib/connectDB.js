import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Assuming mongoose is used for MongoDB connection
        await mongoose.connect(process.env.MONGO);
        console.log("MongoDB connected successfully");

    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1); // Exit the process with failure
    }
}

export default connectDB;