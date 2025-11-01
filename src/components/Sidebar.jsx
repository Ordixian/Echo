import React, { useState } from "react";
import { FiMenu, FiX, FiActivity, FiGlobe, FiShield, FiCpu, FiFileText } from "react-icons/fi";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Local Detections");

  return (
    <>
      {/* Toggle Button (mobile view) */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="p-3 bg-gradient-to-br from-accent via-cyber to-accent text-white rounded-xl shadow-2xl hover:shadow-accent/50 transition-all hover:scale-110"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:static inset-y-0 left-0 z-40 w-72 bg-gradient-to-b from-[#0a0f1e] via-[#0f1419] to-[#0a0f1e] text-gray-100 transition-all duration-300 ease-in-out flex flex-col border-r border-accent/20 shadow-2xl backdrop-blur-xl`}
      >
        {/* Logo Section - Enhanced */}
        <div className="relative p-8 border-b border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
          {/* Glow effect behind logo */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyber/10 via-accent/5 to-transparent blur-xl"></div>
          
          <div className="relative flex flex-col items-center gap-4">
            {/* Logo with animated glow */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber to-accent rounded-2xl blur-lg opacity-50 animate-pulse-slow"></div>
              <div className="relative w-16 h-16 bg-gradient-to-br from-cyber via-accent to-cyber rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300">
                {/* Lock Icon SVG */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12C20 10.897 19.103 10 18 10H17V7C17 4.243 14.757 2 12 2ZM9 7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9V7Z" fill="white"/>
                  <circle cx="12" cy="15" r="2" fill="white"/>
                  <path d="M12 17V19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  {/* Signal waves */}
                  <path d="M16 8C16 8 17 9 17 10" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
                  <path d="M18 7C18 7 19.5 8.5 19.5 10" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
                </svg>
              </div>
            </div>
            
            {/* Title with gradient */}
            <div className="text-center">
              <h2 className="text-2xl font-black tracking-wider bg-gradient-to-r from-white via-accentGlow to-cyber bg-clip-text text-transparent">
                ECHOLOCK
              </h2>
              <p className="text-xs text-gray-400 mt-1 font-medium tracking-wide">Security Operations Center</p>
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-4 py-8 space-y-3 overflow-y-auto">
          <SidebarLink 
            icon={<FiShield />} 
            label="Local Detections" 
            active={activeItem === "Local Detections"}
            onClick={() => setActiveItem("Local Detections")}
          />
          <SidebarLink 
            icon={<FiGlobe />} 
            label="Global Feed" 
            active={activeItem === "Global Feed"}
            onClick={() => setActiveItem("Global Feed")}
          />
          <SidebarLink 
            icon={<FiCpu />} 
            label="Node Health" 
            active={activeItem === "Node Health"}
            onClick={() => setActiveItem("Node Health")}
          />
          <SidebarLink 
            icon={<FiActivity />} 
            label="Threat Score" 
            active={activeItem === "Threat Score"}
            onClick={() => setActiveItem("Threat Score")}
          />
          <SidebarLink 
            icon={<FiFileText />} 
            label="Activity Logs" 
            active={activeItem === "Activity Logs"}
            onClick={() => setActiveItem("Activity Logs")}
          />
        </nav>

        {/* Footer - Enhanced */}
        <div className="p-6 border-t border-accent/20 bg-gradient-to-br from-accent/5 to-transparent backdrop-blur-sm">
          {/* Status Badge */}
          <div className="mb-4 p-3 glass rounded-xl border border-success/30 bg-success/5">
            <div className="flex items-center justify-center gap-2">
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-success rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2.5 h-2.5 bg-success rounded-full animate-ping"></div>
              </div>
              <span className="text-success text-xs font-bold tracking-wide">ALL SYSTEMS OPERATIONAL</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs text-gray-500 font-medium">
              © {new Date().getFullYear()} <span className="text-gray-400">EchoLock Network</span>
            </p>
            <p className="text-xs text-gray-600 mt-1">Secure • Private • Distributed</p>
          </div>
        </div>
      </aside>
    </>
  );
}

function SidebarLink({ icon, label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`group relative flex items-center gap-4 px-4 py-3.5 rounded-xl cursor-pointer transition-all duration-300 ${
        active
          ? "bg-gradient-to-r from-accent/20 via-cyber/20 to-accent/20 border border-accent/50 shadow-lg shadow-accent/20"
          : "hover:bg-accent/10 border border-transparent hover:border-accent/20"
      }`}
    >
      {/* Active indicator line */}
      {active && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-cyber via-accent to-cyber rounded-r-full shadow-lg shadow-accent/50"></div>
      )}
      
      {/* Icon */}
      <div className={`relative transition-all duration-300 ${
        active 
          ? "text-cyber scale-110" 
          : "text-accent/70 group-hover:text-cyber group-hover:scale-110"
      }`}>
        {icon}
        {active && (
          <div className="absolute inset-0 blur-md bg-cyber/30 -z-10"></div>
        )}
      </div>
      
      {/* Label */}
      <span className={`font-semibold text-sm transition-colors duration-300 ${
        active 
          ? "text-white" 
          : "text-gray-400 group-hover:text-white"
      }`}>
        {label}
      </span>
      
      {/* Active dot */}
      {active && (
        <div className="ml-auto flex items-center gap-1">
          <div className="w-2 h-2 bg-cyber rounded-full animate-pulse shadow-lg shadow-cyber/50"></div>
        </div>
      )}
      
      {/* Hover glow effect */}
      {!active && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/5 rounded-xl transition-all duration-300"></div>
      )}
    </div>
  );
}

export default Sidebar;
