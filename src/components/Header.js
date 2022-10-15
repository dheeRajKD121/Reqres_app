import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const history=useNavigate();    

  const token=window.localStorage.getItem("token")
    
   
  

    const handleLogin=()=>{
          history("/login")
    }
    const handleSignUp=()=>{
     history("/signup")
    }
      const handleLogout=()=>{
        window.localStorage.clear()
        history("/login")
    }
      const handleHome=()=>{
        const token=window.localStorage.getItem("token")
           console.log(token)
           if(token==null){
            history("/login")
      }else{
        history("/")
      }
    }
      const handleUser=()=>{
        history("/user")
      }
  return (
  
<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><i><b><u>Reqres_App</u></b></i></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={handleHome}>Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={handleUser}>User</a>
        </li>

      </ul>
      <form className="d-flex" role="button">
      {token!==null && <button className="btn btn-danger mx-2 px-4" onClick={handleLogout}>Logout</button>}
      {token===null && <button className="btn btn-primary mx-2 px-4" onClick={handleSignUp}>SignUp</button>}
      {token ===null && <button className="btn btn-primary me-5 px-4" onClick={handleLogin}>Login</button>}
      </form>
    </div>
  </div>
</nav>
  )
}
export default Header;
