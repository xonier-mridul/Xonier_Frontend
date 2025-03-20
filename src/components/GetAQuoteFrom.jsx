import React, { useState } from "react";
import BuyerImg from "../assets/buyer-img.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import axios from "axios";

const GetAQuoteFrom = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    zip:"",
    document:"",
    message: "",
    quoteType:"Main"
  });

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, document: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
     await axios.post(`${import.meta.env.VITE_SERVER_URL}quote`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        
      },
    }
     );
     setFormData({
      fname: "",
    lname: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    zip:"",
    document:"",
    message: "",
     })
    } catch (error) {
      console.log(error.message);

    }

  };
  return (
    <>
      <div className="bg-stone-100 py-24">
        <div className="max-w-7xl mx-auto flex gap-16 ">
          <div className="w-1/3 ">
            <div className="sticky top-24 left-0">
              <figure className="image-anime">
                <img className="buyer-img" src={BuyerImg} alt="buyer image" />
              </figure>
            </div>
          </div>
          <div className="w-2/3">
            <span className="anime-bg px-6 py-3 mb-3 ">Get A Quote</span>
            <h2 className="text-[50px] font-bold leading-tight py-6">
              Request Your Custom Quote Today
            </h2>
            <p className="para pb-14">
              BildKart stands out by offering a streamlined procurement process,
              connecting buyers with reliable suppliers, transparent pricing,
              and comprehensive support. Simplify your material management while
              saving time, reducing costs, ensuring project success, and
              accessing a wide range of construction materials. Our intuitive
              platform empowers buyers with advanced tools for comparison,
              budgeting, and seamless order management, making construction
              procurement more efficient and stress-free.
            </p>

            <div className="bg-white rounded-2xl mb-14 p-8 shadow-[0px_0px_15px_rgba(0,0,0,0.1)]">
              <h3 className="text-[22px] font-bold pb-4">Send A Quote</h3>
              <p className="para pb-9">
                Unlock your potential with expert guidance! Schedule a free
                consultation toward personal and business success.{" "}
              </p>
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    name="fname"
                    placeholder="First Name"
                    value={formData.fname}
                    onChange={handleChange}
                    className="border-b-[1px] w-1/2 border-neutral-200 py-3 px-4 text-teal-950 outline-none"
                  />

                  <input
                    type="text"
                    name="lname"
                    placeholder="Last Name"
                    value={formData.lname}
                    onChange={handleChange}
                    className="border-b-[1px] w-1/2 border-neutral-200 py-3 px-4 text-teal-950 outline-none"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-b-[1px] w-1/2 border-neutral-200 py-3 px-4 text-teal-950 outline-none"
                  />

                  <input
                    type="number"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-b-[1px] w-1/2 border-neutral-200 py-3 px-4 text-teal-950 outline-none"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="border-b-[1px] w-1/2 border-neutral-200 py-3 px-4 text-teal-950 outline-none"
                  />
                  <select
                    name="budget"
                    id="budget"
                    onChange={handleChange}
                    value={formData.budget}
                    className="border-b-[1px] w-1/2 border-neutral-200 py-3 px-4 text-teal-950 outline-none"
                  >
                    <option value=""> Budget Range</option>
                    <option value="10 Lac - 50 Lac">10 Lac - 50 Lac</option>
                    <option value="50 Lac - 1 Cr">50 Lac - 1 Cr</option>
                    <option value="1 Cr - 5 Cr">1 Cr - 5 Cr</option>
                    <option value="5 Cr - 10 Cr">5 Cr - 10 Cr</option>
                    <option value="10 Cr - 20 Cr">10 Cr - 20 Cr</option>
                    <option value="More then 20 Cr">More then 20 Cr</option>
                  </select>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="text "
                    name="zip"
                    className="border-b-[1px] w-1/2 border-neutral-200 py-3 px-4 text-teal-950 outline-none"
                    value={formData.zip}
                    onChange={handleChange}
                    pattern="[0-9]{6}"
                    placeholder="Zip Code"
                  />
                  <input
                    type="file"
                    name="document"
                   
                    onChange={handleFileChange}
                    className="border-b-[1px] w-1/2 border-neutral-200 py-3 px-4 text-teal-950 outline-none"
                    placeholder="Documents"
                  />
                </div>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Message"
                  className="border-b-[1px] w-full border-neutral-200 py-3 px-4 text-teal-950 outline-none"
                ></textarea>
                <button
                  className="capitalize font-bold flex items-center gap-3 rounded-full w-fit  btn-bg text-white mt-5"
                  type="submit"
                >
                  Submit Query <FaArrowRight className="text-lg btn-arrow" />
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-[50px] font-light leading-tight py-6">
                Our Key
                <span className="font-bold trans-color">Features</span>
              </h2>
              <p className="para pb-8">
                I'm here to support your journey towards personal and
                professional growth! Whether you have questions about my
                coaching services.
              </p>
              <ul className="flex flex-col gap-4 pb-10">
                <li className="text-lg font-bold text-[#042a2dd4] flex items-center gap-6">
                  {" "}
                  <FaCircle className="text-green-400 text-[10px]" /> Unlimited
                  tenders for material
                </li>
                <li className="text-lg font-bold text-[#042a2dd4] flex items-center gap-6">
                  <FaCircle className="text-green-400 text-[10px]" /> Unlimited
                  tenders for subcontractors
                </li>
                <li className="text-lg font-bold text-[#042a2dd4] flex items-center gap-6">
                  <FaCircle className="text-green-400 text-[10px]" /> Unlimited
                  access to large network of material suppliers for all
                  requirements
                </li>
                <li className="text-lg font-bold text-[#042a2dd4] flex items-center gap-6">
                  <FaCircle className="text-green-400 text-[10px]" /> Easy to
                  use system for organising material delivery and pickup
                </li>
                <li className="text-lg font-bold text-[#042a2dd4] flex items-center gap-6">
                  <FaCircle className="text-green-400 text-[10px]" /> Easy to
                  use system for organising material delivery and pickup
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-end">
              <Link
                className="capitalize font-bold flex items-center gap-3 rounded-full btn-bg text-white w-fit"
                to={"/"}
              >
                Back to Home <FaArrowRight className="text-lg btn-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetAQuoteFrom;
