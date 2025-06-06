import React, { useState, useEffect } from "react";
import api from "../../components/common/api";
import ResetPasswordForm from "../../components/common/UpdatePasswordForm";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const UpdatePassword = () => {
  const [userData, setUserData] = useState({});
  const [newPassShow, setNewPassShow] = useState(false);
  const [cNewPassShow, setCNewPassShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwords, setPasswords] = useState({
    newPassword: "",
    cNewPassword: "",
  });
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  const getUserData = async () => {
    try {
      const response = await api.get(`/user/byid/${id}`, { withCredentials: true });
      if (response.status === 200) {
        setUserData(response.data?.user);
        
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  // Handle Submit

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage("");
    setPasswords({ ...passwords, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!id) return setMessage("Invalid user id");
      if (passwords.newPassword !== passwords.cNewPassword)
        return setMessage(
          "Your new password is not matching please fill again"
        );
      const response = await api.patch(
        `/user/update-password/${id}`,
        passwords,
        { withCredentials: true }
      );
      if (response.status === 200) {
        toast.success("Your password updated successfully");
        setPasswords({
          newPassword: "",
          cNewPassword: "",
        });
        navigate(-1)
      }
    } catch (error) {
      console.error(error?.response?.data?.message);
      setMessage(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="p-5 flex flex-col gap-5">
        <ResetPasswordForm
          handleSubmit={handleSubmit}
          navigate={navigate}
          newPassShow={newPassShow}
          passwords={passwords}
          cNewPassShow={cNewPassShow}
          handleChange={handleChange}
          message={message}
          isLoading={isLoading}
          setNewPassShow={setNewPassShow}
          setCNewPassShow={setCNewPassShow}
          userData={userData}
        />
      </div>
    </>
  );
};

export default UpdatePassword;
