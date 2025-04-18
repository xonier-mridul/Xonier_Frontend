import React, {} from 'react'

const UserProfile = ({userProfileData}) => {

    const createdAt = new Date(userProfileData.createdAt).toLocaleDateString();
    const updatedAt = new Date(userProfileData.updatedAt).toLocaleDateString();
  return (
    <>
      <div className=' border-orange-500 border-2 rounded-4xl m-6 mx-7 p-5 flex flex-col gap-5 bg-white'>
        
        <div className=' flex '>
         <h1 className='font-bold text-2xl capitalize '> {userProfileData.name} </h1>
        </div>
        <div className='flex items-center justify-center gap-5'>
            <div className='w-1/2 flex items-center gap-2 text-xl'><h2 className='font-semibold'>Email:</h2> <span>{userProfileData.email}</span> </div>
            <div className='w-1/2  flex items-center gap-2 text-xl'><h2 className='font-semibold'>Contact No:</h2> <span>{userProfileData.number}</span> </div>

        </div>
        <div className='flex items-center justify-center gap-5'>
            <div className='w-1/2 flex items-center gap-2 text-xl'><h2 className='font-semibold'>Company:</h2> <span>{userProfileData.company}</span> </div>
            <div className='w-1/2  flex items-center gap-2 text-xl'><h2 className='font-semibold'>Trade No:</h2> <span>{userProfileData.tradeNumber}</span> </div>

        </div>
        <div className='flex items-center justify-center gap-5'>
            <div className='w-1/2 flex items-center gap-2 text-xl'><h2 className='font-semibold'>Website:</h2> <a className='hover:text-orange-400 transition-all' href={userProfileData.website} target='_blank'>{userProfileData.website}</a> </div>
            <div className='w-1/2  flex items-center gap-2 text-xl'><h2 className='font-semibold'>Created At:</h2> <span>{createdAt}</span> </div>

        </div>

        <div className='flex items-center  gap-5'>
            <div className='w-1/2 flex items-center gap-2 text-xl'>
            <h2 className='font-semibold'>Updated At:</h2> <span>{updatedAt}</span> 
            </div>
        </div>
         
      </div>
    </>
  )
}

export default UserProfile
