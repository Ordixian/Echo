import React from "react";

function DashboardCard({ title, icon, children, onExpand }) {
  return (
    <div 
      className="min-w-[350px] md:min-w-[450px] snap-center cursor-pointer group"
      onClick={onExpand}
    >
      <div className="h-full p-6 backdrop-blur-xl bg-white/5 border border-blue-500/20 rounded-2xl hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/20 transition-all hover:-translate-y-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2 text-white font-orbitron">
            <span className="text-cyan-400">{icon}</span>
            {title}
          </h2>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        </div>
        {children}
      </div>
    </div>
  );
}

export default DashboardCard;