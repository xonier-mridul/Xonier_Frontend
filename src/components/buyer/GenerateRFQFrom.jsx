import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Media Start
import { FaDownload } from "react-icons/fa";
// Media End

const GenerateRFQFrom = () => {
  const [active, setActive] = useState(1);
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [brandData, setBrandData] = useState([]);
  const [formData, setFromData] = useState({
    category: "",
    subCategory: "",
    brand: "",
    quantity: "",
    deliveryDate: "",
    DeliveryLocation: "",
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

  // Get Sub Category
  const getSubCategory = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}sub-category`
      );
      if (response.status === 200) return setSubCategoryData(response.data);
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
    getSubCategory();
    getBrands();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDatas = new FormData();
    formDatas.append("category", formData.category);
    formDatas.append("subCategory", formData.subCategory);
    formDatas.append("brand", formData.brand);
    formDatas.append("quantity", formData.quantity);
    formDatas.append("deliveryDate", formData.deliveryDate);
    formDatas.append("DeliveryLocation", formData.DeliveryLocation);
    formDatas.append("comments", formData.comments);

    // Ensure file is appended correctly
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
                subCategory: "",
                brand: "",
                quantity: "",
                deliveryDate: "",
                DeliveryLocation: "",
                comments: "",
            });
        }

    } catch (error) {
        console.error("Error:", error);
        toast.error("RFQ not generated");
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

  return (
    <>
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
                  <label htmlFor="subCategory">Select Sub Category</label>
                  <select
                    className="w-full p-3 border-1 border-[#E4E6EF] bg-white outline-none rounded-lg"
                    name="subCategory"
                    id="subCategory"
                    value={formData.subCategory}
                    onChange={handleChange}
                  >
                    <option value="" hidden>
                      Choose Sub Category
                    </option>
                    {subCategoryData.map((item, index) => (
                      <option value={item._id} key={index}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-full flex items-center gap-5">
                <div className="w-1/2 flex flex-col gap-2">
                  <label htmlFor="brand">Select Brand</label>
                  <select
                    className="w-full p-3 border-1 bg-white border-[#E4E6EF] outline-none rounded-lg"
                    name="brand"
                    id="brand"
                    value={formData.brand}
                    onChange={handleChange}
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
                  />
                </div>
              </div>
              <div className="w-full flex items-center gap-5">
                <div className="w-1/2 flex flex-col gap-2">
                  <label htmlFor="deliveryDate">Delivery Date</label>
                  <input
                    type="date"
                    className="w-full p-3 bg-white border-1 border-[#E4E6EF] outline-none rounded-lg"
                    name="deliveryDate"
                    id="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleChange}
                  />
                </div>
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
                  />
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
                >
                  {" "}
                </textarea>
              </div>
              <div className="w-full flex items-center gap-5">
                <div className="w-1/2 flex flex-col gap-2">
                  <span>Download Specification sheet</span>
                  <button
                    className="bg-green-500 p-1 px-4 flex gap-2 items-center justify-center rounded-lg cursor-pointer w-fit text-white"
                    onClick={downloadSpecSheet}
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
