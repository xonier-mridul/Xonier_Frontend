import React, {useState, useEffect} from 'react'
import axios from 'axios'
import AdminProfile from '../../components/admin/AdminProfile';

const Profile = () => {
  const [userData, setUserData] = useState({})


  const fetchUserProfileData = async()=>{
  try {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}user/profile`, {withCredentials: true});
    if(response.status === 200){
      setUserData(response?.data?.user)

    }
  } catch (error) {
    console.error(error)
  }
  }

  useEffect(() => {
    fetchUserProfileData();
  }, [])
     
  

  return (
   
        <div className='p-5 flex flex-col gap-5'>
            <AdminProfile userData={userData} />
        </div>
      
    
  )
}

export default Profile
