import React, {useState} from 'react'

const BuyerTable = () => {
    const data = [
        {
            _id: 1,
            company: "Havells",
            form: "Private Limited",
            registerNo: 9816280198,
            email:"example@email.com",
            phone: 1234567890,
            website:"havells.co.in "
        },
        {
            _id: 2,
            company: "Anchor",
            form: "Private Limited",
            registerNo: 9982126726,
            email:"meghsingh@email.com",
            phone: 1234567890,
            website:"anchor.in "
        },
    ]

    const [supplierData, setSupplierData] = useState(data);
    const [searchTerm, setSearchTerm] = useState("")
    

   
    const filteredData = supplierData.filter((item=>
            `${item._id} ${item.company} ${item.form} ${item.registerNo} ${item.email} ${item.phone} ${item.website}`.toLowerCase().includes(searchTerm.toLowerCase())
        ))
    

    const length = filteredData.length
  return (
    <>
    <div className="bg-white border-orange-500 border-2 rounded-4xl p-8 m-5">
    <div className="mb-5">
          <input
            type="text"
            placeholder="Search..."
            className="w-60 p-2 border-1 border-[#f2f2f2] rounded-lg outline-none bg-slate-100"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <table className="w-full border-[1px] border-[#eff2f5]">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="p-4 text-start">Company</th>
                      <th className="p-4 text-start border-l-1 border-[#f1f1f1]">Legal Form</th>
                      <th className="p-4 text-start border-l-1 border-[#f1f1f1]">Register Number</th>
                      <th className="p-4 text-start border-l-1 border-[#f1f1f1]">Email</th>
                      <th className="p-4 text-start border-l-1 border-[#f1f1f1]">Number</th>
                      <th className="p-4 text-start border-l-1 border-[#f1f1f1]">Website</th>
                    </tr>
                  </thead>
                  <tbody>
                 {length > 0 ? filteredData.map((item, index) => (
                   <tr key={item._id}>
                        <td className="p-4 border-b-[1px] border-[#f1f1f1]">{item.company}</td>
                        <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">
                          {item.form}
                        </td>
                        <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">{item.registerNo}</td>
                        <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">  <span className='text-orange-400 p-1 px-4 rounded-lg bg-orange-50'>{item.email}</span></td>
                        <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">{item.phone}</td>
                        <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">{item.website}
                        </td>
                      </tr> 
                      
                    
                    )) : <td colSpan="6" className="p-4 text-center text-gray-500"> Nothing Found </td>}
                  </tbody>
                </table>
    </div>
      
    </>
  )
}

export default BuyerTable
