import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import api from "../components/common/api"

import { FaEye, FaEyeSlash, FaArrowRight } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignInForm = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Navigate

  const navigate = useNavigate();

  // Navigate End

  const handleChange = (e) => {
    setErrorMessage("");
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await api.post('user/login', formData,
        { withCredentials: true })
        

      if (response.status === 200) {
        toast.success("Login Successfully");

        if (response.data?.user.role === "admin") {
          navigate("/admin");
        }
        if (response.data?.user.role === "buyer") {
          navigate("/buyer-admin");
        }
        if (response.data?.user.role === "supplier") {
          navigate("/supplier-admin");
        }

        setFormData({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response?.data?.message);
      if (error.response?.status === 401) {
        localStorage.setItem("emailForVerify", formData.email);
        setTimeout(() => {
          navigate("/verify-otp");
        }, 2500);
        return
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />

      <div className="bg-stone-200 pt-48 py-24 flex justify-center items-center relative">
        <div className=" flex flex-col gap-5  bg-white  w-[700px] p-8 rounded-2xl">
          <h1 className="text-2xl font-bold"> Log In from </h1>

          <form onSubmit={handleSubmit} className=" flex flex-col gap-5">
            <input
              className="w-full p-3 outline-none border-b-1 border-neutral-200"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {passwordShow ? (
              <div className="flex gap-3 items-center w-full p-3  border-b-1 border-neutral-200">
                {" "}
                <input
                  type="text"
                  className="outline-none  w-full"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />{" "}
                <span onClick={() => setPasswordShow((prev) => !prev)}>
                  {" "}
                  <FaEyeSlash />{" "}
                </span>{" "}
              </div>
            ) : (
              <div className="flex gap-3 items-center w-full p-3  border-b-1 border-neutral-200">
                {" "}
                <input
                  type="password"
                  className="outline-none  w-full"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />{" "}
                <span onClick={() => setPasswordShow((prev) => !prev)}>
                  {" "}
                  <FaEye />{" "}
                </span>{" "}
              </div>
            )}
            <div className="flex justify-between">
              <p className="text-red-500">{errorMessage}</p>
              <Link to={"/forget-password"} className="text-green-400 underline">
                Forget Password?{" "}
              </Link>
            </div>

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
          <div className="flex justify-center items-center">
            <p>
              If you don't have any account?{" "}
              <Link to={"/signup"} className="text-green-400">
                Sign Up
              </Link>
            </p>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
