import axios from 'axios';
import React, { useState } from 'react'

const CustomModal = ({handleCloseModal}) => {
    const[name,setName]=useState('');
    const[job,setJob]=useState('');

    const handleName=(e)=>{
        setName(e.target.value)
    }
    const handleJob=(e)=>{
        setJob(e.target.value)
    }
    const handleSubmit=()=>{
        let data={
            "name":name,
            "job":job
        }
        axios({
            method:"POST",
            url: "https://reqres.in/api/users",
            data:data
        })
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }
   console.log(name);
   console.log(job)
    return (
<div class="modal d-block" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Create New User</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
      </div>
      <div class="modal-body">
       <input type="text" className='form-control my-3' placeholder='Enter Your Name' onChange={(e)=>handleName(e)} />
       <input type="text" className='form-control my-3' placeholder='Enter Your Job'  onChange={(e)=>handleJob(e)}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseModal}>Close</button>
        <button type="button" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  </div>
</div>
   
  )
}

export default CustomModal;