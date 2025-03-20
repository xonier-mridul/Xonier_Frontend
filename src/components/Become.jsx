import React, { useState } from "react";

import { Link } from "react-router-dom";

// Media Start
import { FaCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
// Media Start

const Become = ({
    img,
    span,
    heading,
    hTwo,
    hTwoSpan,
    hThree,
    para,
    paraTwo,
  imgOne,
  imgTwo,
  imgThree,
  imgFour,
  listOne,
  listTwo,
  listThree,
  listFour,
  lOne,
  lTwo,
  lThree,
  lFour,
  lFive,
  btn,
  btnLink
}) => {
  const [lists, setLists] = useState([lOne, lTwo, lThree, lFour, lFive]);
  return (
    <>
      <div className="bg-stone-100 py-24">
        <div className="max-w-7xl mx-auto flex gap-16 ">
          <div className="w-1/3 ">
            <div className="sticky top-24 left-0">
              <figure className="image-anime">
                <img className="buyer-img" src={img} alt="buyer image" />
              </figure>
            </div>
          </div>
          <div className="w-2/3">
            <span className="anime-bg px-6 py-3 mb-3 ">{span}</span>
            <h2 className="text-[50px] font-bold leading-tight py-6">
              {heading}
             
            </h2>
            <p className="para pb-6">
              {para}
            </p>

            <h2 className="text-[50px] font-light leading-tight py-8">
              {hTwo}
              <span className="font-bold trans-color"> {hTwoSpan}</span>
            </h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-5 ">
                <img className="w-20" src={imgOne} alt="image" />
                <h3 className="text-[22px] font-bold text-[#042a2dbf]">
                  {listOne}
                </h3>
              </div>
              <div className="flex flex-col gap-5 ">
                <img className="w-20" src={imgTwo} alt="image" />
                <h3 className="text-[22px] font-bold text-[#042a2dbf]">
                  {listTwo}
                </h3>
              </div>
              <div className="flex flex-col gap-5 ">
                <img className="w-20" src={imgThree} alt="image" />
                <h3 className="text-[22px] font-bold text-[#042a2dbf]">
                  {listThree}
                </h3>
              </div>
              <div className="flex flex-col gap-5 ">
                <img className="w-20" src={imgFour} alt="image" />
                <h3 className="text-[22px] font-bold text-[#042a2dbf]">
                  {listFour}
                </h3>
              </div>
            </div>

            <h2 className="text-[50px] font-light leading-tight py-6">
              Our Keyfeatures for{" "}
              <span className="font-bold trans-color">{hThree}</span>
            </h2>
            <p className="para pb-8">
             {paraTwo}
            </p>
            <ul className="flex flex-col gap-4 pb-10">
              {lists.map((e, i) => (
                <li
                  className="text-lg font-bold text-[#042a2dd4] flex items-center gap-6"
                  key={i}
                >
                  {" "}
                  <FaCircle className="text-green-400 text-[10px]" /> {e}
                </li>
              ))}
            </ul>
            <Link
              className="capitalize font-bold flex items-center gap-3 rounded-full btn-bg text-white w-fit" to={btnLink}>
              {btn} <FaArrowRight className="text-lg btn-arrow" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Become;
