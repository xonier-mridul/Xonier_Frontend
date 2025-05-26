
import React, {useState} from "react";
import { FaUserEdit, FaEye, FaEyeSlash,  } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const AddBuyerFrom = ({formData, handleSubmit, handleChange, isLoading}) => {
    const [showPassword, setShowPassword] = useState(false)
    
    
  return (
    <>
      <div className="bg-white rounded-4xl flex flex-col gap-6 border-emerald-500 border-2 ">
        <div className="px-8 py-5 flex justify-between items-center border-b-1 border-stone-200">
          <h2 className="text-xl font-semibold">
            Add new Buyer
          </h2>
          
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
                            <option value="" hidden>Select buyer category</option>
                            <option value="construction company">Construction Company</option>
                            <option value="sme">SMEs</option>
                            <option value="property developers">Property Developers</option>
                            <option value="architects"> Architects</option>
                            <option value="engineers">Engineers</option>
                            <option value="contractor">General Contractor</option>
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
                <div className="flex justify-end">
                    <button type="submit" className="bg-teal-600 text-white px-6 py-2 rounded-lg tracking-wide hover:bg-teal-700 hover:scale-105 transition-all duration-300 cursor-pointer flex gap-2 items-center" >{ isLoading ? "Submitting..." : "Submit"} <FaArrowRight /></button>
                </div>
            </form>
        </div>
      </div>
    </>
  );
};

export default AddBuyerFrom;
