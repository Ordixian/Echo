import React from "react";
import { Download, X } from "lucide-react";
import LocalDetectionsChart from "./charts/LocalDetectionsChart";
import GlobalFeedChart from "./charts/GlobalFeedChart";
import NodeHealthChart from "./charts/NodeHealthChart";
import ThreatScoreDisplay from "./charts/ThreatScoreDisplay";
import ActivityLogsDisplay from "./charts/ActivityLogsDisplay";
import localDetectionsData from "../data/localDetections";
import globalFeedData from "../data/globalFeed";
import nodeHealthData from "../data/nodeHealth";
import activityLogs from "../data/logs";

function ExpandedView({ panel, onClose }) {
  const titles = {
    detections: 'Local Detections',
    global: 'Global Threat Feed',
    health: 'Node Health',
    threat: 'AI Threat Score',
    logs: 'Activity Logs'
  };

  const downloadData = (type) => {
    let data, csvContent;
    
    switch(type) {
      case 'logs':
        data = activityLogs;
        csvContent = 'Time,Event,Severity\n' + data.map(l => `${l.time},"${l.event}",${l.severity}`).join('\n');
        break;
      case 'detections':
        data = localDetectionsData;
        csvContent = 'Type,Count\n' + data.map(d => `${d.type},${d.count}`).join('\n');
        break;
      case 'global':
        data = globalFeedData;
        csvContent = 'Region,Detections\n' + data.map(d => `${d.region},${d.detections}`).join('\n');
        break;
      case 'health':
        data = nodeHealthData;
        csvContent = 'Status,Value\n' + data.map(d => `${d.status},${d.value}`).join('\n');
        break;
      default:
        csvContent = '';
    }
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `echolock-${type}-${Date.now()}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-6 animate-fade-in">
      <div className="w-full max-w-6xl max-h-[90vh] overflow-y-auto backdrop-blur-xl bg-white/10 border border-blue-500/30 rounded-2xl p-8 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white font-orbitron">{titles[panel]}</h2>
          <div className="flex gap-2">
            <button
              onClick={() => downloadData(panel)}
              className="px-4 py-2 backdrop-blur-lg bg-green-500/20 border border-green-500/30 rounded-lg hover:bg-green-500/30 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 backdrop-blur-lg bg-red-500/20 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition-all flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              Close
            </button>
          </div>
        </div>
        
        <div className="backdrop-blur-lg bg-white/5 border border-blue-500/20 rounded-xl p-6">
          {panel === 'detections' && <LocalDetectionsChart expanded={true} />}
          {panel === 'global' && <GlobalFeedChart expanded={true} />}
          {panel === 'health' && <NodeHealthChart expanded={true} />}
          {panel === 'threat' && <ThreatScoreDisplay expanded={true} />}
          {panel === 'logs' && <ActivityLogsDisplay preview={false} />}
        </div>
      </div>
    </div>
  );
}

export default ExpandedView;
