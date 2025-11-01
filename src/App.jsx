import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import GlobalFeed from "./components/GlobalFeed";
import LocalDetections from "./components/LocalDetections";
import NodeHealth from "./components/NodeHealth";
import ActivityLogs from "./components/ActivityLogs";
import ThreatScore from "./components/ThreatScore";

function App() {
  return (
    <div className="flex h-screen bg-[#0f172a] text-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto">
          <LocalDetections />
          <GlobalFeed />
          <NodeHealth />
          <ThreatScore />
          <ActivityLogs />
        </div>
      </div>
    </div>
  );
}

export default App;
