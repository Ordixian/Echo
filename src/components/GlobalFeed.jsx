import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import data from "../data/globalFeed";

function GlobalFeed() {
  return (
    <div className="bg-[#1e293b] p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-3 text-accent">Global Threat Feed</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="region" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip />
          <Line type="monotone" dataKey="detections" stroke="#3B82F6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GlobalFeed;
