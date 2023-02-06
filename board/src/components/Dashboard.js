import React, { useEffect,useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
function Dashboard() {
  const [val, setVal] = useState([])
 
  const navigate = useNavigate()
 
  const submitTopic=()=>{
    navigate("/topic")
  }
 useEffect(()=>{
  const getTopic=async()=>{
   try{
     const topic =await axios.get("http://localhost:8002/api/v1/topic")
     console.log(topic.data.data,"data")
     setVal(topic.data.data)
   }catch(err){
    console.log(err)
   }
   console.log(val,"lll")
}
getTopic()
},[])
  return (
    <div className='dash'>
       <div className='dash__btn'>
        <button onClick={submitTopic} className=''>Add Topic</button>
       </div>
       <div className='dash__gp'>
        <h1>Topic List</h1>
        <h3>{val.map(item => <p className='word'><span className='title'>{item.title}</span><span className='per'>:{item.percentage}%</span></p>)}</h3>
        

       </div>
    </div>
  )
}

export default Dashboard