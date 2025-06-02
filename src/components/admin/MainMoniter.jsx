import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FaArrowUpLong } from "react-icons/fa6";
import Counter from "react-countup";
import { motion, useInView } from "framer-motion";

const MainMonitor = ({userQuantityData, orderCount}) => {
  // Quote Data Start
  const [quoteData, setQuoteData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}quote`)
      .then((res) => setQuoteData(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  const quoteLength = quoteData.length;

  // View Detection for Counter
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.5, triggerOnce: true });

  // View Detection for Progress Bar
  const progressRef = useRef(null);
  const isProgressInView = useInView(progressRef, { once: true });

  return (
    <div className="w-full  rounded-xl">
      <div className="grid grid-cols-4 gap-6">
        <div ref={ref} className="bg-white flex-col items-center justify-center rounded-4xl border-emerald-500 border-2 overflow-hidden p-9 py-7 flex gap-2">
          <h3 className="text-2xl font-bold uppercase text-nowrap">Order Received</h3>
          <div className="flex gap-2 flex-col justify-center items-end w-full">
            <h3 className="para text-lg">Today's Order</h3>
            <h2 className="flex text-3xl font-bold">
              <sup className="text-lg text-red-500">
                <FaArrowUpLong />
              </sup>
              <Counter start={0} end={inView ? orderCount : 0} duration={2} />
            </h2>
          </div>
          
          <div className="w-full">
          <h2 className="text-green-400">20%</h2>
          <div ref={progressRef} className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: isProgressInView ? "20%" : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="bg-green-400 h-full"
              ></motion.div>
          </div>
              </div>
        </div>
        <div ref={ref} className="bg-white flex-col items-center justify-center rounded-4xl border-emerald-500 border-2 overflow-hidden p-9 py-7 flex gap-2">
          <h3 className="text-2xl font-bold uppercase">Total Buyers</h3>
          <div className="flex gap-2 flex-col justify-center items-end w-full">
            <h3 className="para text-lg capitalize">Buyers</h3>
            <h2 className="flex text-3xl font-bold">
              <sup className="text-lg text-red-500">
                <FaArrowUpLong />
              </sup>
              
              <Counter start={0} end={inView ? userQuantityData?.buyerCount : 0} duration={2} />
            </h2>
          </div>
          
          <div className="w-full">
          <h2 className="text-green-400">30%</h2>
          <div ref={progressRef} className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: isProgressInView ? "30%" : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="bg-green-400 h-full"
              ></motion.div>
          </div>
              </div>
        </div>
        <div ref={ref} className="bg-white flex-col items-center justify-center rounded-4xl border-emerald-500 border-2 overflow-hidden p-9 py-7 flex gap-2">
          <h3 className="text-2xl font-bold uppercase text-nowrap">Total Vendors</h3>
          <div className="flex gap-2 flex-col justify-center items-end w-full">
            <h3 className="para text-lg">Vendors</h3>
            <h2 className="flex text-3xl font-bold">
              <sup className="text-lg text-red-500">
                <FaArrowUpLong />
              </sup>
              <Counter start={0} end={inView ? userQuantityData?.supplierCount : 0} duration={2} />
            </h2>
          </div>
          
          <div className="w-full">
          <h2 className="text-green-400">60%</h2>
          <div ref={progressRef} className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: isProgressInView ? "60%" : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="bg-green-400 h-full"
              ></motion.div>
          </div>
              </div>
        </div>
        <div ref={ref} className="bg-white flex-col items-center justify-center rounded-4xl border-emerald-500 border-2 overflow-hidden p-9 py-7 flex gap-2">
          <h3 className="text-2xl font-bold uppercase">YEARLY SALES</h3>
          <div className="flex gap-2 flex-col justify-center items-end w-full">
            <h3 className="para text-lg capitalize">Yearly Income</h3>
            <h2 className="flex text-3xl font-bold">
              <sup className="text-lg text-red-500">
                <FaArrowUpLong />
              </sup>
              <Counter start={0} end={inView ? 12000 : 0} duration={2} />
            </h2>
          </div>
          
          <div className="w-full">
          <h2 className="text-green-400">80%</h2>
          <div ref={progressRef} className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: isProgressInView ? "80%" : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="bg-green-400 h-full"
              ></motion.div>
          </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default MainMonitor;
