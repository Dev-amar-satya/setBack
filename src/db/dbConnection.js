import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionIntance = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`)
        console.log(`${connectionIntance}`)
        console.log(`mongoDB connected !! DB host: ${connectionIntance.connection.host}`)
    } catch (error) {
        console.error("Database connection failed !!",error)
        process.exit(1)
    }
}

export default connectDB