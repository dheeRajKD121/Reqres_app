import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomModal from "./CustomModal";
import DeleteModal from "./DeleteModal";
import List from "./List";

const User = () => {
  const [user_list, setUserList] = useState([]);
  const [showModal,setShowModal]=useState(false);
  const [deleteModal,setDeleteModal]=useState(false);

  const history = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token == null) {
      history("/login");
    }
  });

  useEffect(() => {
    getUserList();
  }, []);
  const getUserList = () => {
    axios
      .get("https://reqres.in/api/users?")
      .then((res) => {
        // console.log(res.data);
        if (res.data) {
          setUserList(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleModal=()=>{
  //      setShowModal(true)
  // }

  const handleCloseModal=()=>{
    setShowModal(false)
    setDeleteModal(false)
  }

  const handleDelete=()=>{
    setDeleteModal(true)
  }
       
  // console.log(user_list);
  return (
    <div className="container-fluid my-5 ">
      <div className="nawUser d-flex justify-content-end">
        <button className="btn btn-warning" onClick={()=>setShowModal(true)}>Create New User</button>
      </div>  
          { 
              user_list.map((data, index) => {
                return (
                  <div key={index}>
                     <List data={data} handleDelete={handleDelete}/>
                  </div>
                   );
                })
          }
       {showModal&&<CustomModal handleCloseModal={handleCloseModal}/>}
       {deleteModal&& <DeleteModal handleCloseModal={handleCloseModal}/>}
    </div>
  );
};
export default User;
