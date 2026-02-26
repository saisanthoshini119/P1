
import axios from "axios";
import { useState } from "react";
function Reg() 
{
    const [data,setdata]=useState(
      {
        name:"",
        email:"",
        password:""
      }
    ) 
    const changeName=(e)=>{
      setdata({...data,[e.target.name]:e.target.value})
    }
    const submit=async(e)=>{
        try{
            //const res=await axios.post("http://localhost:8080/register",data)
            const res=await axios.post("https://cabsystemsms-1.onrender.com/register",data)
            alert(res.data)
        }  
        catch(xyz)
        {
            alert(xyz.response?.data||"Error")
        }
    }
    return(
        <>
        <h1>Iam App</h1>
        <input onChange={changeName} name="name" value={data.name} placeholder="Name" />
        <input onChange={changeName} name="email" value={data.email} placeholder="Email" />
        <input type="password" onChange={changeName} name="password" value={data.password} placeholder="Password" />
        <button onClick={submit}>Register</button>
        </>
    )
}


export default Reg;