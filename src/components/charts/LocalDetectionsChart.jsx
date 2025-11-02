import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import localDetectionsData from "../../data/localDetections";

const COLORS = ["#ef4444", "#f59e0b", "#3b82f6", "#06b6d4", "#10b981"];

function LocalDetectionsChart({ expanded = false }) {
  return (
    <ResponsiveContainer width="100%" height={expanded ? 400 : 200}>
      <BarChart data={localDetectionsData}>
        <XAxis 
          dataKey="type" 
          stroke="#9ca3af" 
          tick={{ fill: '#d1d5db', fontSize: expanded ? 12 : 11 }}
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
        <Bar dataKey="count" radius={[8, 8, 0, 0]}>
          {localDetectionsData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default LocalDetectionsChart;