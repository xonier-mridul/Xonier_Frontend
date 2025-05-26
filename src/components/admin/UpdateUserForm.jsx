import React from "react";
import { IoMdCloudUpload } from "react-icons/io";

const UpdateUserForm = ({
  handleSubmit,
  userData,
  formData,
  handleChange,
  navigate,
  isLoading,
  errMessage
}) => {
  return (
    <>
      <div className="flex items-center gap-5">
        <div className="w-1/2 border-emerald-500 border-2 bg-white p-4 rounded-full ">
          <h2 className="capitalize">
            <span className="font-bold ">User ID:</span>{" "}
            <span className="text-green-500 font-medium tracking-wide">
              {" "}
              {userData?._id || "N/A"}
            </span>
          </h2>
        </div>
        <div className="w-1/2 border-emerald-500 border-2 bg-white p-4 rounded-full">
          <h2 className="capitalize">
            <span className="font-bold ">Username:</span>{" "}
            <span className="text-green-500 font-medium tracking-wide">
              {" "}
              {userData?.name || "N/A"}({userData?.role})
            </span>
          </h2>
        </div>
      </div>
      <div className="bg-white rounded-4xl border-emerald-500 border-2 ">
        <div className="w-full flex justify-between items-center border-b-1 border-stone-200 px-8 py-6">
          <h2 className="font-bold text-2xl tracking-wide">User Edit Form</h2>
          <div>
            <button
              className="bg-teal-600 px-5 py-2 rounded-lg text-white hover:scale-104 hover:bg-teal-700 transition-all duration-300 cursor-pointer"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        </div>
        <div className="px-8 py-6">
          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="tracking-wide">
                  <span className="text-red-500 text-lg">*</span>Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="tracking-wide">
                  {" "}
                  <span className="text-red-500 text-lg">*</span>Company
                </label>
                <input
                  type="text"
                  name="company"
                  className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="tracking-wide">
                  <span className="text-red-500 text-lg">*</span>Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="number" className="tracking-wide">
                  <span className="text-red-500 text-lg">*</span>Number
                </label>
                <input
                  type="number"
                  name="number"
                  className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                  value={formData.number}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="category" className="tracking-wide">
                  <span className="text-red-500 text-lg">*</span>Category
                </label>
                <select
                  name="category"
                  id="category"
                  onChange={handleChange}
                  value={formData.category}
                  className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                >
                  <option value="" hidden>
                    {" "}
                    Select Category
                  </option>
                  <option value="construction company">
                    Construction Company
                  </option>
                  <option value="sme">SMEs</option>
                  <option value="property developers">
                    Property Developers
                  </option>
                  <option value="architects"> Architects</option>
                  <option value="engineers">Engineers</option>
                  <option value="contractor">General Contractor</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="tradeNumber" className="tracking-wide">
                  <span className="text-red-500 text-lg">*</span>Trade Number
                </label>
                <input
                  type="text"
                  name="tradeNumber"
                  className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                  value={formData.tradeNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2 col-span-2">
                <label htmlFor="website" className="tracking-wide">
                  <span className="text-red-500 text-lg">*</span>Website
                </label>
                <input
                  type="url"
                  name="website"
                  className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>
            </div>
            {errMessage && <div className="flex justify-end">
                <p className="text-red-500">{errMessage}</p>
            </div>}
            <div className="flex justify-end"> 
                <button className="text-white bg-teal-600 hover:bg-teal-700 px-6 py-2 rounded-lg hover:scale-104 transition-all duration-300 cursor-pointer flex items-center gap-2" type="submit">{isLoading ? "Updating" : "Update"}<IoMdCloudUpload className="text-xl"/></button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateUserForm;
