import React, {useState, useEffect} from 'react'
import ResetPasswordFrom from '../components/ResetPasswordFrom'
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {
    const [passwordShow, setPasswordShow] = useState(false);
    const [cPasswordShow, setCPasswordShow] = useState(false);
     const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        password:"",
        cpassword:""
    })
    const [errMessage, setErrMessage] = useState(null);

    const navigate = useNavigate()

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setIsLoading(true)
        try {
            if(formData.password.trim() !== formData.cpassword.trim()){
                setErrMessage("Your passwords do not match, please fill them correctly");
                setIsLoading(false);
                return;
            }
            const response = await axios.patch(`${import.meta.env.VITE_SERVER_URL}user/change-password-forget`, formData, {withCredentials: true});
            if(response.status === 200){
                setErrMessage("")
                toast.success(response.data?.message)
                setFormData({
                    password:"",
                    cpassword:""
                })
                
            }

            const role = response.data?.userRole;
            setTimeout(() => {
                if (role === "admin") return navigate("/admin");
                if (role === "buyer") return navigate("/buyer-admin");
                if (role === "supplier") return navigate("/supplier-admin");
            }, 1000);
                
        } catch (error) {
            console.error(error);
            setErrMessage(error.response?.data?.message)
        }
        finally{
            setIsLoading(false)
        }
    }
  return (
    <>
      <ResetPasswordFrom formData={formData} setFormData={setFormData} errMessage={errMessage} handleSubmit={handleSubmit} passwordShow={passwordShow} setPasswordShow={setPasswordShow} isLoading={isLoading} cPasswordShow={cPasswordShow} setCPasswordShow={setCPasswordShow}/>
    </>
  )
}

export default ResetPassword
