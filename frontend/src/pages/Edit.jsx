
import React, {  useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate,useParams } from "react-router-dom";

function Edit() {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    age:"",
    country:""
  });

  const {id}=useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`https://usermanagment-xzd9.onrender.com/user/${id}`);
      setFormData(res.data);
    };
    getUser();
  }, []);

  const updateHandler = async (e)=>{
    e.preventDefault();  
    try {
      const result= await axios.put(`https://usermanagment-xzd9.onrender.com/user/update/${id}`,formData,{withCredentials:true});
      setFormData(result.data);
      navigate("/")
    } catch (error) {
      console.log("Error in updating user data", error);
    }
  }

  return (
    <div className='h-screen w-full bg-linear-to-l from-[rgb(37,9,88)] to-[#5c09d1] flex items-center justify-center' >

      <div className='h-[85%] w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] 
      bg-[#5c09d1] border-2 border-[#5c09d2] rounded-xl text-white shadow-2xl 
      backdrop-blur-2xl flex items-center flex-col p-5'>

        <h1 className='text-white mt-3 font-bold text-[22px]'>Edit User</h1>

        <form className='flex flex-col space-y-3 w-full items-center' onSubmit={updateHandler}>

          <label className='text-white font-semibold self-start'>Name</label>
          <input 
            type="text" 
            className='w-full sm:w-[80%] md:w-[90%] outline-2 rounded-xl px-6 py-3'
            value={formData.name}
            name="name"
            onChange={(e)=> setFormData({ ...formData, name: e.target.value })}
          />

          <label className='text-white font-semibold self-start'>Email</label>
          <input 
            type="email" 
            className='w-full sm:w-[80%] md:w-[90%] outline-2 rounded-xl px-6 py-3'
            value={formData.email}
            name="email"
            onChange={(e)=> setFormData({ ...formData, email: e.target.value })}
          />

          <label className='text-white font-semibold self-start'>Age</label>
          <input 
            type="number" 
            className='w-full sm:w-[80%] md:w-[90%] outline-2 rounded-xl px-6 py-3'
            value={formData.age}
            name="age"
            onChange={(e)=> setFormData({ ...formData, age: e.target.value })}
          />

          <label className='text-white font-semibold self-start'>Country</label>
          <input 
            type="text"  
            className='w-full sm:w-[80%] md:w-[90%] outline-2 rounded-xl px-6 py-3'
            value={formData.country}
            name="country"
            onChange={(e)=> setFormData({ ...formData, country: e.target.value })}
          />

          <button className='text-white rounded-xl p-2 bg-[#ea0a4680] self-center w-24 mt-5'>
            Submit
          </button> 

        </form>

      </div>

    </div>
  )
}

export default Edit
