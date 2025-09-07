import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js"
dotenv.config();
connectDB();
const app = express();
app.use(express.json())

app.use("/hello" ,(req, res) =>{
    res.send("hello");
})
app.use('/api/users', userRoutes);
app.listen(5000 ,() =>{
    console.log("app running")
})