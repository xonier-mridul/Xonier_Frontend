import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import QuotationEditForm from '../../components/supplier/QuotationEditForm';

const QuotationEdit = () => {
  

  return (
    <>
    <div className='p-5 px-7 flex flex-col gap-5'>

      <QuotationEditForm />
    </div>
    </>
  )
}

export default QuotationEdit
