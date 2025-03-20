import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Media Start

import { TbSlashes } from "react-icons/tb";
import ClientOne from "../assets/client-1.jpg";
import ClientTwo from "../assets/satisfy-2.jpg";
import ClientThree from "../assets/satisfy-3.jpg";
import ClientFour from "../assets/satisfy-4.jpg";
import ClientFive from "../assets/satisfy-5.jpg";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

// Media End



const FAQ = () => {
    // States Start
     
    const [faqData, setFaqData] = useState([]);
    const [showFAQ, setShowFAQ] = useState(null)

    // States End


    // Fetch Data Start
    useEffect(() => {
       axios.get(`${import.meta.env.VITE_SERVER_URL}faq`)
      .then(res=> setFaqData(res.data.filter(faq=>faq.isActive)))
      .catch(err=>console.log(err.message));
    
    }, [])
    
    // Fetch Data End

    // Functions Start 
    
    const handleShow = (e)=>{
        setShowFAQ(e === showFAQ ? null : e)
    }

    // Functions End


  return (
    <>
      <div className="py-24 bg-[#F2F1ED]">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="w-1/2 flex flex-col gap-5">
            <h3 className="uppercase tracking-widest  font-semibold text-sm flex items-center gap-2">
              <TbSlashes className="text-xl text-green-400" />
              FAQ
            </h3>
            <h2 className="text-[50px] font-light leading-tight w-full">
              Your Business questions &nbsp;
              <span className="font-bold trans-color">
                answered simply here
              </span>
            </h2>
            <div className="bg-white rounded-lg p-8 w-fit flex flex-col gap-3">
              <div className="">
                <div className="client-image">
                  <figure className="image-anime">
                    <img src={ClientOne} alt=" client one " />
                  </figure>
                </div>
                <div className="client-image">
                  <figure className="image-anime">
                    <img src={ClientTwo} alt=" client one " />
                  </figure>
                </div>
                <div className="client-image">
                  <figure className="image-anime">
                    <img src={ClientThree} alt=" client one " />
                  </figure>
                </div>
                <div className="client-image">
                  <figure className="image-anime">
                    <img src={ClientFour} alt=" client one " />
                  </figure>
                </div>
                <div className="client-image">
                  <figure className="image-anime">
                    <img src={ClientFive} alt=" client one " />
                  </figure>
                </div>
              </div>
              <h3 className="text-xl font-bold">Still have you any question?</h3>
              <p className="para pb-2">We are ready to help you to answer any questions.</p>
              <Link className="flex items-center gap-3 text-green-400 font-bold" to={'tel:8700914459'}> <FaPhoneVolume className="text-lg"/> +91 87009 14459</Link>
            </div>
          </div>
          <div className="w-1/2">

           <div className="flex flex-col gap-4">
              {faqData.map((item, index) => (
                <div className={` ${showFAQ === index && "main-bg text-white"} border-[1px] border-[#DFE1DE] rounded-xl p-4 w-full`} key={item._id}>
                    <h2 className={`text-[22px] font-bold flex items-center justify-between  ${showFAQ === index && "border-b-[1px] pb-5 text-white"} border-[#DFE1DE] cursor-pointer`} onClick={()=>handleShow(index)}>{item.question} <FaPlus className={`${showFAQ === index ? "rotate-45" : "rotate-0 "} text-2xl text-teal-950 transition-all duration-500`}
                     /></h2>
                   <p className={`${showFAQ === index ? "height-anim" :"hidden h-0 overflow-hidden"} pt-5`} >{item.answer}</p>
                    
                </div>
              ))}
           </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
