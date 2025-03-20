import React, {useState} from 'react'

const SupplierTable = () => {
    const data = [
        {
            _id: 1,
            company: "Havells",
            contact_purson: "Ajay Singh",
            phone: 9816280198,
            types: "Enrolled",
            email:"example@email.com",
            message:"This message is for testing purpose...  "
        },
        {
            _id: 2,
            company: "Anchor",
            contact_purson: "Megh Singh",
            phone: 9982126726,
            types: "Enrolled",
            email:"meghsingh@email.com",
            message:"This message is for testing purpose...  "
        },
    ]

    const [supplierData, setSupplierData] = useState(data);
    const [searchTerm, setSearchTerm] = useState("")
    
    const filteredData = supplierData.filter((item=>
            `${item._id} ${item.company} ${item.contact_purson} ${item.email} ${item.message} ${item.phone} ${item.types}`.toLowerCase().includes(searchTerm.toLowerCase())
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
                      <th className="p-4 text-start border-l-1 border-[#f1f1f1]">Contact Person</th>
                      <th className="p-4 text-start border-l-1 border-[#f1f1f1]">Number</th>
                      <th className="p-4 text-start border-l-1 border-[#f1f1f1]">Types</th>
                      <th className="p-4 text-start border-l-1 border-[#f1f1f1]">Email</th>
                      <th className="p-4 text-start border-l-1 border-[#f1f1f1]">Message</th>
                    </tr>
                  </thead>
                  <tbody>
                 {length > 0 ? filteredData.map((item, index) => (
                   <tr key={item._id}>
                        <td className="p-4 border-b-[1px] border-[#f1f1f1]">{item.company}</td>
                        <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">
                          {item.contact_purson}
                        </td>
                        <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">{item.phone}</td>
                        <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]"> <span className='text-orange-400 p-1 px-4 rounded-lg bg-orange-50'>{item.types}</span></td>
                        <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">{item.email}</td>
                        <td className="p-4 border-b-[1px] border-l-1 border-[#f1f1f1]">{item.message}
                        </td>
                      </tr> 
                      
                    
                    )) : <td colSpan="6" className="p-4 text-center text-gray-500"> Nothing Found </td>}
                  </tbody>
                </table>
    </div>
      
    </>
  )
}

export default SupplierTable
