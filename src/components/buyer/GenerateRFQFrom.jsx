import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Media Start
import { FaDownload, FaStarOfLife } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
// Media End

const GenerateRFQFrom = () => {
  const [active, setActive] = useState(1);
  const [categoryData, setCategoryData] = useState([]);
  const [brandData, setBrandData] = useState([]);
  const [agreement, setAgreement] = useState(false);
  const [downloadConditionPopup, setDownloadConditionPopup] = useState(false);
  const [formData, setFromData] = useState({
    category: "",
    brand: "",
    quantity: "",
    deliveryDate: "",
    DeliveryLocation: "",
    pinCode: "",
    comments: "",
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Get Category
  const getCategory = async () => {
    try {

      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}category`
      );
      if (response.status === 200) return setCategoryData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };



  // Get Brands

  const getBrands = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}user`
      );
      if (response.status === 200) return setBrandData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getCategory();
   
    getBrands();
  }, []);

// Handle Submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDatas = new FormData();
    formDatas.append("category", formData.category);
    formDatas.append("brand", formData.brand);
    formDatas.append("quantity", formData.quantity);
    formDatas.append("deliveryDate", formData.deliveryDate);
    formDatas.append("DeliveryLocation", formData.DeliveryLocation);
    formDatas.append("pinCode", formData.pinCode)
    formDatas.append("comments", formData.comments);

    
    if (file) {
        formDatas.append("document", file); 
    }

    try {
        const response = await axios.post(
            `${import.meta.env.VITE_SERVER_URL}new-rfq`,
            formDatas,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        if (response.status === 201) {
            toast.success("RFQ generated successfully");
            setFromData({
                category: "",
                brand: "",
                quantity: "",
                deliveryDate: "",
                DeliveryLocation: "",
                pinCode: "",
                comments: "",
            });
        }

    } catch (error) {
        console.error("Error:", error);
        toast.error("RFQ not generated");
        console.log(formDatas)
    }
};



  // Download

  const downloadSpecSheet = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}download/download-spec-sheet`,
        {
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Book.xlsx");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading spec sheet:", error);
    }
  };

  const downloadDetailSpecSheet = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}download/rfq-detail-sheet`,
        {
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "specification.xlsx");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error(error.message);
    }
  };

  const toggle = ()=>{
    setAgreement(prev=>!prev);
  }

  return (
    <>
        {downloadConditionPopup && <div
          className="fixed z-42 top-0 left-0 w-full h-full bg-[#00000024] backdrop-blur-xs"
          onClick={() => setDownloadConditionPopup(false)}>

        </div>}

        {downloadConditionPopup &&<div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-2xl w-[790px]">
        <div className="mb-5">
           <h2 className="text-xl font-bold">Excel File data fill condition</h2>
           <span className="absolute top-3 right-3 cursor-pointer" onClick={()=>setDownloadConditionPopup(false)} ><FaXmark className="text-2xl"/></span>
        </div>
           <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-3"><FaStarOfLife className="text-[12px] text-orange-500"/> Make sure filled field as per Specified Parameters.</li>
            <li className="flex items-center gap-3"><FaStarOfLife className="text-[12px] text-orange-500"/> Please make sure do not escape any empty assigned row & column, if you don't have data fill. <span className="font-semibold">"N/A"</span> </li>
           </ul>
           <div className="flex gap-3 py-3">

           <input type="checkbox" id="condition" name="condition" checked={agreement} onChange={toggle}  />
           <label htmlFor="condition">Are you agree with conditions</label>
           </div>
           <div>

           <button disabled={!agreement} className="bg-orange-500 disabled:bg-orange-300 px-5 py-2 rounded-lg text-white flex items-center gap-2 cursor-pointer" onClick={downloadSpecSheet}>Download <FaDownload /></button>
           </div>
        </div>}

      <ToastContainer />
      <div className="bg-white w-full border-2 border-orange-500 rounded-4xl">
        <div className="p-3 px-4 flex flex-col gap-3 border-b-1 pb-6 border-[#E4E6EF]">
          <h2 className="text-lg font-semibold">
            You can create an RFQ by uploading a file or manually filling out
            the form for each product.
          </h2>

          <ul className="flex gap-4 justify-start items-center ">
            <li
              className={`${
                active === 1
                  ? " border-solid border-b-orange-500 border-b-4"
                  : "border-dashed"
              } transition-all capitalize py-3 px-4 rounded-lg border-1 font-semibold border-[#E4E6EF] cursor-pointer`}
              onClick={() => setActive(1)}
            >
              Upload Request file
            </li>
            <li
              className={`${
                active === 2
                  ? " border-solid border-b-orange-500 border-b-4"
                  : "border-dashed"
              } transition-all capitalize py-3 px-4 rounded-lg border-1 font-semibold border-[#E4E6EF] cursor-pointer`}
              onClick={() => setActive(2)}
            >
              {" "}
              Fill the Form{" "}
            </li>
          </ul>
        </div>
        <div className="p-4 px-4">
          {active === 1 && (
            <form className="p-6 flex flex-col gap-5 bg-sky-50 rounded-xl">
              <div className="w-full flex items-center gap-5">
                <div className="w-1/2 flex flex-col gap-2">
                  <span> Download the sheet, fill the required data </span>
                  <button
                    className="bg-green-500 p-1 px-4 flex gap-2 items-center justify-center rounded-lg cursor-pointer w-fit text-white"
                    onClick={downloadDetailSpecSheet}
                  >
                    Download <FaDownload />
                  </button>
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                  <label htmlFor="upload-specification">
                    Upload the complete file
                  </label>
                  <input
                    type="file"
                    accept=".xlsx, .xls"
                    className="w-full p-3 bg-white border-1 border-[#E4E6EF] outline-none rounded-lg"
                  />
                </div>
              </div>
              <div className="flex justify-end ">
                <button
                  type="submit"
                  className="rounded-lg bg-orange-500 px-6 py-3 text-white w-fit cursor-pointer"
                >
                  {" "}
                  Submit{" "}
                </button>
              </div>
            </form>
          )}

          {active === 2 && (
            <form
              className="p-6 flex flex-col gap-5 bg-sky-50 rounded-xl"
              onSubmit={handleSubmit}
            >
              <div className="w-full flex items-center gap-5">
                <div className="w-1/2 flex flex-col gap-2">
                  <label htmlFor="category">Select Category</label>
                  <select
                    className="w-full p-3  border-1 bg-white border-[#E4E6EF] outline-none rounded-lg"
                    name="category"
                    id="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="" hidden>
                      Choose Category
                    </option>
                    {categoryData.map((item, index) => (
                      <option value={item._id} key={index}>
                        {item.category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                  <label htmlFor="brand">Select Brand</label>
                  <select
                    className="w-full p-3 border-1 bg-white border-[#E4E6EF] outline-none rounded-lg"
                    name="brand"
                    id="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    required
                  >
                    <option value="" hidden>
                      Choose Brand
                    </option>
                    {brandData.map((item, index) => (
                      <option value={item._id} key={index}>
                        {item.company_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-full flex items-center gap-5">
                
                <div className="w-1/2 flex flex-col gap-2">
                  <label htmlFor="quantity">Quantity</label>
                  <input
                    type="text"
                    className="w-full p-3 bg-white border-1 border-[#E4E6EF] outline-none rounded-lg"
                    name="quantity"
                    id="quantity"
                    placeholder="Quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                  <label htmlFor="deliveryDate">Delivery Date</label>
                  <input
                    type="date"
                    className="w-full p-3 bg-white border-1 border-[#E4E6EF] outline-none rounded-lg"
                    name="deliveryDate"
                    id="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="w-full flex items-center gap-5">
                
                <div className="w-1/2 flex flex-col gap-2">
                  <label htmlFor="DeliveryLocation">Delivery Location</label>
                  <input
                    type="text"
                    className="w-full p-3 bg-white border-1 border-[#E4E6EF] outline-none rounded-lg"
                    name="DeliveryLocation"
                    id="DeliveryLocation"
                    placeholder="Delivery location"
                    value={formData.DeliveryLocation}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                 <label htmlFor="pinCode">Pin Code</label>
                 <input type="number" className="w-full p-3 bg-white border-1 border-[#E4E6EF] outline-none rounded-lg" name="pinCode" id="pinCode" placeholder="Enter your pin code" value={formData.pinCode} onChange={handleChange} min='100000' max='999999' step='1' required/>
                </div>
              </div>
              <div className="w-full flex flex-col  gap-2">
                <label htmlFor="comments">Additional Comments</label>
                <textarea
                  name="comments"
                  id="comments"
                  className="w-full bg-white p-3 border-1 border-[#E4E6EF] outline-none rounded-lg"
                  rows={5}
                  placeholder="Add your additional comments"
                  onChange={handleChange}
                  value={formData.comments}
                  required
                >
                  {" "}
                </textarea>
              </div>
              <div className="w-full flex items-center gap-5">
                <div className="w-1/2 flex flex-col gap-2">
                  <span>Download Specification sheet</span>
                  <button type="button"
                    className="bg-green-500 p-1 px-4 flex gap-2 items-center justify-center rounded-lg cursor-pointer w-fit text-white"
                    onClick={()=>setDownloadConditionPopup(true)}
                  >
                    Download <FaDownload />
                  </button>
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                  <label htmlFor="upload-specification">
                    Upload Required Specifications
                  </label>
                  <input
                    type="file"
                    accept=".xlsx, .xls"
                    className="w-full p-3 bg-white border-1 border-[#E4E6EF] outline-none rounded-lg"
                    onChange={handleFileChange}
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end ">
                <button
                  type="submit"
                  className="rounded-lg bg-orange-500 px-6 py-3 text-white w-fit cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default GenerateRFQFrom;
