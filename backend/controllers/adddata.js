
import User from "../models/usermodel.js";


 export const adddata=async(req,res)=>{
    try{      
    const {name,email,age,country}=req.body;
     if(!name || !email || !age || !country){
        return res.status(400).json({message:"All fields are required"});
     }

     const userData= await User.create({name,email,age,country});
     return res.status(201).json(userData);
    }catch(err){
  console.log("Error in adding data", err); 
  return res.status(500).json({message:"Internal Server Error"});   
    }

}


 export const updateData=async(req,res)=>{
    try{
    const id=req.params.id;
    const {name,email,age,country}=req.body;
    if(!name || !email || !age || !country){
        return res.status(400).json({message:"All fields are required"});
     }  
    const updateuUserData= await User.findByIdAndUpdate(id,{name,email,age,country},{new:true});
    return res.status(200).json(updateuUserData);

    }catch(err){
console.log("Error in Updating the  data", err); 
  return res.status(500).json({message:"Internal Server Error"}); 
    }
}


export const deleteData=async(req,res)=>{
     try{
        const id=req.params.id;
        const deletedata= await  User.findByIdAndDelete(id);
        return res.status(200).json(deletedata);

    }catch(err){
console.log("Error in Deleting the  data", err); 
  return res.status(500).json({message:"Internal Server Error"});
    }
}

export const getallusers= async(req,res)=>{
    try{
        const users= await User.find({});
        return res.status(200).json(users);
    }catch(err){
console.log("Error in fetching all users", err); 
  return res.status(500).json({message:"Internal Server Error"});
    }
}



 export const singleuser= async (req,res)=>{
  try {
    const id=req.params.id;
    if(!id){
      console.log("User Id is missing"); 
    }

    const user= await User.findById(id);
    return res.status(200).json(user);

  } catch (error) {
        console.log("Error in fetching single user", error); 
  return res.status(500).json({message:"Internal Server Error"});
  }
}