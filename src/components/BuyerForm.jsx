import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaEye, FaEyeSlash, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import axios from "axios";

// Media Start

import { TbSlashes } from "react-icons/tb";

// Media End

const BuyerForm = () => {
  // States Start


  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company_name: "",
    role:"",
    message: "",
    
 
  });

  // States End

  // Form Change Start
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({ ...formData, [name]: value });
  };
  // Form Change End

  // Form Submit Start
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const { confirm_password, ...dataToSubmit } = formData;
  
    try {
      axios.post(`${import.meta.env.VITE_SERVER_URL}user`, dataToSubmit, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        company_name: "",
        role:"",
        message: "",
      })
    } catch (error) {
      console.log(error);
    }
  };
  
  // Form Submit End


  return (
    <>
      <div className="bg-stone-100 py-24">
        <div className="max-w-7xl mx-auto mb-14">
          <div className="flex ">
            <div className="w-[55%] flex flex-col gap-4">
              <span className="uppercase text-teal-950 font-semibold tracking-wider text-sm flex items-center gap-2">
                <TbSlashes className="text-xl text-green-400" /> Get in touch
              </span>
              <h2 className="text-[50px] font-light leading-none pb-5">
                Let's work together to create
                <span className="font-bold trans-color">
                  
                 {" "} the journey and business
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex gap-10 items-center">
          <div className="w-1/2">
            <div className="bg-white rounded-2xl p-8 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.1)]">
              <h3 className="font-bold text-[22px] pb-3 capitalize">
                Please fill the form
              </h3>
              <p className="para pb-10">
                Unlock your potential with expert guidance! Schedule a free
                consultation toward personal and business success.
              </p>
              
                <h2 className="text-2xl font-bold flex items-center gap-1 leading-none pb-5">
                  <span className="text-red-500 text-2xl">*</span>Enter your
                  company details
                </h2>
              
              <form className="" onSubmit={handleSubmit}>
        
                  <div className="form1 flex flex-col gap-5">
                    <div className="flex gap-5">
                      <input
                        className="border-b-[1px] w-1/2 border-neutral-200 py-3 px-4 text-teal-950 outline-none"
                        value={formData.first_name}
                        onChange={(e) => handleChange(e)}
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        
                        required
                      />
                      <input
                        type="text"
                        name="last_name"
                        className="border-b-[1px] w-1/2 border-neutral-200 py-3 px-4 text-teal-950 outline-none"
                        value={formData.last_name}
                        onChange={(e) => handleChange(e)}
                        placeholder="Last Name"
                        required
                      />
                    </div>
                    <div className="flex gap-5">
                     
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => handleChange(e)}
                        value={formData.email}
                        className="border-b-[1px] w-1/2 border-neutral-200 py-3 px-4 text-teal-950 outline-none"
                        required
                      />

                      <input
                        type="number"
                        onChange={(e) => handleChange(e)}
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        className="border-b-[1px] w-1/2 border-neutral-200 py-3 px-4 text-teal-950 outline-none"
                        required
                      />
                    </div>
                    <div className="flex gap-5">
                     
                      <input
                        type="text"
                        onChange={(e) => handleChange(e)}
                        name="company_name"
                        placeholder="Company Name"
                        value={formData.company_name}
                        className="border-b-[1px] w-1/2 border-neutral-200 py-3 px-4 text-teal-950 outline-none"
                        required
                      />
                      <select name="role" id="role" value={formData.role} onChange={(e) => handleChange(e)} className="border-b-[1px] w-1/2 border-neutral-200 py-3 px-4 text-teal-950 outline-none">
                        <option value="" hidden> Who are you? </option>
                        <option value="buyer"> Buyer </option>
                        <option value="supplier"> Supplier </option>
                      </select>
                    </div>
                    <textarea
                      name="message"
                      onChange={(e) => handleChange(e)}
                      className="border-b-[1px] w-full border-neutral-200 py-3 px-4 text-teal-950 outline-none"
                      placeholder="Message"
                      value={formData.message}
                      id="message"
                      rows={4}
                    ></textarea>
                  </div>
            
                <div className="flex items-center justify-between mt-8">
                  
                    <button
                      className="capitalize font-bold flex items-center gap-3 rounded-full btn-bg text-white w-fit disabled:bg-green-400"
                      type="submit"
                    >
                      Submit <FaArrowRight className="text-lg btn-arrow " />
                    </button>
                
                </div>
              </form>
            </div>
          </div>
          <div className="w-1/2">
          <h2 className="text-[28px] font-bold flex items-center gap-1 leading-none pb-3">
               <span className="text-red-500 text-3xl">*</span>Free enrollment with BildKart—limited-time!
          </h2>
          <div className="flex flex-col gap-3 py-7 border-b-neutral-200 border-b-[1px]">
             <h3 className="font-bold text-[22px]">Call Us</h3>
             <p className="para">Call us today for personalized coaching and transformative growth!</p>
             <Link to={"tel:+1840841256"} className=" flex items-center gap-3 service-footer pt-2"> <span className="anime-bg h-10 w-10 rounded-full flex items-center justify-center"><FaPhoneAlt className=" text-xl text-white" /></span> <span className="font-bold text-2xl text-green-400">+1 840 841 256</span></Link>
          </div>
          <div className="flex flex-col gap-3 py-7 border-b-neutral-200 border-b-[1px]">
             <h3 className="font-bold text-[22px] capitalize">email us</h3>
             <p className="para">Email us now for expert coaching and tailored growth solutions!</p>
             <Link to={"mailto:xoniertechnology@gmail.com"} className=" flex items-center gap-3 service-footer pt-2"> <span className="anime-bg h-10 w-10 rounded-full flex items-center justify-center"><FaEnvelope className=" text-xl text-white" /></span> <span className="font-bold text-2xl text-green-400">xoniertechnology@gmail.com</span></Link>
          </div>
          <div className="flex flex-col gap-3 py-7  ">
             <h3 className="font-bold text-[22px] capitalize">visit us</h3>
             <p className="para">Visit us for personalized coaching and guidance toward lasting success!</p>
             <Link to={""} className=" flex items-center gap-3 service-footer pt-2"> <span className="anime-bg h-10 w-10 rounded-full flex items-center justify-center"><FaMapMarkerAlt className=" text-xl text-white" /></span> <span className="font-bold text-2xl text-green-400">161 BSi H-block Sector 63 Noida UP 132606</span></Link>
          </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerForm;
