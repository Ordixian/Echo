import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import nodeHealthData from "../../data/nodeHealth";

const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444"];

function NodeHealthChart({ expanded = false }) {
  return (
    <div className="flex flex-col items-center">
      <ResponsiveContainer width="100%" height={expanded ? 400 : 200}>
        <PieChart>
          <Pie 
            data={nodeHealthData} 
            dataKey="value" 
            nameKey="status" 
            cx="50%" 
            cy="50%" 
            outerRadius={expanded ? 120 : 70}
            innerRadius={expanded ? 80 : 40}
            paddingAngle={2}
            label={expanded}
          >
            {nodeHealthData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]}
                style={{ filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.5))' }}
              />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(15, 23, 42, 0.95)', 
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '8px',
              backdropFilter: 'blur(10px)'
            }}
            labelStyle={{ color: '#f3f4f6' }}
          />
        </PieChart>
      </ResponsiveContainer>
      
      {expanded && (
        <div className="grid grid-cols-2 gap-4 mt-6 w-full">
          {nodeHealthData.map((item, i) => (
            <div key={i} className="flex items-center justify-between p-3 backdrop-blur-lg bg-white/5 border border-blue-500/20 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                <span className="text-sm text-gray-300">{item.status}</span>
              </div>
              <span className="font-bold text-white">{item.value}%</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NodeHealthChart;