import React from "react";

function Header() {
  return (
    <header className="w-full bg-primary text-white py-4 px-6 flex items-center justify-between shadow-md">
      <h1 className="text-xl font-semibold tracking-wide">ECHOLOCK Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-sm opacity-80">Secure Node: Online</span>
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
      </div>
    </header>
  );
}

export default Header;
