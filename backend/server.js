import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import cors from "cors"
dotenv.config();
connectDB();
const app = express();
app.use(express.json())
app.use(cors());
app.use("/hello" ,(req, res) =>{
    res.send("hello");
})
app.use('/api/users', userRoutes);
app.use('/api/products',productRoutes)
app.listen(5000 ,() =>{
    console.log("app running")
})