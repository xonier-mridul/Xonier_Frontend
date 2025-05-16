import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import CreateQuotationComponent from '../../components/supplier/CreateQuotationComponent'

const CreateQuotation = () => {

  

  return (
    <>
      <div className='m-8 flex flex-col gap-8'>
         <CreateQuotationComponent />
      </div>
    </>
  )
}

export default CreateQuotation
