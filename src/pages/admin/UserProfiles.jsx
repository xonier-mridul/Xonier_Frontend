import React, {useState, useEffect} from 'react'
import axios from 'axios'
import UserProfile from '../../components/common/UserProfileComponent'
import { useParams, useNavigate } from 'react-router-dom'

const UserProfiles = () => {
    const [userData, setUserData] = useState({})

   const {id} = useParams()

   const getUserProfileData = async()=>{
    try{
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}user/byid/${id}`, {withCredentials: true})
      if(response.status === 200){
        setUserData(response.data.user)
      }
    }
    catch(err){
        console.log(err)
    }
   }

   useEffect(()=>{
      getUserProfileData()
   },[])

  return (
    <>
      <div className='p-5 flex flex-col gap-5'>
       <UserProfile userData={userData}/>
      </div>
    </>
  )
}

export default UserProfiles
