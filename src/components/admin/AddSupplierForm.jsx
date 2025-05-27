
import React, {useState} from "react";
import { FaUserEdit, FaEye, FaEyeSlash,  } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaPlus, FaMinus } from "react-icons/fa6";

const AddSupplierForm = ({formData, handleSubmit, handleChange, isLoading, navigate, branchDetail, handleBranchChange, addBranchField, removeBranchField}) => {
    const [showPassword, setShowPassword] = useState(false)
    
    
  return (
    <>
      <div className="bg-white rounded-4xl flex flex-col gap-6 border-emerald-500 border-2 ">
        <div className="px-8 py-5 flex justify-between items-center border-b-1 border-stone-200">
          <h2 className="text-2xl font-semibold">
            <span className="text-red-500">*</span>Add new Supplier
          </h2>
          <div className="flex justify-end">

          <button className=" text-white bg-teal-600 hover:bg-teal-700 cursor-pointer px-6 py-2 rounded-lg transition-all duration-300" onClick={()=>navigate(-1)}>
            Back
          </button>
          </div>
          
        </div>
        <div className='px-8 py-5 flex gap-6 flex-col'>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-lg">Full Name</label>
                        <input type="text" name="name" className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg" value={formData.name} onChange={handleChange} placeholder="Name"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="company" className="text-lg">Company Name</label>
                        <input type="text" name="company" className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg" value={formData.company} onChange={handleChange} placeholder="Company Name"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-lg">Email</label>
                        <input type="email" name="email" className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg" value={formData.email} onChange={handleChange} placeholder="Email"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="number" className="text-lg">Number</label>
                        <input type="number" name="number" className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg" value={formData.number} onChange={handleChange} placeholder="Number"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="category" className="text-lg">Category</label>
                        <select name="category" id="category" className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg" onChange={handleChange}>
                            <option value="" hidden>Select Supplier category</option>
                            <option value="material supplier"> Material Supplier</option>
              <option value="service provider"> Service Provider</option>
              <option value="transporter"> Transporter </option>
              <option value="machine rentals"> Machine Rentals</option>
              <option value="waste management">Waste Management</option>
              <option value="interior">Interior</option>
                        </select>
                        
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="tradeNumber" className="text-lg">Trade Number</label>
                        <input type="text" name="tradeNumber" className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg" value={formData.tradeNumber} onChange={handleChange} placeholder="Trade Number"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="website" className="text-lg">Website URL</label>
                        <input type="url" name="website" className="w-full border-1 border-zinc-200 outline-none p-3 rounded-lg" value={formData.website} onChange={handleChange} placeholder="Trade Number"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-lg">Password</label>
                        {showPassword ? <div className="flex items-center w-full border-1 border-zinc-200  p-3 rounded-lg"> <input type="text" name="password" className="w-full outline-none" value={formData.password} onChange={handleChange} placeholder="Password"/> <span className="cursor-pointer hover:text-green-500 transition-all duration-300 hover:scale-110" onClick={()=>setShowPassword(false)}>< FaEyeSlash/></span>  </div> : <div className="flex items-center w-full border-1 border-zinc-200 outline-none p-3 rounded-lg"> <input type="password" name="password" className="w-full outline-none" value={formData.password} onChange={handleChange} placeholder="Password"/> <span className="cursor-pointer hover:text-green-500 transition-all duration-300 hover:scale-110" onClick={()=>setShowPassword(true)}>< FaEye/></span> </div> }
                    </div>
                </div>
                <div className="w-full flex flex-col gap-5 py-5">
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
            </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-teal-600 text-white px-6 py-2 rounded-lg tracking-wide hover:bg-teal-700 hover:scale-105 transition-all duration-300 cursor-pointer flex gap-2 items-center" >{ isLoading ? "Submitting..." : "Submit"} <FaArrowRight /></button>
                </div>
            </form>
        </div>
        
      </div>
    </>
  );
};

export default AddSupplierForm;
