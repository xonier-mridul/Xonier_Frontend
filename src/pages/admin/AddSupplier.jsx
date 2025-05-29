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
          address:"",
          companyGSTNumber:''
    })
    const [branchDetail, setBranchDetail] = useState([
        {
          gstNumber: "",
          state: "",
          address: "",
        },
      ]);
     const navigate = useNavigate();

     const addBranchField = () => {
    setBranchDetail([
      ...branchDetail,
      { gstNumber: "", state: "", address: "" },
    ]);
  };

  const removeBranchField = (index) => {
    if (branchDetail.length === 1) return;
    const updated = branchDetail.filter((_, i) => i !== index);
    setBranchDetail(updated);
  };

     const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBranchChange = (index, e) => {
    const { name, value } = e.target;
    const updatedBranches = [...branchDetail];
    updatedBranches[index][name] = value;
    setBranchDetail(updatedBranches);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await api.post("/user/add-user-by-admin", {...formData, branchDetail}, { withCredentials: true });
      if (response.status === 201) {
        toast.success("Supplier created successfully");
        setFormData({
          name: "",
          email: "",
          number: "",
          company: "",
          role: "supplier",
          category: "",
          password: "",
        });
        
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
          handleBranchChange={handleBranchChange}
          branchDetail={branchDetail}
          addBranchField={addBranchField}
          removeBranchField={removeBranchField}
        />
      </div>
    </>
  )
}

export default AddSupplier
