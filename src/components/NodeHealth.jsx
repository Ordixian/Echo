import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import data from "../data/nodeHealth";

const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"];

function NodeHealth() {
  return (
    <div className="bg-[#1e293b] p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-3 text-accent">Node Health</h2>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="status" outerRadius={70}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="text-sm mt-2 text-gray-300 text-center">
        System uptime stable — no critical issues
      </div>
    </div>
  );
}

export default NodeHealth;
