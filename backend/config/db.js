import mongoose from "mongoose";






export const connectDb= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("Database connected successfully");
       
    }catch(err){
        console.log("Database connection failed", err);

    }
}
