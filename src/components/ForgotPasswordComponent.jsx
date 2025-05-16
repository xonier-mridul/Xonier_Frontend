import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { FaEye, FaEyeSlash, FaArrowRight } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPasswordComponent = () => {
  const [email, setEmail] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  // Navigator 

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}user/forget-password`, {email})
      if(response.status === 200){
        window.localStorage.setItem("emailForVerify", email)
        toast.success(response.data?.response?.message)
        navigate("/forget-password/verify-otp")
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response?.data?.message)
    }
    finally{
      setIsLoading(false)
    }
  };
  return (
    <>
      <ToastContainer />

      <div className="bg-stone-200 pt-48 py-24 flex justify-center items-center relative">
        <div className=" flex flex-col gap-6  bg-white  w-[700px] p-8 rounded-2xl">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold "> Forgot your password? </h1>
            <p className="text-stone-600">
              {" "}
              Please enter your register email for OTP verification
            </p>
          </div>
          <form onSubmit={handleSubmit} className=" flex flex-col gap-6">
            <input
              className="w-full p-3 outline-none border-b-1 border-neutral-200"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errorMessage && (
              <div className="flex justify-end">
                <p className="text-red-500">{errorMessage}</p>
              </div>
            )}
            <div className="flex justify-end">
              <button
                className="w-full py-3 capitalize font-bold flex justify-center items-center gap-3 rounded-full px-5 btn-bg text-white cursor-pointer"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Loading..."
                ) : (
                  <>
                    Submit <FaArrowRight className="text-lg btn-arrow" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordComponent;
