import React from 'react'
import { useNavigate } from 'react-router-dom';

const List = ({data,handleDelete}) => {
  const history=useNavigate();
  return (
    <div className='container-fluid list_container' >
    <div>{data.id}</div>
    <div className="image_container" >
      <img src={data.avatar} alt="#" className='list_img' />
    </div>
    <div onClick={()=>history("/user/"+ data.id)} className="text-danger">{data.first_name + data.last_name}</div>
    <div>{data.email}</div>
    <div>
      <img className='edit_icon' src="https://cdn-icons-png.flaticon.com/512/5996/5996831.png" alt="" />
      <img className='delete_icon' src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png" alt="" onClick={handleDelete}/>
    </div>
    </div>
  )
}

export default List;