import React, {useState, useEffect} from 'react'
import DevProfileComponent from '../components/DevProfileComponent'
import DevBanner from '../components/DevBanner'
import bg from '../assets/18710.jpg'
import api from '../components/common/api'
import { useParams } from 'react-router-dom'

const DevProfile = () => {
  const [devData, setDevData] = useState(null)

  const {id} = useParams()

  const getDevData = async(id)=>{
    try {
      const response = await api.get(`/catalog/${id}`, {withCredentials: true})
      if(response.status === 200){
        setDevData(response.data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getDevData(id)
  }, [])
  
  return (
    <>
      <DevBanner bgImg={bg} subHeading={'Er'} heading={devData?.productName}/>
      <DevProfileComponent devData={devData}/>
    </>
  )
}

export default DevProfile
