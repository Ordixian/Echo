import React from "react";
import { Shield } from "lucide-react";

function Header() {
  return (
    <header className="relative z-50 backdrop-blur-xl bg-white/5 border-b border-blue-500/20 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-400 bg-clip-text text-transparent font-orbitron">
              ECHOLOCK 2.0
            </h1>
            <p className="text-xs text-gray-400">Security Operations Center</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 backdrop-blur-lg bg-green-500/10 border border-green-500/30 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-green-400">ONLINE</span>
          </div>
          
          <div className="hidden md:block text-xs text-gray-400">
            <div>Last Updated</div>
            <div className="text-gray-300 font-medium">
              {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
