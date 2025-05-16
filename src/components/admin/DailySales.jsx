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

// Sample Data for Daily Sales
const data = [
  { day: "Mon", sales: 400 },
  { day: "Tue", sales: 300 },
  { day: "Wed", sales: 200 },
  { day: "Thu", sales: 278 },
  { day: "Fri", sales: 189 },
  { day: "Sat", sales: 239 },
  { day: "Sun", sales: 349 },
];

const DailySales = () => {
  return (
    <div className="p-6 bg-white rounded-4xl border-emerald-500 border-2">
      <h2 className="text-xl font-semibold mb-4">Daily Sales</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#4F46E5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailySales;
