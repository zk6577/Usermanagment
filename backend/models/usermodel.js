import mongoose from "mongoose";




const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
     email:{
        type:String,
        required:true,
        
    },
     age:{
        type:Number,
       
     },
     country:{
        type:String,
        
     }

  

});




const User = mongoose.model("User", userSchema);

export default User;












