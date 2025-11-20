import mongoose from "mongoose";






export const connectDb= async()=>{
    try{
        await mongoose.connect("mongodb+srv://khanariz541_db_user:7e8aQbMUDhSjt2Qe@cluster0.fguotqj.mongodb.net/userdata");
        console.log("Database connected successfully");
       
    }catch(err){
        console.log("Database connection failed", err);

    }
}
