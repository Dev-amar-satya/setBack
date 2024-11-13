
// require('dotenv').config({
//     path:"./env"
// })
import { configDotenv } from "dotenv";
import connectDB from "./db/dbConnection.js";

configDotenv({path:"./.env"})

connectDB()

// dotenv.config({
//     path:"./env"
// })






// ( async() => 
// {
//    try {
//     await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`)
    
//    } catch (error) {
//     console.error("Error:",error)
//     throw error
//    }
// })()