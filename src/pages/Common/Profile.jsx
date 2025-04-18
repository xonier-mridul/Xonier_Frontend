import React, {useState, useEffect} from 'react'
import UserProfile from '../../components/UserProfile'
import axios from 'axios'

const Profile = () => {
    const [userProfileData, setUserProfileData] = useState({});

    const getProfileData = async ()=>{
   try {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}user/profile`, {withCredentials: true})
    if(response.status === 200){
        setUserProfileData(response.data?.user)
    }
   } catch (error) {
    console.error(error)
   }
    }
    
     useEffect(() => {
       getProfileData()
     }, [])
     
  

  return (
   
        <div className='p-5 flex flex-col gap-5'>
            <UserProfile userProfileData={userProfileData} />
        </div>
      
    
  )
}

export default Profile
