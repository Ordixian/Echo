import React from "react";

function ThreatScoreDisplay({ expanded = false }) {
  const score = 72;
  const circumference = 2 * Math.PI * (expanded ? 112 : 56);
  const offset = circumference - (score / 100) * circumference;
  const size = expanded ? 64 : 32;
  const radius = expanded ? 112 : 56;

  return (
    <div className={`flex flex-col items-center justify-center ${expanded ? 'h-[400px]' : 'h-[200px]'}`}>
      <div className="relative" style={{ width: size * 4, height: size * 4 }}>
        <svg className="transform -rotate-90" style={{ width: size * 4, height: size * 4 }}>
          <circle
            cx={size * 2}
            cy={size * 2}
            r={radius}
            stroke="rgba(59, 130, 246, 0.1)"
            strokeWidth={expanded ? 20 : 10}
            fill="none"
          />
          <circle
            cx={size * 2}
            cy={size * 2}
            r={radius}
            stroke="url(#gradient)"
            strokeWidth={expanded ? 20 : 10}
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
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className={`${expanded ? 'text-7xl' : 'text-4xl'} font-bold bg-gradient-to-br from-yellow-400 to-red-500 bg-clip-text text-transparent`}>
            {score}%
          </div>
          {expanded && <p className="text-lg text-gray-400 mt-2">Moderate</p>}
        </div>
      </div>
      
      {!expanded && (
        <p className="text-sm text-gray-400 mt-2">Moderate Severity</p>
      )}
      
      {expanded && (
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">AI Triage Engine Analysis</p>
          <p className="text-xs text-gray-500 mt-2">(Backend integration pending)</p>
        </div>
      )}
    </div>
  );
}

export default ThreatScoreDisplay;