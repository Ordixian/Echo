import React from "react";
import logs from "../data/logs";

function ActivityLogs() {
  return (
    <div className="bg-[#1e293b] p-4 rounded-lg shadow-md col-span-full md:col-span-2 lg:col-span-3">
      <h2 className="text-lg font-semibold mb-3 text-accent">Recent Activity Logs</h2>
      <div className="max-h-48 overflow-y-auto text-sm space-y-2">
        {logs.map((log, i) => (
          <div
            key={i}
            className="flex justify-between border-b border-gray-700 pb-1 text-gray-300"
          >
            <span>{log.time}</span>
            <span>{log.event}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityLogs;
