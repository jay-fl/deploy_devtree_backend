import mongoose from "mongoose";
import colors from "colors";

export const connectDB = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI);
        const url = `${connection.host}:${connection.port}`
        console.log(colors.cyan.bold(`MongoDB Conectado en ${url}`));
    } catch (error) {
        console.error("Error connecting to MongoDB:", colors.bgRed.white.bold(error.message))
        process.exit(1);
    }
}