import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history=useNavigate();


  const handleEmail = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value)
  };
  const handlePassword = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value)
  };

  const handleLogin = () => {
    // console.log("email");
    let data={
        "email":email,
        "password":password
    }

    axios({
        method:"POST",
        url:"https://reqres.in/api/login",
        data:data
    })
      .then(res=>{
        console.log(res.data)
        if(res.data){
          window.localStorage.setItem("token",res.data.token)
        }
        alert("successfully loged in")
        history("/")
      })
      .catch(err=>{
        console.log(err)
        alert("Either email or password is incorrect")
      })
  };

  return (
    <div className="container-fluid card-container">
      <div className="row justify-content-center">
        <div className="col-sm-6 ">
          <div className="card bg-info my-5 ">
            <div className="card-body">
              <h4>Login</h4>
              <input
                type="email"
                className="form-control my-3"
                placeholder="Enter Your email"
                onChange={(e) => handleEmail(e)}
              />
              <input
                type="password"
                className="form-control my-3"
                placeholder="Enter Your Password"
                onChange={(e) => handlePassword(e)}
              />
              <div className="login-button">
                <button className="btn btn-primary" onClick={handleLogin}>
                  Login
                </button>
              </div>
              <div className="signUp-button">
              <p>If you don't have an account signup first </p>  
                <button className="btn btn-warning" onClick={()=>history("/signup")}>sign Up</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
