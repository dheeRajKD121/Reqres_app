import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const history=useNavigate();

// const handleNameChange=(e)=>{
//     console.log(e.target.value)
//     setName(e.target.value)
// }

const handleEmailChange=(e)=>{
    console.log("emailChange")
    setEmail(e.target.value)
}
const handlePasswordChange=(e)=>{
    console.log("passwordChange")
    setPassword (e.target.value)
}
const handleSignUp=()=>{
 
    let data={
        "name":name,
        "email":email,
        "password":password
    }

 axios({
    method:"POST",
    url:"https://reqres.in/api/register",
    data:data
 })
 .then(res=>{
    console.log(res.data)
    alert("sign up successful")
    history("/login")
    
 })
 .catch(err=>{
    console.log(err)
 })

}

  return (
    <div className='container-fluid card-container'>
        <div className="row justify-content-center ">
            <div className="col-sm-6">
                <div className="card my-5" style={{border:"none"}} >
                    <div className="card-body bg-info">
                        <h3>Sign Up</h3>
                        <input type="text" className='form-control my-3'placeholder='Enter your Name' onChange={(e)=>setName(e.target.value)}/>
                        <input type="email" className='form-control my-3' placeholder='Enter Your email'onChange={(e)=>handleEmailChange(e)} />
                        <input type="password" className='form-control my-3' placeholder='Enter Password' onChange={(e)=>handlePasswordChange(e)}/>
                         <button className='btn btn-warning' onClick={handleSignUp}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp;