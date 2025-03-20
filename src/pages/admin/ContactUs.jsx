import React from 'react'
import ContactDataSubmitForm from '../../components/admin/ContactDataSubmitForm'
import ContactDataTable from '../../components/admin/ContactDataTable'

const ContactUs = () => {
  return (
    <>
       <div className='p-5 flex flex-col gap-5'>
          <ContactDataSubmitForm/>
          <ContactDataTable/>
       </div>
    </>
  )
}

export default ContactUs
