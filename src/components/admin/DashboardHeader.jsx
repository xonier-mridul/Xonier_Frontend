import React, { useState, useEffect } from "react";
import { IoIosNotifications } from "react-icons/io";
import axios from "axios";
import AdminImg from "../../assets/admin-img.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogoutPopup from "../common/LogoutPopup";

const DashboardHeader = () => {
  const [userProfileData, setUserProfileData] = useState({});
  const [showProfileTab, setShowProfileTab] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [logoutPopupShow, setLogoutPopupShow] = useState(false);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  const Route = useLocation().pathname;
  const Pathname = Route.split("/").pop().split("-").join(" ");
  const Navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}user/logout`,
        {},
        { withCredentials: true }
      );
      if (response.status === 200) {
        Navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Logout failed");
    }
  };

  const getProfileData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}user/profile`,
        { withCredentials: true }
      );
      if (response.status === 200) {
        setUserProfileData(response.data?.user);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  const closeLogoutPopup = () => {
    setLogoutPopupShow(false);
  };

  return (
    <>
      <ToastContainer />

      {logoutPopupShow && (
        <LogoutPopup logout={handleLogout} logoutShow={closeLogoutPopup} />
      )}
      <div className=" backdrop-blur-xl bg-transparent w-full  flex justify-between items-center p-3 px-6 ">
        <div className="flex items-center gap-10">
          <h2 className="text-2xl font-bold capitalize w-50 truncate">
            {Pathname}
          </h2>
          <div className="flex items-center gap-4 ">
            <button
              className="h-9 w-9 rounded-full flex justify-center items-center border-2 border-teal-600 text-teal-600 cursor-pointer hover:bg-blue-800 hover:text-white transition-all duration-300"
              onClick={() => Navigate(-1)}
            >
              <FaArrowLeft />
            </button>
            <button
              className="h-9 w-9 rounded-full flex justify-center items-center border-2 border-teal-600 text-teal-600 cursor-pointer hover:bg-blue-800 hover:text-white transition-all duration-300"
              onClick={() => Navigate(1)}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="flex justify-end items-center gap-6">
          <div
            className="relative"
            onMouseEnter={() => setShowNotification(true)}
            onMouseLeave={() => setShowNotification(false)}
          >
            <div className="h-10 w-10 rounded-lg border-2 border-emerald-500 flex items-center justify-center relative cursor-pointer">
              <IoIosNotifications className="text-2xl bell text-teal-950" />
              <span className="w-5 h-5 bg-red-500 rounded-full absolute -top-1 -right-1 text-white text-[12px] flex items-center justify-center">
                5
              </span>
            </div>

            <motion.div
              animate={
                showNotification
                  ? { opacity: 1, y: 0, display: "block" }
                  : { opacity: 0, y: 10, display: "none" }
              }
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-[150%] w-60 -left-[220%] rounded-lg bg-white shadow-[0_0_15px_#00000020] overflow-hidden"
            >
              <div className="bg-blue-800 p-3 flex justify-center">
                <h5 className="capitalize text-xl font-bold text-white">
                  Notifications
                </h5>
              </div>
              <ul>
                <li></li>
              </ul>
            </motion.div>
          </div>
          <div
            className="flex items-center gap-4 relative cursor-pointer"
            onMouseEnter={() => setShowProfileTab(true)}
            onMouseLeave={() => setShowProfileTab(false)}
          >
            <div className="h-10 w-10 relative rounded-lg">
              <img
                className="w-full object-cover rounded-lg"
                src={AdminImg}
                alt=""
              />
              {userProfileData?.isActive === true && (
                <span className="h-2.5 w-2.5 rounded-full bg-green-600 absolute z-50 bottom-0 right-0"></span>
              )}
            </div>
            <h3 className="text-lg font-bold capitalize">
              {" "}
              {userProfileData.name}{" "}
            </h3>
            <motion.ul
              animate={
                showProfileTab
                  ? { opacity: 1, y: 0, display: "block" }
                  : { opacity: 0, y: 10, display: "none" }
              }
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="w-full bg-white absolute top-[130%] p-8 py-6 rounded-lg shadow-[0_0_15px_#00000020] flex flex-col gap-4 z-40"
            >
              <li>
                <Link
                  to={"profile"}
                  className="text-lg hover:text-green-400 transition-all duration-300"
                >
                  {" "}
                  My Profile{" "}
                </Link>
              </li>
              <li>
                <button
                  className="text-lg hover:text-green-400 transition-all duration-300"
                  onClick={() => setLogoutPopupShow(!logoutPopupShow)}
                >
                  {" "}
                  Log Out{" "}
                </button>
              </li>
            </motion.ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
