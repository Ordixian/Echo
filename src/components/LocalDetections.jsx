import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import data from "../data/localDetections";

const COLORS = ["#ef4444", "#f59e0b", "#3b82f6", "#06b6d4", "#10b981"];

function LocalDetections() {
  return (
    <div className="glass p-6 rounded-xl shadow-xl card-hover border border-accent/20 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
          Local Detections
        </h2>
        <span className="text-xs px-3 py-1 bg-accent/20 text-accentGlow rounded-full font-semibold border border-accent/30">
          Last 24h
        </span>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis 
            dataKey="type" 
            stroke="#9ca3af" 
            tick={{ fill: '#d1d5db', fontSize: 12 }}
          />
          <YAxis 
            stroke="#9ca3af"
            tick={{ fill: '#d1d5db', fontSize: 12 }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(30, 41, 59, 0.95)', 
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '8px',
              backdropFilter: 'blur(10px)'
            }}
            labelStyle={{ color: '#f3f4f6' }}
          />
          <Bar dataKey="count" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LocalDetections;
