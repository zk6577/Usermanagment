import express from 'express';
import { adddata, deleteData, getallusers, singleuser, updateData } from '../controllers/adddata.js';



const userrouter = express.Router();

userrouter.post("/add", adddata);
userrouter.put("/update/:id", updateData);
userrouter.delete("/delete/:id", deleteData);
userrouter.get("/all",getallusers);
userrouter.get("/:id",singleuser)
export default userrouter;

