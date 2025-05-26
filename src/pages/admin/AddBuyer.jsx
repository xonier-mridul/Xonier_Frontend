import React, { useState } from "react";
import AddBuyerFrom from "../../components/admin/AddBuyerFrom";
import api from "../../components/common/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddBuyer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    role: "buyer",
    number: "",
    category: "",
    tradeNumber: "",
    website: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await api.post("/user/add-user-by-admin", formData, { withCredentials: true });
      if (response.status === 201) {
        setFormData({
          name: "",
          company: "",
          email: "",
          role: "buyer",
          number: "",
          category: "",
          tradeNumber: "",
          website: "",
          password: "",
        });
        toast.success("Buyer created successfully");
        navigate("/admin/buyer");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <div className="m-8 flex flex-col gap-8">
        <AddBuyerFrom
          formData={formData}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};

export default AddBuyer;
