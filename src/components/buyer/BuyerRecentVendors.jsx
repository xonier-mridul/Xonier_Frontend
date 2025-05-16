import React, {useState} from 'react'
import logo from "../../assets/Havells_Logo.png"

const data = [
    {
        _id:1,
        supplier: "Polycap",
        product: "Wire",
        deliveries: 6198,

    },
    {
        _id:2,
        supplier: "KEI",
        product: "Wire",
        deliveries: 6172
    },
    {
        _id:3,
        supplier: "Havells",
        product: "Wire",
        deliveries: 2172
    },
    {
        _id:4,
        supplier: "Tata",
        product: "Wire",
        deliveries: 2023
    },
    {
        _id:5,
        supplier: "Tata",
        product: "Wire",
        deliveries: 2023
    },
    {
        _id:6,
        supplier: "Tata",
        product: "Wire",
        deliveries: 2023
    },
    {
        _id:7,
        supplier: "Tata",
        product: "Wire",
        deliveries: 2023
    },
]


const BuyerRecentVendors = () => {
 const [sellerData, setSellerData] = useState(data)
   
  return (
    <>
       <div className='bg-white p-5 rounded-4xl border-emerald-500 border-2 '>
                <h3 className='capitalize font-bold text-[22px]'> Most Popular Sellers</h3>
                <p className='para text-xl capitalize pb-5'> total 100000+ deliveries</p>
                <table className='w-full border-[1px] border-[#f1f1f1]'>
                  <thead>
                    <tr className='border-b-[1px] border-[#f1f1f1] bg-slate-100'>
                      <th className='p-4 text-start'>Supplier Name</th>
                      <th className='p-4 border-l-1 border-[#f1f1f1] text-start'>Deliveries</th>
                    </tr>
                  </thead>
                  <tbody>
                      {sellerData.map((e=>(
                          <tr className='border-b-1 border-[#f1f1f1]' key={e._id}>
                            <td className='p-4 py-2'>
                              <div className='flex items-center gap-5'>
                                 <img className='h-11 w-11 object-contain' src={logo} alt="logo" />
                                 <div className='flex flex-col gap-1'>
                                    <h3 className='text-xl font-bold'>{e.supplier}</h3>
                                    <p className="para">{e.product}</p>
                                 </div>
                              </div>
                            </td>
                            <td className='border-l-1 border-[#f1f1f1] p-4'>
                              <h3 className='text-xl font-bold'>{e.deliveries}</h3>
                              <p className="para">Deliveries</p>
                            </td>
                          </tr>
                      )))}
                      
                  </tbody>
                </table>
            </div>
    </>
  )
}

export default BuyerRecentVendors
