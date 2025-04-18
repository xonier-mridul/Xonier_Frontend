import React from 'react'

const CreateQuotationComponent = () => {
  return (
    <>
      <div className='flex  w-full items-center gap-5'>
         <div className='w-1/2 bg-white rounded-4xl flex flex-col gap-6 border-orange-500 border-2 px-4 py-3'>
            <h2 className='text-md font-semibold uppercase'>BRFQ Id: </h2>
         </div>
         <div className='w-1/2 bg-white rounded-4xl flex flex-col gap-6 border-orange-500 border-2 px-4 py-3'>
            <h2 className='text-md font-semibold '>Buyer Id: </h2>
         </div>
      </div>
      <div className='bg-white rounded-4xl flex flex-col gap-6 border-orange-500 border-2 '>
        <div className='px-8 py-6 border-b-1 border-[#eff2f5]'>
           <h2 className='font-semibold text-xl'> Make your quotation </h2>
        </div>

      </div>
    </>
  )
}

export default CreateQuotationComponent
