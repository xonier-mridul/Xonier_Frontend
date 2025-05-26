import React, { useState, useEffect } from "react";


import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";


const UpdatePasswordForm = ({handleSubmit, newPassShow, passwords, handleChange, cNewPassShow, message, isLoading, setNewPassShow, setCNewPassShow, navigate}) => {
  
 

  return (
    <>
    
      <div className="bg-white rounded-4xl flex flex-col gap-6 border-emerald-500 border-2 ">
        <div className="px-8 py-4 border-b-stone-200 border-b-1 flex justify-between">
          <h2 className="text-2xl font-semibold">Change your password here</h2>
          <button className="bg-teal-600 text-white px-5 py-2 rounded-lg hover:scale-103 cursor-pointer transition-all duration-300 flex gap-1.5 items-center" onClick={()=>navigate(-1)}><IoIosArrowBack className="text-lg"/> Back</button>
        </div>
        <div className="px-8 py-6">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-3">
                <label className="font-semibold text-lg" htmlFor="newPassword">
                  New Password
                </label>
                {newPassShow ? (
                  <div className="flex flex-nowrap items-center gap-2 border-1 border-zinc-200 p-3 rounded-lg">
                    {" "}
                    <input
                      type="text"
                      name="newPassword"
                      className="w-full  outline-none  "
                      value={passwords.newPassword}
                      onChange={handleChange}
                      placeholder="Enter your old password"
                    />{" "}
                    <span className="cursor-pointer" onClick={() => setNewPassShow(false)}>
                      <FaEyeSlash className="text-xl" />{" "}
                    </span>{" "}
                  </div>
                ) : (
                  <div className="flex flex-nowrap items-center gap-2 border-1 border-zinc-200 p-3 rounded-lg">
                    {" "}
                    <input
                      type="password"
                      name="newPassword"
                      className="w-full  outline-none  "
                      value={passwords.newPassword}
                      onChange={handleChange}
                      placeholder="Enter your old password"
                    />{" "}
                    <span className="cursor-pointer" onClick={() => setNewPassShow(true)}>
                      <FaEye className="text-xl" />{" "}
                    </span>{" "}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-semibold text-lg" htmlFor="newPassword">
                  Confirm New Password
                </label>
                {cNewPassShow ? (
                  <div className="flex flex-nowrap items-center gap-2 border-1 border-zinc-200 p-3 rounded-lg">
                    {" "}
                    <input
                      type="text"
                      name="cNewPassword"
                      className="w-full  outline-none  "
                      value={passwords.cNewPassword}
                      onChange={handleChange}
                      placeholder="Enter your old password"
                    />{" "}
                    <span className="cursor-pointer" onClick={() => setCNewPassShow(false)}>
                      <FaEyeSlash className="text-xl" />{" "}
                    </span>{" "}
                  </div>
                ) : (
                  <div className="flex flex-nowrap items-center gap-2 border-1 border-zinc-200 p-3 rounded-lg">
                    {" "}
                    <input
                      type="password"
                      name="cNewPassword"
                      className="w-full  outline-none  "
                      value={passwords.cNewPassword}
                      onChange={handleChange}
                      placeholder="Enter your old password"
                    />{" "}
                    <span className="cursor-pointer" onClick={() => setCNewPassShow(true)}>
                      <FaEye className="text-xl" />{" "}
                    </span>{" "}
                  </div>
                )}
              </div>
            </div>
            <div>
              {" "}
              <p className="text-red-500">{message} </p>
            </div>
            <div className="flex justify-end items-center">
              <button
                disabled={
               
                  !passwords.newPassword ||
                  !passwords.cNewPassword
                }
                className="bg-emerald-600 py-2.5 px-8 rounded-lg text-white text-lg disabled:bg-emerald-400 cursor-pointer hover:scale-104 transition-all duration-300"
                type="submit"
              >
                {" "}
                {isLoading ? "Submitting"  :"Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdatePasswordForm;
