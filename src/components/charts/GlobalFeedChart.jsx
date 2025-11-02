import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import globalFeedData from "../../data/globalFeed";

function GlobalFeedChart({ expanded = false }) {
  return (
    <ResponsiveContainer width="100%" height={expanded ? 400 : 200}>
      <AreaChart data={globalFeedData}>
        <defs>
          <linearGradient id="colorDetections" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
          </linearGradient>
        </defs>
        <XAxis 
          dataKey="region" 
          stroke="#9ca3af"
          tick={{ fill: '#d1d5db', fontSize: expanded ? 11 : 10 }}
        />
        <YAxis 
          stroke="#9ca3af"
          tick={{ fill: '#d1d5db', fontSize: 12 }}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'rgba(15, 23, 42, 0.95)', 
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '8px',
            backdropFilter: 'blur(10px)'
          }}
          labelStyle={{ color: '#f3f4f6' }}
        />
        <Area 
          type="monotone" 
          dataKey="detections" 
          stroke="#3B82F6" 
          strokeWidth={3}
          fill="url(#colorDetections)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default GlobalFeedChart;