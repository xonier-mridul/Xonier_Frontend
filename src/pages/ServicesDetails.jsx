import React, { useState, useEffect } from "react";
import ServicesDetailComponent from "../components/ServicesDetailComponent";
import { useParams } from "react-router-dom";
import api from "../components/common/api";
import ServicesDevelopers from "../components/ServicesDevelopers";

const ServicesDetails = () => {
  const [errMessage, setErrMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [serviceData, setServiceData] = useState(null);
  const [developersData, setDevelopersData] = useState([]);

  const { id } = useParams();

  const getServiceData = async (id) => {
    try {
      const response = await api.get(`/service/get/${id}`, {
        withCredentials: true,
      });
      if (response.status === 200) {
        setServiceData(response?.data?.data);
      }
    } catch (error) {
      console.error("Error fetching service data:", error);
      setErrMessage("Failed to fetch service details.");
    }
  };

  const getDevelopersData = async (id) => {
    try {
        const response = await api.get(`/catalog/catalog-by-services/${id}`, {withCredentials: true});
        if(response.status === 200) {
            setDevelopersData(response.data);
        }
    } catch (error) {
      console.error("Error fetching developers data:", error);
      setErrMessage("Failed to fetch developers data.");
        
    }
  }

  useEffect(() => {
    getServiceData(id);
    getDevelopersData(id);
}, []);

  return (
    <>
      <ServicesDetailComponent serviceData={serviceData} />
      <ServicesDevelopers developersData={developersData}/>
    </>
  );
};

export default ServicesDetails;
