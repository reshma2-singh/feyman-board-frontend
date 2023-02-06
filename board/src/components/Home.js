import React,{useState,useEffect} from 'react'
import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
function Home() {
 
  const[user,setUser]=useState({name:""})
  console.log(user,'lll')
  const navigate=useNavigate()

  const Submit =async()=>{
    await axios.post(`http://localhost:8002/api/v1/signup`, user )
     .then(res => {
     console.log(res,'res');
     console.log(res.data,"hello");
     setUser(res.data)
     navigate("/dashboard")  
     })   
 } 

  return (
    <div className='home'>
        <h2>Please enter username</h2>
       
       <input type="text" name="name" placeholder='username'  onChange={(e)=>setUser({[e.target.name]:e.target.value})} /> 
       
       <button onClick={Submit} className='home__btn'>Enter</button>
    
    </div>
  )
}

export default Home