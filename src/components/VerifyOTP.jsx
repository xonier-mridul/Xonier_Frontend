import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { FaArrowRight } from 'react-icons/fa';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const VerifyOTP = () => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [message, setMessage] = useState('');
  const [counter, setCounter] = useState(60);
  const [verificationEmail, setVerificationEmail] = useState("")
  const inputRefs = useRef([]);



  // Navigate
  const navigate = useNavigate();



  const handleChange = (element, index) => {
    const value = element.value.replace(/\D/, '');
    if (value) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      const newOtp = [...otp];
      if (otp[index]) {
        newOtp[index] = '';
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };


  // Handle Submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalOTP = otp.join('');
    if (finalOTP.length < 6) {
      setMessage('Please enter a valid 6-digit OTP');
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}user/verify-otp`, { otp: finalOTP, emailForVerification: verificationEmail });
      if (response.status === 200) {
        toast.success("OTP verified successfully");
        localStorage.clear("emailForVerify")
        setTimeout(() => { 
            navigate("/login")
        }, 3000);
        
      }
    } catch (error) {
      setMessage("Invalid OTP, please check and try again");
    }
  };

 const handleRegenerateOtp = async()=>{
  try {
    
  } catch (error) {
    
  }
 }

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev > 0) return prev - 1;
        clearInterval(interval);
        return 0;
      });
    }, 1000);

    const email = localStorage.getItem("emailForVerify")
    setVerificationEmail(email);

    return () => clearInterval(interval); 
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="bg-stone-200 pt-48 py-28 w-full flex justify-center">
        <div className="bg-white shadow-lg flex flex-col gap-5 p-9 rounded-2xl w-[570px]">
          <h2 className="text-2xl font-bold">Please Verify your OTP</h2>
          <p>OTP sent to your  email <span className='text-green-500 text-lg'>{verificationEmail || "Not Found"}</span> and valid for <span className='text-red-500'>10 min</span></p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-6 gap-3">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={otp[index]}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                  className="border-neutral-200 border w-12 h-12 outline-none rounded-lg text-center text-lg font-semibold"
                />
              ))}
            </div>

            {message && (
              <p className="text-red-600 text-sm font-medium">{message}</p>
            )}

            <button
              type="submit"
              className="py-3 capitalize w-full font-bold flex items-center justify-center gap-3 rounded-full px-5 btn-bg text-white cursor-pointer"
            >
              Submit <FaArrowRight className="text-lg btn-arrow" />
            </button>

            <div className={`${counter === 0 ? "justify-between" : "justify-center"} flex  items-center`}>
              <p>You get your OTP  within <span className='text-teal-600 text-lg'>{counter}s</span></p>
              {counter === 0 && <button className='text-teal-600 underline' type='button' onClick={handleRegenerateOtp}>
                Resend OTP
               </button>}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default VerifyOTP;
