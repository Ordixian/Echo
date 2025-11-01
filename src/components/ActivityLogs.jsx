import React from "react";
import logs from "../data/logs";

const severityColors = {
  phishing: "bg-danger/20 text-danger border-danger/30",
  blocked: "bg-warning/20 text-warning border-warning/30",
  malware: "bg-danger/20 text-danger border-danger/30",
  anomaly: "bg-warning/20 text-warning border-warning/30",
  sync: "bg-success/20 text-success border-success/30"
};

function getSeverity(event) {
  if (event.includes("phishing") || event.includes("Malware")) return "phishing";
  if (event.includes("Blocked") || event.includes("suspicious")) return "blocked";
  if (event.includes("Anomaly")) return "anomaly";
  if (event.includes("sync")) return "sync";
  return "sync";
}

function ActivityLogs() {
  return (
    <div className="glass p-6 rounded-xl shadow-xl card-hover border border-accent/20 col-span-full md:col-span-2 lg:col-span-3 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
          Recent Activity Logs
        </h2>
        <span className="text-xs px-3 py-1 bg-accent/20 text-accentGlow rounded-full font-semibold border border-accent/30">
          Real-time
        </span>
      </div>
      
      <div className="space-y-3 max-h-64 overflow-y-auto">
        {logs.map((log, i) => {
          const severity = getSeverity(log.event);
          return (
            <div
              key={i}
              className="glass p-4 rounded-lg border border-accent/10 hover:border-accent/30 transition-all duration-200 group cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs px-2 py-1 rounded-full font-semibold border ${severityColors[severity]}`}>
                      {severity.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-400">{log.time}</span>
                  </div>
                  <p className="text-sm text-gray-200 group-hover:text-white transition-colors">
                    {log.event}
                  </p>
                </div>
                <div className="w-2 h-2 bg-accent/50 rounded-full group-hover:bg-accent group-hover:scale-150 transition-all"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ActivityLogs;
