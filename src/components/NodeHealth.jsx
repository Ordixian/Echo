import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import data from "../data/nodeHealth";

const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444"];

function NodeHealth() {
  return (
    <div className="glass p-6 rounded-xl shadow-xl card-hover border border-accent/20 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
          Node Health
        </h2>
        <span className="text-xs px-3 py-1 bg-success/20 text-success rounded-full font-semibold border border-success/30">
          Optimal
        </span>
      </div>
      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie 
            data={data} 
            dataKey="value" 
            nameKey="status" 
            cx="50%" 
            cy="50%" 
            outerRadius={70}
            innerRadius={40}
            paddingAngle={2}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]}
                style={{ filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.5))' }}
              />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(30, 41, 59, 0.95)', 
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '8px',
              backdropFilter: 'blur(10px)'
            }}
            labelStyle={{ color: '#f3f4f6' }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-3 space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: COLORS[index] }}
              ></div>
              <span className="text-gray-300">{item.status}</span>
            </div>
            <span className="font-semibold text-white">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NodeHealth;
