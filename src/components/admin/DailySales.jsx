import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



const DailySales = ({weeklyOrderData}) => {

  return (
    <div className="p-6 bg-white rounded-4xl border-emerald-500 border-2">
      <h2 className="text-xl font-semibold mb-4">Daily Sales</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={weeklyOrderData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="sales" fill="#4F46E5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailySales;
