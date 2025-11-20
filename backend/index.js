import express from "express";
import { connectDb } from "./config/db.js";
import userrouter from "./routes/userRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();      
const PORT = process.env.PORT || 5000;

app.use(express.json());    
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "http://localhost:5173",
                methods: ["GET", "POST", "PUT", "DELETE"],
        credentials:true
    })
)
 app.use("/user", userrouter);



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connectDb();

});