import React from "react";

function ThreatScore() {
  return (
    <div className="bg-[#1e293b] p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-3 text-accent">AI Threat Score</h2>
      <div className="flex flex-col items-center justify-center h-[180px]">
        <div className="text-5xl font-bold text-accent">72%</div>
        <p className="text-gray-400 mt-2 text-sm">Severity Level: Moderate</p>
        <p className="text-xs mt-1 text-gray-500">
          (AI Triage Engine placeholder — backend integration pending)
        </p>
      </div>
    </div>
  );
}

export default ThreatScore;
