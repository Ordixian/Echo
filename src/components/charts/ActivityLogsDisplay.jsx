import React from "react";
import activityLogs from "../../data/logs";

function ActivityLogsDisplay({ preview = false }) {
  const logsToShow = preview ? activityLogs.slice(0, 4) : activityLogs;

  return (
    <div className={`space-y-${preview ? '2' : '3'} ${preview ? 'h-[200px]' : ''} overflow-y-auto`}>
      {logsToShow.map((log, i) => (
        <div 
          key={i} 
          className={`${preview ? 'p-3' : 'p-4'} backdrop-blur-lg bg-white/5 border border-blue-500/20 rounded-lg hover:border-blue-500/40 transition-all`}
        >
          <div className="flex justify-between items-start gap-2 mb-2">
            <span className={`${preview ? 'text-xs' : 'text-sm'} text-gray-400`}>{log.time}</span>
            <span className={`text-xs px-${preview ? '2' : '3'} py-${preview ? '0.5' : '1'} rounded-full font-semibold ${
              log.severity === 'high' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
              log.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
              'bg-green-500/20 text-green-400 border border-green-500/30'
            }`}>
              {log.severity.toUpperCase()}
            </span>
          </div>
          <p className={`${preview ? 'text-xs' : 'text-sm'} text-gray-${preview ? '300' : '200'} ${preview ? '' : ''}`}>
            {log.event}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ActivityLogsDisplay;