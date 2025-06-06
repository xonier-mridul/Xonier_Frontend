import React, {useState, useEffect} from 'react'
import PageBanner from '../components/PageBanner'
import bg from '../assets/developers-bg.jpg'
import AllDevelopers from '../components/AllDevelopers'
import api from '../components/common/api'

const Developers = () => {
    const [getCategoryData, setGetCategoryData] = useState([]);
    const [developersData, setDevelopersData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [activeId, setActiveId] = useState(null)

    const getDeveloperData = async()=>{
        try {
            const response = await api.get(`/catalog/getall`, {withCredentials: true})
            if(response.status === 200){
                setDevelopersData(response?.data?.data)
                setFilterData(response?.data?.data)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const getCategory = async () => {
            try {
                const response = await api.get('/category', {withCredentials:true});
                if(response.status === 200){
                    setGetCategoryData(response.data);
                    
                }
            } catch (error) {
                console.error("Error fetching category data:", error);
            }
        }

    const handleFilter = (id)=>{
          setFilterData(developersData.filter(item=>item.category._id === id))
          setActiveId(id)
          console.log("id",activeId)
    }

    useEffect(() => {
      getDeveloperData(),
      getCategory()
    }, [])
    
  return (
    <>
      <PageBanner bgImg={bg} subHeading={"Our"} heading={"Developers"} />
      <AllDevelopers developersData={developersData} getCategoryData={getCategoryData} handleFilter={handleFilter} filterData={filterData} activeId={activeId}/>
    </>
  )
}

export default Developers
