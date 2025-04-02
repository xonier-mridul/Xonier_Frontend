import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateRFQForm = () => {
  const [RFQData, setRFQData] = useState({});
  const [formData, setFormData] = useState({
    DeliveryLocation: "",
    pinCode: "",
    additionalComment: "",
    orderQuantity: [],
   
  });

  // Navigate
  const navigate = useNavigate();

  // Params
  const { id } = useParams();

  const getRFQWithId = async () => {
    try {
      if (!id) return;
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}new-rfq/single/${id}`
      );
      if (response.status === 200) {
        const data = response.data;
        setRFQData(data);
        setFormData({
          DeliveryLocation: data.DeliveryLocation || "",
          pinCode: data.pinCode || "",
          additionalComment: "",
          process: "updated by admin",
          orderQuantity: data.orderQuantity
            ? data.orderQuantity.map((item) => ({
                quantity: item.quantity || "",
                deliveryDate: item.deliveryDate || "",
              }))
            : [],
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_SERVER_URL}new-rfq/update/${id}`,
        formData
      );
      if (response.status === 200) {
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
      toast.error("RFQ not updated", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
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
    const updatedOrderQuantity = [...formData.orderQuantity];
    updatedOrderQuantity[index][type] = value;
    setFormData((prev) => ({ ...prev, orderQuantity: updatedOrderQuantity }));
  };

  return (
    <>
      <ToastContainer />
      <div className="flex items-center gap-5">
        <div className="w-1/2 border-orange-500 border-2 bg-white p-4 rounded-full">
          <h2>
            <span className="font-bold">RFQ ID:</span> {RFQData?._id}
          </h2>
        </div>
        <div className="w-1/2 border-orange-500 border-2 bg-white p-4 rounded-full">
          <h2>
            <span className="font-bold">Buyer Name:</span>{" "}
            {RFQData?.buyerName || "N/A"}
          </h2>
        </div>
      </div>
      <div className="bg-white rounded-4xl border-orange-500 border-2 p-8">
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
          <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-5">
            <div className="w-full flex items-center gap-5">
              <div className="w-1/2 flex flex-col gap-2">
                <label htmlFor="DeliveryLocation">Delivery Location</label>
                <input
                  type="text"
                  name="DeliveryLocation"
                  className="w-full p-3 border-1 bg-white border-[#E4E6EF] outline-none rounded-lg"
                  value={formData.DeliveryLocation}
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2 flex flex-col gap-2">
                <label htmlFor="pinCode">Pin Code</label>
                <input
                  type="number"
                  name="pinCode"
                  className="w-full p-3 border-1 bg-white border-[#E4E6EF] outline-none rounded-lg"
                  value={formData.pinCode}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="additionalComment">Additional Comment</label>
              <textarea
                name="additionalComment"
                rows={5}
                className="w-full p-3 border-1 bg-white border-[#E4E6EF] outline-none rounded-lg"
                value={formData.additionalComment}
                onChange={handleChange}
              />
            </div>
            {formData.orderQuantity.map((item, index) => (
              <div key={index} className="w-full flex items-center gap-5">
                <div className="w-1/2 flex flex-col gap-2">
                  <label htmlFor={`quantity-${index}`}>Quantity</label>
                  <input
                    type="number"
                    className="w-full p-3 border-1 bg-white border-[#E4E6EF] outline-none rounded-lg"
                    value={item.quantity}
                    onChange={(e) =>
                      handleOrderQuantityChange(
                        index,
                        e.target.value,
                        "quantity"
                      )
                    }
                  />
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                  <label htmlFor={`deliveryDate-${index}`}>Delivery Date</label>
                  <input
                    type="date"
                    className="w-full p-3 border-1 bg-white border-[#E4E6EF] outline-none rounded-lg"
                    value={
                      item.deliveryDate ? item.deliveryDate.split("T")[0] : ""
                    }
                    onChange={(e) =>
                      handleOrderQuantityChange(
                        index,
                        e.target.value,
                        "deliveryDate"
                      )
                    }
                  />
                </div>
              </div>
            ))}
            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-lg bg-orange-500 px-6 py-3 text-white w-fit cursor-pointer"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateRFQForm;
