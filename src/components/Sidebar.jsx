import React, { useState } from "react";
import { FiMenu, FiX, FiActivity, FiGlobe, FiShield, FiCpu, FiFileText } from "react-icons/fi";
import logo from "/logo.svg";

function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* Toggle Button (mobile view) */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 bg-primary text-white rounded-md"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:static inset-y-0 left-0 z-40 w-64 bg-[#1e293b] text-gray-100 transition-transform duration-300 ease-in-out flex flex-col`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 p-6 border-b border-gray-700">
          <img src={logo} alt="EchoLock Logo" className="w-8 h-8" />
          <h2 className="text-lg font-semibold tracking-wider">ECHOLOCK</h2>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-4 py-6 space-y-4">
          <SidebarLink icon={<FiShield />} label="Local Detections" />
          <SidebarLink icon={<FiGlobe />} label="Global Feed" />
          <SidebarLink icon={<FiCpu />} label="Node Health" />
          <SidebarLink icon={<FiActivity />} label="Threat Score" />
          <SidebarLink icon={<FiFileText />} label="Activity Logs" />
        </nav>

        {/* Footer */}
        <div className="p-4 text-xs text-center text-gray-400 border-t border-gray-700">
          © {new Date().getFullYear()} EchoLock Network
        </div>
      </aside>
    </>
  );
}

function SidebarLink({ icon, label }) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 hover:bg-primary/40 rounded-md cursor-pointer transition">
      <div className="text-accent">{icon}</div>
      <span>{label}</span>
    </div>
  );
}

export default Sidebar;
