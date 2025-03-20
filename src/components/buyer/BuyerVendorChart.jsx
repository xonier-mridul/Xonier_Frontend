import React from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  const data = [
    { month: "Jan", sales: 400 },
    { month: "Feb", sales: 600 },
    { month: "Mar", sales: 800 },
    { month: "Apr", sales: 1200 },
    { month: "May", sales: 1500 },
    { month: "Jun", sales: 1700 },
    { month: "Jul", sales: 1200 },
    { month: "Aug", sales: 900 },
  ];

const BuyerVendorChart = () => {
  return (
    <>
       <div className="p-6 bg-white rounded-4xl border-orange-500 border-2 ">
            <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="sales"
                  stroke="#4F46E5"
                  fill="#4F46E5"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
    </>
  )
}

export default BuyerVendorChart
