import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CreateQuotationComponent from '../../components/supplier/CreateQuotationComponent'

const CreateQuotation = () => {
  return (
    <>
      <div className='m-8 flex flex-col gap-8'>
         <CreateQuotationComponent/>
      </div>
    </>
  )
}

export default CreateQuotation
