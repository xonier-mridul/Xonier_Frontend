import React, {useState} from 'react'


const data = [
    {
      _id:1,
      order:"#34343",
      product:"MCB Changeover Switch",
      quantity:"200",
      status:'Paid'
    },
    {
      _id:2,
      order:"#34644",
      product:"Instant Water Heater	",
      quantity:"4400",
      status:'Unpaid'
    },
    {
      _id:3,
      order:"#34234",
      product:"MCB Changeover Switch	",
      quantity:"400",
      status:'Paid'
    },
    {
      _id:4,
      order:"#3234",
      product:"Instant Water Heater	",
      quantity:"1400",
      status:'Paid'
    },
    {
      _id:5,
      order:"#3734",
      product:"MCB Changeover Switch",
      quantity:"1400",
      status:'Unpaid'
    },
    {
      _id:6,
      order:"#8737",
      product:"MCB Changeover Switch",
      quantity:"456",
      status:'Unpaid'
    },
    {
      _id:7,
      order:"#8737",
      product:"MCB Changeover Switch",
      quantity:"890",
      status:'Paid'
    },
]

const BuyerOrderedProduct = () => {
     const [productData, setProductData] = useState(data)
  return (
    <>
      <div className='bg-white p-5 rounded-4xl border-orange-500 border-2'>
        <h3 className='capitalize font-bold text-[22px]' > Recent Ordered Products</h3>
        <p className='para text-xl capitalize pb-5' > updated 37 minutes ago</p>
        <table className='w-full border-[1px] border-[#f1f1f1]'>
            <thead>
                <tr>

                <th className='p-4 bg-slate-100 border-l-1 border-[#f1f1f1]'> Order</th>
                <th className='p-4 bg-slate-100 border-l-1 border-[#f1f1f1]'> Product</th>
                <th className='p-4 bg-slate-100 border-l-1 border-[#f1f1f1]'> Quantity</th>
                <th className='p-4 bg-slate-100 border-l-1 border-[#f1f1f1]'> Status</th>
                </tr>
            </thead>
            <tbody>
                {productData.map(e=>(

                <tr className='border-b-1 border-[#f1f1f1]' key={e._id}>
                    <td className='p-4 para'>{e.order}</td>
                    <td className='p-4 text-lg border-l-1 border-[#f1f1f1]'>{e.product}</td>
                    <td className='p-4 text-lg border-l-1 border-[#f1f1f1]'>{e.quantity}</td>
                    <td className=' p-4 border-l-1  border-[#f1f1f1]'> <span className={`${e.status === "Paid" ? "text-green-400 bg-green-200" : "text-red-500 bg-red-200 "} p-2 px-4 rounded-md font-semibold `}> {e.status} </span></td>
                </tr>
                ))}
                
            </tbody>

        </table>
    </div>
    </>
  )
}

export default BuyerOrderedProduct
