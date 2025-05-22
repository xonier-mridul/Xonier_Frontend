import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import moment from "moment"; 

const SalesChart = ({ orderData }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (orderData && orderData.length > 0) {
      const monthlySales = {};

      orderData.forEach((order) => {
        const spreadData = order.vrfqId?.brfqId?.rfqId?.spreadQuantityData || [];
        spreadData.forEach((entry) => {
          const month = moment(entry.fromDate).format("MMM"); 
          
          const quantity = entry.quantity || 0;

          if (monthlySales[month]) {
            monthlySales[month] += quantity;
          } else {
            monthlySales[month] = quantity;
          }
        });
      });

      const formattedData = Object.keys(monthlySales).map((month) => ({
        month,
        sales: monthlySales[month],
      }));

     
      const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      formattedData.sort((a, b) => monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month));

      setChartData(formattedData);
    }
  }, [orderData]);

  return (
    <div className="p-6 bg-white rounded-4xl border-emerald-500 border-2">
      <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData}>
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
  );
};

export default SalesChart;
