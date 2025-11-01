import React, { useState } from "react";
import { FiMenu, FiX, FiActivity, FiGlobe, FiShield, FiCpu, FiFileText } from "react-icons/fi";
import logo from "/logo.svg";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Local Detections");

  return (
    <>
      {/* Toggle Button (mobile view) */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 bg-gradient-to-r from-accent to-cyber text-white rounded-lg shadow-lg hover:shadow-accent/50 transition-all"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:static inset-y-0 left-0 z-40 w-64 glass text-gray-100 transition-all duration-300 ease-in-out flex flex-col border-r border-accent/20 shadow-2xl`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 p-6 border-b border-accent/20">
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-cyber rounded-lg flex items-center justify-center shadow-lg animate-pulse-slow">
            <img src={logo} alt="EchoLock Logo" className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-bold tracking-wider bg-gradient-to-r from-white to-accentGlow bg-clip-text text-transparent">
            ECHOLOCK
          </h2>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-4 py-6 space-y-2">
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

        {/* Footer */}
        <div className="p-4 text-xs text-center text-gray-400 border-t border-accent/20">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-success font-semibold">All Systems Operational</span>
          </div>
          <p className="opacity-60">© {new Date().getFullYear()} EchoLock Network</p>
        </div>
      </aside>
    </>
  );
}

function SidebarLink({ icon, label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 group ${
        active
          ? "bg-gradient-to-r from-accent/30 to-cyber/30 border border-accent/50 shadow-lg"
          : "hover:bg-accent/10 border border-transparent"
      }`}
    >
      <div className={`transition-all duration-200 ${active ? "text-accentGlow scale-110" : "text-accent group-hover:text-accentGlow group-hover:scale-110"}`}>
        {icon}
      </div>
      <span className={`font-medium ${active ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
        {label}
      </span>
      {active && (
        <div className="ml-auto w-2 h-2 bg-accent rounded-full animate-pulse"></div>
      )}
    </div>
  );
}

export default Sidebar;
