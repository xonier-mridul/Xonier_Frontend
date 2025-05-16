import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UpdateTrackerComponent from "../../components/supplier/UpdateTrackerComponent";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateTracking = () => {
  const [errMessage, setErrMessage] = useState("");
  const [formData, setFormData] = useState({
    process: "",
  });

  const {id} = useParams();
  const navigate = useNavigate();


  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if(!id) return setErrMessage("Invalid Order Id")
      const response = await axios.patch(`${import.meta.env.VITE_SERVER_URL}order/update/${id}`,formData, {withCredentials: true});
    if(response.status === 200){
      setErrMessage("")
      toast.success("Order Tracker updated successfully")
      setTimeout(() => {
        
        navigate(-1)
      }, 1600);
      return
    }

    } catch (error) {
      setErrMessage(error?.response?.data?.message || "Something went wrong");
      console.error(error);
    }
  };

  

  return (
    <>
      <ToastContainer />
      <div className="p-5 flex flex-col gap-5">
        <UpdateTrackerComponent formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} handleChange={handleChange} errMessage={errMessage} />
      </div>
    </>
  );
};

export default UpdateTracking;
