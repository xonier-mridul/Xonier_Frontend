import React from 'react'
import OrderHistoryTable from '../../components/admin/OrderHistoryTable'

const OrderHistory = () => {
  return (
    <>
      <div className='p-5 flex flex-col gap-5'>
        <OrderHistoryTable/>
      </div>
    </>
  )
}

export default OrderHistory
