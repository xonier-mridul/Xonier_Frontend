import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { FaEye, FaEyeSlash, FaArrowRight } from "react-icons/fa";
import ForgotPasswordComponent from "../components/ForgotPasswordComponent";


const ForgotPassword = () => {
  return (
    <>
      <ForgotPasswordComponent/>
    </>
  );
};

export default ForgotPassword;
