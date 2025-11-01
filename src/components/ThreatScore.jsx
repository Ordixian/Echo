import React from "react";

function ThreatScore() {
  const score = 72;
  const circumference = 2 * Math.PI * 70;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="glass p-6 rounded-xl shadow-xl card-hover border border-accent/20 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <span className="w-2 h-2 bg-warning rounded-full animate-pulse"></span>
          AI Threat Score
        </h2>
        <span className="text-xs px-3 py-1 bg-warning/20 text-warning rounded-full font-semibold border border-warning/30">
          Moderate
        </span>
      </div>
      
      <div className="flex flex-col items-center justify-center h-[200px] relative">
        {/* Circular Progress */}
        <div className="relative">
          <svg className="transform -rotate-90 w-40 h-40">
            {/* Background circle */}
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="rgba(59, 130, 246, 0.1)"
              strokeWidth="12"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="url(#gradient)"
              strokeWidth="12"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
              style={{ filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.6))' }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-5xl font-bold bg-gradient-to-br from-warning to-danger bg-clip-text text-transparent">
              {score}%
            </div>
          </div>
        </div>
        
        <p className="text-gray-300 mt-4 text-sm font-medium">
          Severity: <span className="text-warning">Moderate</span>
        </p>
        <p className="text-xs mt-2 text-gray-500 text-center px-4">
          AI Triage Engine (Backend integration pending)
        </p>
      </div>
    </div>
  );
}

export default ThreatScore;
