import React, { useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate ,useParams} from "react-router-dom";

function Home() {
  const [data,setData]=useState([]);
  const id=useParams();

  const navigate = useNavigate();

  const getalldata= async()=>{
    try {
      const result = await axios.get("http://localhost:3000/user/all",{
        withCredentials:true,});
      const data=result.data;
      setData(data);
    } catch (error) {
      console.log("Error fetching data", error)
    }
  }

  const deleteHandler= async(id)=>{
    try {
      await axios.delete(`http://localhost:3000/user/delete/${id}`,{withCredentials:true});
      getalldata();
    } catch (error) {
      console.log("Error in deleting user", error);
    }
  }

  useEffect(()=>{
    getalldata();
  },[])

  return (
    <div className="bg-linear-to-r from-indigo-600 to-cyan-500 h-screen w-full flex items-center flex-col">

      <h1 className="text-4xl font-bold text-white text-center pt-10 ">
        Welcome to User Management System
      </h1>

      <div className='w-[90%] h-[80%] flex flex-wrap justify-center p-5 overflow-auto backdrop-blur-md gap-5'>

        {data.map((item,index) => (
          <div 
            key={index} 
            className='rounded-3xl p-5 border bg-[#207cc7a8] 
            w-full sm:w-[48%] md:w-[30%] lg:w-[25%] 
            h-[250px] flex flex-col m-2 shadow-2xl backdrop-blur-2xl border-[#0658db]'
          >
            <h1 className='text-white font-semibold text-center'>User details</h1>
            <h2 className='text-white font-semibold'>Name: {item.name}</h2>
            <p className='text-white font-semibold'>Email: {item.email}</p>
            <p className='text-white font-semibold'>Age: {item.age}</p>
            <p className='text-white font-semibold'>Country: {item.country}</p>

            <div className='mt-2 flex gap-2'>
              <button 
                className='text-white rounded-xl p-2 bg-[#ea0a4680]' 
                onClick={()=> navigate(`/edit/${item._id}`)}
              >
                Edit User
              </button>

              <button 
                className='text-white rounded-xl p-2 bg-[#ea0a4680]' 
                onClick={()=> deleteHandler(item._id)}
              >
                Delete User
              </button>
            </div>
          </div>
        ))}

      </div>

      <button 
        className='w-40 h-15 bg-[#d80940b0] rounded-lg mb-10 text-white text-xl px-2' 
        onClick={()=>{navigate("/add")}}
      >
        Add User
      </button>

    </div>
  )
}

export default Home
