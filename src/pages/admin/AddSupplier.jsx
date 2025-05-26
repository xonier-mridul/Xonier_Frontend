import React, { useState } from "react";

import api from "../../components/common/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AddSupplierForm from "../../components/admin/AddSupplierForm";

const AddSupplier = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errMessage, setErrMessage] = useState(null)
    const [formData, setFormData] = useState({
         name: "",
          email: "",
          number: "",
          company: "",
          role: "supplier",
          category: "",
          password: "",
    })
     const navigate = useNavigate();

     const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await api.post("/user/add-user-by-admin", formData, { withCredentials: true });
      if (response.status === 201) {
        setFormData({
          name: "",
          email: "",
          number: "",
          company: "",
          role: "supplier",
          category: "",
          password: "",
        });
        toast.success("Supplier created successfully");
        setErrMessage(null)
        navigate("/admin/suppliers");
      }
    } catch (error) {
      console.error(error);
      setErrMessage(error.response?.data?.message)
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <>
    <div className="m-8 flex flex-col gap-8">
        <AddSupplierForm
          formData={formData}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          isLoading={isLoading}
          navigate={navigate}
          errMessage={errMessage}
        />
      </div>
    </>
  )
}

export default AddSupplier
