import React, { useState, useEffect } from "react";
import UpdateUserForm from "../../components/admin/UpdateUserForm";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../components/common/api";
import { toast } from "react-toastify";

const UpdateUser = () => {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    number: "",
    role:"buyer",
    category: "",
    tradeNumber: "",
    website: "",

  })
  const [errMessage, setErrMessage] = useState(null)

  const params = useParams();
  const id = params?.id


  const navigate = useNavigate()

  // Handle Change

  const handleChange = async(e)=>{
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
    
  }

  // Get User Data

  const getUserData = async (id) => {
    try {
      const response = await api.get(`/user/byid/${id}`, {
        withCredentials: true,
      });
      if (response.status === 200) {
        setUserData(response.data?.user);
        setFormData({
            name: response.data?.user?.name || "",
            company: response.data?.user?.company || "",
            email: response.data?.user?.email || "",
            role:"buyer",
            number: response.data?.user?.number|| "",
            category: response.data?.user?.category|| "",
            tradeNumber: response.data?.user?.tradeNumber|| "",
            website: response.data?.user?.website|| "",
           
            
        })
        
      }
    } catch (error) {
      console.error(error);
    }
  };

  

  useEffect(() => {
    getUserData(id);
  }, []);

  // Handle Submit

  const handleSubmit = async(e)=>{
    setIsLoading(true)
    e.preventDefault()
    
    try {
        if(!id) return setErrMessage('invalid user id, please try again')
        const response = await api.patch(`/user/update-user-by-admin/${id}`, formData, {withCredentials: true})
        if (response.status === 200){
            toast.success(`${userData?.name} profile updated successfully`)
            navigate('/admin/buyer')
            setErrMessage(null)
            
        }
    } catch (error) {
        console.error(error)
        setErrMessage(error?.response?.data?.message)
    }finally{
        setIsLoading(false)
    }

  }

  return (
    <>
      <div className="p-5 flex flex-col gap-5">
        <UpdateUserForm handleSubmit={handleSubmit} userData={userData} formData={formData} handleChange={handleChange} navigate={navigate} isLoading={isLoading} errMessage={errMessage} id={id}/>
      </div>
    </>
  );
};

export default UpdateUser;
