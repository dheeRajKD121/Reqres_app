import axios from 'axios'
import React from 'react'

const DeleteModal = ({handleCloseModal,id}) => {

     const handleUserDelete=()=>{

        axios.delete("https://reqres.in/api/users/" +id)
        .then(res=>{
            console.log(res.data)
            handleCloseModal()
            alert("user deleted successfully")
        })
        .catch(err=>{
            console.log(err)
        })
     }

  return (
    <div class="modal d-block" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Delete User</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
        </div>
        <div class="modal-body">
            Are you sure! You want to delete ?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseModal}>No</button>
          <button type="button" class="btn btn-primary" onClick={handleUserDelete }>Yes</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DeleteModal;