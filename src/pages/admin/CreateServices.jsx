import React, { useState, useEffect } from "react";
import api from "../../components/common/api";
import CreateServicesForm from "../../components/admin/CreateServicesForm";
import { toast } from "react-toastify";

const CreateServices = () => {
  const [errMessage, setErrMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [formData, setFormData] = useState({
    serviceImage: "",
    imagePreview: "",
    name: "",
    category: "",
    description: "",
    feature: [],
    shortDescription: "",
    isActive: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFeatureChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, feature: [...prev.feature, value] }));
  };

  const getCategoryData = async () => {
    try {
      const response = await api.get("/category", { withCredentials: true });
      if (response.status === 200) {
        setCategoryData(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getSubCategoryData = async () => {
    try {
      const response = await api.get("/sub-category", {
        withCredentials: true,
      });
      if (response.status === 200) {
        setSubCategoryData(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategoryData();
    getSubCategoryData();
  }, []);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("shortDescription", formData.shortDescription);
    formDataToSend.append("description", formData.description);

    // Append features as multiple fields
    formData.feature.forEach((feat) => {
      formDataToSend.append("feature", feat);
    });

    // Append the image
    if (formData.serviceImage) {
      formDataToSend.append("serviceImage", formData.serviceImage);
    }

    try {
      const response = await api.post("/service/add", formDataToSend, {
        withCredentials: true,
      });
      if(response.status === 201) {
        toast.success("Service created successfully");
        setFormData({
          serviceImage: "",
          imagePreview: "",
          name: "",
          category: "",
          description: "",
          feature: [],
          shortDescription: "",
          isActive: "",
        });
      }
      setErrMessage(null);
    } catch (err) {
      console.error("Error uploading service:", err);
      setErrMessage(err.response?.data?.message || "Something went wrong");
    }
    finally{
        setIsLoading(false);
    }
  };

  return (
    <>
      <div className="p-5 flex flex-col gap-5">
        <CreateServicesForm
          handleSubmit={handleSubmit}
          setFormData={setFormData}
          formData={formData}
          errMessage={errMessage}
          handleChange={handleChange}
          categoryData={categoryData}
          subCategoryData={subCategoryData}
          handleFeatureChange={handleFeatureChange}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};

export default CreateServices;
