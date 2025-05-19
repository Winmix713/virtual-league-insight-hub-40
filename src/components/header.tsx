
import React from "react";
import { PanelLeft, Bell, Search, User, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  toggleSidebar: () => void;
  scrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ toggleSidebar, scrolled }) => {
  return (
    <header className={cn(
      "sticky top-0 z-30 h-16 transition-all duration-300 flex items-center justify-between px-4",
      scrolled
        ? "bg-[#09090b]/95 backdrop-blur-md border-b border-[#222224] shadow-md"
        : "bg-[#09090b]/90 backdrop-blur-sm border-b border-[#222224]"
    )}>
      <div className="flex items-center gap-4">
        <button
          className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 h-9 w-9 lg:hidden text-gray-400 hover:text-white hover:bg-[#1e1e20]"
          onClick={toggleSidebar}
        >
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Sidebar</span>
        </button>

        <div className="hidden md:block">
          <h1 className="text-lg font-semibold text-white">Dashboard</h1>
        </div>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex max-w-md w-full mx-8">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-4 h-4 text-gray-500" />
          </div>
          <input
            type="search"
            className="w-full py-2 pl-10 pr-4 text-sm bg-[#1e1e20]/50 border border-[#222224] rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Search teams, matches, statistics..."
          />
        </div>
      </div>

      {/* Header Actions */}
      <div className="flex items-center gap-3">
        <button className="inline-flex md:hidden items-center justify-center rounded-md text-sm font-medium transition-all duration-200 h-9 w-9 text-gray-400 hover:text-white hover:bg-[#1e1e20]/70">
          <Search className="h-5 w-5" />
        </button>

        <button className="relative inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 h-10 w-10 text-gray-400 hover:text-white hover:bg-[#1e1e20]/70">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full ring-2 ring-[#09090b] animate-pulse"></span>
        </button>

        <div className="relative ml-2 hidden sm:block">
          <button className="flex items-center gap-2 px-1.5 py-1 rounded-md hover:bg-[#1e1e20]/70 transition-all duration-200">
            <div className="relative w-8 h-8 overflow-hidden rounded-full bg-gradient-to-br from-blue-600 to-purple-600">
              <User className="h-4 w-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="hidden lg:flex flex-col items-start">
              <span className="text-sm font-medium text-white">Admin User</span>
              <span className="text-xs text-gray-400">Pro Account</span>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-400 hidden lg:block" />
          </button>
        </div>
      </div>
    </header>
  );
};
