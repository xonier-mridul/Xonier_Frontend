import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateRFQForm = () => {
  const [RFQData, setRFQData] = useState({});
  const [errMessage, setErrMessage] = useState(null);
  const [spreadQuantityTotal, setSpreadQuantityTotal] = useState(null)
  const [formData, setFormData] = useState({
  
    additionalComment: "",
    spreadQuantityData: [],
   
  });

  // Navigate
  const navigate = useNavigate();

  // Params
  const { id } = useParams();


  // Get RFQ with ID
  const getRFQWithId = async () => {
    try {
      if (!id) return;
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}new-rfq/single/${id}`
      );
      if (response.status === 200) {
        const data = response.data;
        setRFQData(data);
        console.log(data);
        setFormData({
          // DeliveryLocation: data.DeliveryLocation || "",
          // pinCode: data.pinCode || "",
          additionalComment: "",
          process: "updated by admin",
          spreadQuantityData: data.spreadQuantityData
            ? data.spreadQuantityData.map((item) => ({
                quantity: item.quantity || "",
                fromDate: item.fromDate|| "",
                toDate: item.toDate || "",
                location: item.location || ""
              }))
            : [],
        });
        setSpreadQuantityTotal(response?.data?.quantity)
      }
    } catch (error) {
      console.error(error);
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      

      if(RFQData.quantity !== spreadQuantityTotal){
       return setErrMessage("Your spread quantity and quantity is not matching please spread quantity correctly");
      }

      const response = await axios.patch(
        `${import.meta.env.VITE_SERVER_URL}new-rfq/update/${id}`,
        formData
      );
      if (response.status === 200) {
        setErrMessage(null)
        toast.success(` RFQ ID ${id} Updated successfully`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          style: { backgroundColor: "#009689", color: "#fff" },
        });
      }
    } catch (error) {
      console.error(error);
      setErrMessage(error?.response?.data?.message || "Something went wrong")
    }
  };

  // Function Call
  useEffect(() => {
    getRFQWithId();
    
  }, []);


  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
   
  

  const handleOrderQuantityChange = (index, value, type) => {
    const updatedOrderQuantity = [...formData.spreadQuantityData];
    updatedOrderQuantity[index][type] = value;
    setFormData((prev) => ({ ...prev, spreadQuantityData: updatedOrderQuantity }));

    const quantityTotal = Number(formData.spreadQuantityData.reduce((acc, init)=> acc + Number(init.quantity), 0));

    setSpreadQuantityTotal(quantityTotal);
  };

  return (
    <>
      <ToastContainer />
      <div className="flex items-center gap-5">
        <div className="w-1/2 border-emerald-500 border-2 bg-white p-4 rounded-full">
          <h2>
            <span className="font-bold">RFQ ID:</span> {RFQData?._id}
          </h2>
        </div>
        <div className="w-1/2 border-emerald-500 border-2 bg-white p-4 rounded-full">
          <h2 className="capitalize">
            <span className="font-bold">Buyer Name:</span>{" "}
            {RFQData?.createdBy?.name || "N/A"}
          </h2>
        </div>
      </div>
      <div className="bg-white rounded-4xl border-emerald-500 border-2 p-8">
        <div className="mb-5 flex items-center justify-between gap-6">
          <h3 className="text-xl font-bold">Update Form</h3>
          <button
            type="button"
            className="rounded-lg bg-black px-6 py-2.5 text-white w-fit cursor-pointer"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
        <div className="border-gray-100 border-1 rounded-lg">
          <div className="bg-slate-50 p-4">
            <h2 className="font-bold text-lg">
              Product -{" "}
              <span className="capitalize">{RFQData.product || "N/A"}</span>
            </h2>
          </div>
          
          <div className="flex flex-col gap-5 w-full p-5">
            <div className=" flex items-center justify-between gap-6">

            <h2 className="text-xl font-semibold"> Delivery Schedule: <span className=" capitalize text-emerald-500 ">({RFQData.deliverySchedule || "N/A"})</span> </h2>
            <h2 className="text-xl font-semibold capitalize tracking-wide"> Quantity({RFQData?.measurement || "N/A"}): <span className=" capitalize text-emerald-500 ">{RFQData?.quantity || "N/A"}</span> </h2>
            </div>

          <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          {formData.spreadQuantityData.map((item,index)=>(
            <div key={item?._id} className="p-3 rounded-lg bg-sky-200 grid grid-cols-4 gap-3">
                <div className="flex flex-col gap-2">
                <label htmlFor="quantity">Quantity <span className="">({RFQData?.measurement || "N/A"})</span> </label>
                <input type="number" name="quantity" value={item?.quantity || "N/A"} className="w-full p-3 border-1 bg-white border-[#E4E6EF] outline-none rounded-lg" onChange={(e)=>handleOrderQuantityChange(index,e.target.value,"quantity")} />
                </div>
                <div className="flex flex-col gap-2">
                <label htmlFor="fromDate">From Date</label>
                <input type="date" name="fromDate" value={item?.fromDate ? item.fromDate.split("T")[0]: ""} className="w-full p-3 border-1 bg-white border-[#E4E6EF] outline-none rounded-lg" onChange={(e)=>handleOrderQuantityChange(index,e.target.value,"fromDate")} />
                </div>
                <div className="flex flex-col gap-2">
                <label htmlFor="toDate">From Date</label>
                <input type="date" name="toDate" value={item?.toDate ? item.toDate.split("T")[0]: ""} className="w-full p-3 border-1 bg-white border-[#E4E6EF] outline-none rounded-lg" onChange={(e)=>handleOrderQuantityChange(index,e.target.value,"toDate")} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="location">Location</label>
                  <input type="text" name="location" value={item.location} className="w-full p-3 border-1 bg-white border-[#E4E6EF] outline-none rounded-lg" onChange={(e)=>handleOrderQuantityChange(index,e.target.value,"location")} />
                </div>
            </div>
          ))}
          {spreadQuantityTotal &&<div className="flex flex-end">
             <p className="text-lg">Spread Quantity Total: <span className={`${spreadQuantityTotal === RFQData?.quantity ? "text-green-500" :"text-red-500" } `}> {spreadQuantityTotal} </span></p>
          </div>}
          <div className="flex flex-col gap-2 w-full">
           <label htmlFor="additionalComment"> Additional Comment </label>
           <textarea name="additionalComment" id="additionalComment" className="w-full p-3 border-1 bg-white border-[#E4E6EF] outline-none rounded-lg" value={formData.additionalComment} onChange={handleChange} placeholder="Add your additional comment here..." rows={4}></textarea>
          </div>
          <div className="flex justify-end">
             <p className="text-red-500">{errMessage}</p>
          </div>
          <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-lg bg-emerald-500 px-6 py-3 text-white w-fit cursor-pointer"
              >
                Update
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateRFQForm;
