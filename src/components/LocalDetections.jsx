import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import data from "../data/localDetections";

function LocalDetections() {
  return (
    <div className="bg-[#1e293b] p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-3 text-accent">Local Detections</h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="type" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip />
          <Bar dataKey="count" fill="#3B82F6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LocalDetections;
