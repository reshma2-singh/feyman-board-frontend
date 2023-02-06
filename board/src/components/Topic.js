import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Modal, Button } from 'react-bootstrap'
function Topic() {
  const [content, setContent] = useState({ title :"",detail:"",percentage:""})
  const[final,setFinal]=useState([])
  const[showw,setShoww]=useState([])
  const[color,setColor] = useState("")
  const[text,settext]=useState([])
  const[List,setList]=useState([])
  const[state,setState]=useState(-1)
  const[count,setCount]=useState(0)
  const [show, setShow] = useState(false);
  const[colorModal,setColorModal]=useState(false)
console.log(List,'kkk')
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
 function changeColor(e){
  setColor(e.target.value)
  if(e.target.value==="green"){
    setCount(count+4)
  }
   if (e.target.value === "yellow") {
     setCount(count + 3)
   }
   if (e.target.value === "blue") {
     setCount(count + 2)
   }
   if (e.target.value === "red") {
     setCount(count + 1)
   }

 }
 
  function handleChange(e){
    const { name, value } = e.target;
    console.log(name, value) 
    setContent({
      ...content, [name]: value
    })
  }
  const Finalsubmit=async()=>{
    await axios.post(`http://localhost:8002/api/v1/topic`,content)
    .then(res=>{
      console.log(res.data,'hello')
    })
    // let res = content.detail.split(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/)
    // setList(res)
  }
  function calculate(){
    const percentage = Math.round((count / ((state + 1) * 4)) * 100)
    console.log(percentage,'per');
    setContent({...content,percentage})
  }
  function submit() {
    let res = content.detail.split(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/)
    setList(res)
    setShow(!show)
  }
  
  function handleClose(){
    setShow(!show)
  }
  function openColor(){
    setColorModal(!colorModal)
  }
  function closeColor(){
    setColorModal(!colorModal)
  }
  return (
    <div>
      <>
        <Modal show={show} >
          <Modal.Header >
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>{List.map((item,ind )=> <span className='spann' style={{color:state===ind?color:"black"}} onClick={()=>setState(ind,openColor())}>{item},</span>)}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} >
              Close
            </Button>
            <Button variant="primary" onClick={calculate}  >
             Calculate percentage
            </Button>
            <Button variant="primary" onClick={Finalsubmit} >
              Final submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      <>
        <Modal show={colorModal} >
          <Modal.Header >
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body >
          <div className='bttn'>
            <button style={{ background: "green", color: "white" }} value="green" onClick={changeColor}>UNDERSTOOD</button>
            <button style={{ background: "yellow" }} value="yellow" onClick={changeColor}>SOMEWHAT UNDERSTOOD</button>
            <button style={{ background: "skyblue", color: "white" }} value="skyblue" onClick={changeColor}>NOT CLEAR</button>
            <button style={{ background: "red", color: "white" }} value="red" onClick={changeColor}>WHAT RUBBISH</button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeColor} >
              Close
            </Button>
            <Button variant="primary"  >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    <div className='topic'>
        <h1>Add topic</h1>
      <input type="text" name='title' placeholder='title' onChange={handleChange}/>
      <textarea placeholder='text area' name="detail" onChange={handleChange}
         ></textarea>
        <button onClick={submit} className='topic__btn'>Submit</button>
    </div>
    
   
     
    </div>
    
  )
}

export default Topic