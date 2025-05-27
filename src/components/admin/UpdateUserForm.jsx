import React from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa6";

const UpdateUserForm = ({
  handleSubmit,
  userData,
  formData,
  handleChange,
  navigate,
  isLoading,
  errMessage,
  branchDetail,
  addBranchField,
  removeBranchField,
  handleBranchChange
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
                  className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg capitalize"
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
                  className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg capitalize"
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
              {userData.role === 'buyer' ? <div className="flex flex-col gap-2">
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
              </div> :<div className="flex flex-col gap-2">
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
                  <option value="material supplier"> Material Supplier</option>
              <option value="service provider"> Service Provider</option>
              <option value="transporter"> Transporter </option>
              <option value="machine rentals"> Machine Rentals</option>
              <option value="waste management">Waste Management</option>
              <option value="interior">Interior</option>
                </select>
              </div>}
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
            {userData.role === 'supplier' && <div className="w-full flex flex-col gap-5 py-5">
                          <h2 className="text-2xl font-semibold "><span className="text-red-500">*</span>Branch Details</h2>
                          {branchDetail.map((item, index) => (
                            <div
                              key={index}
                              className="bg-sky-200 p-4 rounded-xl grid grid-cols-2 gap-5"
                            >
                              <div className="flex flex-col gap-3">
                                <label htmlFor={`gstNumber-${index}`}>GST Number</label>
                                <input
                                  type="text"
                                  name="gstNumber"
                                  value={item.gstNumber}
                                  onChange={(e) => handleBranchChange(index, e)}
                                  className="w-full bg-white border-1 border-zinc-200 outline-none p-3 rounded-lg"
                                  placeholder="GST Number"
                                />
                              </div>
                              <div className="flex flex-col gap-3">
                                <label htmlFor={`state-${index}`}>Select State</label>
                                <select
                                  name="state"
                                  value={item.state}
                                  onChange={(e) => handleBranchChange(index, e)}
                                  className="w-full bg-white border-1 border-zinc-200 outline-none p-3 rounded-lg"
                                >
                                  <option value="" hidden>
                                    Select State
                                  </option>
            
                                  {/* Indian States */}
                                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                                  <option value="Arunachal Pradesh"> Arunachal Pradesh </option>
                                  <option value="Assam">Assam</option>
                                  <option value="Bihar">Bihar</option>
                                  <option value="Chhattisgarh">Chhattisgarh</option>
                                  <option value="Goa">Goa</option>
                                  <option value="Gujarat">Gujarat</option>
                                  <option value="Haryana">Haryana</option>
                                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                                  <option value="Jharkhand">Jharkhand</option>
                                  <option value="Karnataka">Karnataka</option>
                                  <option value="Kerala">Kerala</option>
                                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                                  <option value="Maharashtra">Maharashtra</option>
                                  <option value="Manipur">Manipur</option>
                                  <option value="Meghalaya">Meghalaya</option>
                                  <option value="Mizoram">Mizoram</option>
                                  <option value="Nagaland">Nagaland</option>
                                  <option value="Odisha">Odisha</option>
                                  <option value="Punjab">Punjab</option>
                                  <option value="Rajasthan">Rajasthan</option>
                                  <option value="Sikkim">Sikkim</option>
                                  <option value="Tamil Nadu">Tamil Nadu</option>
                                  <option value="Telangana">Telangana</option>
                                  <option value="Tripura">Tripura</option>
                                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                                  <option value="Uttarakhand">Uttarakhand</option>
                                  <option value="West Bengal">West Bengal</option>
            
                                  {/* Union Territories */}
                                  <option value="Andaman and Nicobar Islands">
                                    Andaman and Nicobar Islands
                                  </option>
                                  <option value="Chandigarh">Chandigarh</option>
                                  <option value="Dadra and Nagar Haveli and Daman and Diu">
                                    Dadra and Nagar Haveli and Daman and Diu
                                  </option>
                                  <option value="Delhi">Delhi</option>
                                  <option value="Jammu and Kashmir">
                                    Jammu and Kashmir
                                  </option>
                                  <option value="Ladakh">Ladakh</option>
                                  <option value="Lakshadweep">Lakshadweep</option>
                                  <option value="Puducherry">Puducherry</option>
                                </select>
                              </div>
                              <div className="flex flex-col gap-3 col-span-2">
                                <label htmlFor={`address-${index}`}>Full Address</label>
                                <input
                                  type="text"
                                  name="address"
                                  value={item.address}
                                  onChange={(e) => handleBranchChange(index, e)}
                                  className="w-full bg-white border-1 border-zinc-200 outline-none p-3 rounded-lg"
                                  placeholder="Enter your location"
                                />
                              </div>
                              <div className="flex justify-end items-center gap-3 col-span-2">
                                <button
                                  type="button"
                                  onClick={addBranchField}
                                  className="bg-emerald-500 h-9 w-9 flex rounded-lg items-center justify-center text-white"
                                >
                                  <FaPlus className="text-xl" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => removeBranchField(index)}
                                  className="bg-red-500 h-9 w-9 flex rounded-lg items-center justify-center text-white"
                                >
                                  <FaMinus className="text-xl" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>}
            {errMessage && <div className="flex justify-end">
                <p className="text-red-500">{errMessage}</p>
            </div>}
            <div className="flex justify-end"> 
                <button className="text-white bg-teal-600 hover:bg-teal-700 px-6 py-2 rounded-lg hover:scale-104 transition-all duration-300 cursor-pointer flex items-center gap-2" type="submit">{isLoading ? "Updating..." : "Update"}<IoMdCloudUpload className="text-xl"/></button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateUserForm;
