import React, { useState, useRef } from 'react';
import { Shield, ChevronUp, ChevronDown, Activity } from 'lucide-react';
import Header from '../components/Header';
import DashboardCard from '../components/DashboardCard';
import ExpandedView from '../components/ExpandedView';
import AnimatedBackground from '../components/AnimatedBackground';
import LocalDetectionsChart from '../components/charts/LocalDetectionsChart';
import GlobalFeedChart from '../components/charts/GlobalFeedChart';
import NodeHealthChart from '../components/charts/NodeHealthChart';
import ThreatScoreDisplay from '../components/charts/ThreatScoreDisplay';
import ActivityLogsDisplay from '../components/charts/ActivityLogsDisplay';

function Dashboard() {
  const [expandedPanel, setExpandedPanel] = useState(null);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const scrollRef = useRef(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0F1C] via-[#020617] to-[#0A0F1C] text-white overflow-hidden relative">
      <AnimatedBackground />
      
      <Header />

      <main className="relative z-10 p-6">
        {!expandedPanel ? (
          <>
            {/* Horizontal Scroll Container */}
            <div 
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
            >
              <DashboardCard
                title="Local Detections"
                icon={<Shield className="w-5 h-5" />}
                onExpand={() => setExpandedPanel('detections')}
              >
                <LocalDetectionsChart />
              </DashboardCard>

              <DashboardCard
                title="Global Threat Feed"
                icon={<Shield className="w-5 h-5" />}
                onExpand={() => setExpandedPanel('global')}
              >
                <GlobalFeedChart />
              </DashboardCard>

              <DashboardCard
                title="Node Health"
                icon={<Shield className="w-5 h-5" />}
                onExpand={() => setExpandedPanel('health')}
              >
                <NodeHealthChart />
              </DashboardCard>

              <DashboardCard
                title="AI Threat Score"
                icon={<Activity className="w-5 h-5" />}
                onExpand={() => setExpandedPanel('threat')}
              >
                <ThreatScoreDisplay />
              </DashboardCard>

              <DashboardCard
                title="Activity Logs"
                icon={<Shield className="w-5 h-5" />}
                onExpand={() => setExpandedPanel('logs')}
              >
                <ActivityLogsDisplay preview={true} />
              </DashboardCard>
            </div>

            {/* Analytics Toggle */}
            <button
              onClick={() => setShowAnalytics(!showAnalytics)}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 backdrop-blur-xl bg-blue-500/20 border border-blue-500/30 rounded-full text-sm font-semibold hover:bg-blue-500/30 transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2 z-50"
            >
              {showAnalytics ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
              {showAnalytics ? 'Hide' : 'Show'} Analytics
            </button>

            {/* Analytics Sheet */}
            {showAnalytics && (
              <div className="mt-6 p-6 backdrop-blur-xl bg-white/5 border border-blue-500/20 rounded-2xl animate-slide-up">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-cyan-400" />
                  Detailed Analytics
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 backdrop-blur-lg bg-white/5 border border-blue-500/20 rounded-xl">
                    <h3 className="text-sm font-semibold mb-2 text-gray-300">Detection Trends</h3>
                    <p className="text-xs text-gray-400">Last 30 days: 427 threats detected</p>
                  </div>
                  <div className="p-4 backdrop-blur-lg bg-white/5 border border-blue-500/20 rounded-xl">
                    <h3 className="text-sm font-semibold mb-2 text-gray-300">Response Time</h3>
                    <p className="text-xs text-gray-400">Avg: 2.3 seconds</p>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <ExpandedView
            panel={expandedPanel}
            onClose={() => setExpandedPanel(null)}
          />
        )}
      </main>
    </div>
  );
}

export default Dashboard;