import React,{useState, useEffect} from 'react'
import ServicesComponent from '../components/ServicesComponent'
import api from '../components/common/api'



function Services() {
    const [servicesData, setServicesData] = useState([]);
    const [getCategoryData, setGetCategoryData] = useState([]);
    const [filteredServices, setFilteredServices] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);



    const getServices = async()=>{
        try {
             const response = await api.get('/service/getall', {withCredentials:true});
        if(response.status === 200){
            setServicesData(response.data.data);
            setFilteredServices(response.data.data); 
        }
        } catch (error) {
            console.error("Error fetching services data:", error);
        }
       
    }

    const getCategory = async () => {
        try {
            const response = await api.get('/category/', {withCredentials:true});
            if(response.status === 200){
                setGetCategoryData(response.data);
                
            }
        } catch (error) {
            console.error("Error fetching category data:", error);
        }
    }

    useEffect(() => {
        getServices();
        getCategory();
    }, []);

    const handleServiceFilter = (categoryId) => {
        if (categoryId) {
            setActiveCategory(categoryId);
            const filteredServices = servicesData.filter(service => service.category._id === categoryId);
            setFilteredServices(filteredServices);
        } else {
            setFilteredServices(servicesData); 
        }
    }

  return (
    <>
      <ServicesComponent servicesData={servicesData} getCategoryData={getCategoryData} handleServiceFilter={handleServiceFilter} filteredServices={filteredServices} activeCategory={activeCategory}/>
    </>
  )
}

export default Services
