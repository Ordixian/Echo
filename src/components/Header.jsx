import React from "react";

function Header() {
  return (
    <header className="w-full glass text-white py-4 px-6 flex items-center justify-between shadow-lg border-b border-accent/20 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-accent to-cyber rounded-lg flex items-center justify-center shadow-lg">
          <span className="text-xl font-bold">E</span>
        </div>
        <h1 className="text-xl font-bold tracking-wide bg-gradient-to-r from-white to-accentGlow bg-clip-text text-transparent">
          ECHOLOCK Dashboard
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="glass px-4 py-2 rounded-full flex items-center gap-2 border border-accent/30">
          <span className="text-sm font-medium">Secure Node</span>
          <span className="text-xs text-success font-semibold">Online</span>
        </div>
        <div className="relative">
          <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
          <div className="absolute inset-0 w-3 h-3 bg-success rounded-full animate-ping"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
