import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const params=useParams()
    console.log(params);
    const user_id=params.id;
    const[User_Detail,setUserDetails]=useState({});


    useEffect(()=>{
          getUserDetails();
    })

    const getUserDetails=()=>{
        axios.get("https://reqres.in/api/users/"+user_id)
        .then(res=>{
            console.log(res.data)
            setUserDetails(res.data.data)
        })
        .catch(err=>{
            console.log(err)
            alert("user not found")
        })
    }

console.log(User_Detail)
  return (
    <div className='card w-50 mx-auto my-5 bg-warning'>
        <div className="card-body">
            <img src={User_Detail.avatar} alt="" />
            <div>Id :{User_Detail.id} </div>
            <div>Name :{User_Detail.first_name + User_Detail.last_name} </div>
            <div>Email : {User_Detail.email} </div>
        </div>
    </div>
  )
}
export default UserDetail;