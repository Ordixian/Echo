import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import data from "../data/globalFeed";

function GlobalFeed() {
  return (
    <div className="glass p-6 rounded-xl shadow-xl card-hover border border-accent/20 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <span className="w-2 h-2 bg-cyber rounded-full animate-pulse"></span>
          Global Threat Feed
        </h2>
        <span className="text-xs px-3 py-1 bg-cyber/20 text-cyber rounded-full font-semibold border border-cyber/30">
          Live
        </span>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorDetections" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="region" 
            stroke="#9ca3af"
            tick={{ fill: '#d1d5db', fontSize: 11 }}
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
          <Area 
            type="monotone" 
            dataKey="detections" 
            stroke="#3B82F6" 
            strokeWidth={3}
            fill="url(#colorDetections)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GlobalFeed;
