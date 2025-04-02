import React, {useState, useEffect} from 'react'
import axios from "axios";
import ContactDataSubmitForm from '../../components/admin/ContactDataSubmitForm'
import ContactDataTable from '../../components/admin/ContactDataTable'

const ContactUs = () => {
  const [contactData, setContactData] = useState([]);

  const getContactData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}admin-contact`
      );
      if (response.status === 200) {
        setContactData(response.data);
      };
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getContactData();
  }, []);


  return (
    <>
       <div className='p-5 flex flex-col gap-5'>
          <ContactDataSubmitForm getContactData={getContactData}/>
          <ContactDataTable contactData={contactData} setContactData={setContactData} getContactData={getContactData}/>
       </div>
    </>
  )
}

export default ContactUs
