
import React from "react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  active?: boolean;
  badge?: {
    text: string;
    color: "blue" | "green" | "red" | "amber";
  };
  endIcon?: React.ReactNode;
  onClick?: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({
  href,
  icon,
  title,
  subtitle,
  active,
  badge,
  endIcon,
  onClick
}) => {
  const getBadgeColorClass = (color: string) => {
    const baseClasses = "px-2 py-0.5 text-xs font-medium rounded transition-all duration-300 group-hover:scale-105 shadow-md";
    const colorClasses = {
      blue: "bg-blue-600/90 text-white shadow-blue-500/20",
      green: "bg-green-600/90 text-white shadow-green-500/20",
      red: "bg-red-600/90 text-white shadow-red-500/20",
      amber: "bg-amber-600/90 text-white shadow-amber-500/20"
    };
    return cn(baseClasses, colorClasses[color as keyof typeof colorClasses]);
  };

  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "group relative w-full flex items-center px-3 py-3 rounded-md text-left transition-all duration-300",
        "hover:translate-x-1 hover:backdrop-blur-sm",
        active
          ? [
              "text-white bg-gradient-to-r from-[#1e1e20] to-[#1e1e20]/80",
              "after:absolute after:inset-0 after:rounded-md after:ring-1",
              "after:ring-inset after:ring-white/10 after:transition-opacity",
              "hover:after:opacity-100"
            ]
          : [
              "text-gray-400 hover:text-gray-200 hover:bg-[#1e1e20]/30",
              "after:absolute after:inset-0 after:rounded-md after:ring-1",
              "after:ring-inset after:ring-white/5 after:opacity-0",
              "hover:after:opacity-100"
            ]
      )}
    >
      {active && (
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-600 rounded-r-md transition-all duration-300 group-hover:h-8 group-hover:shadow-lg group-hover:shadow-blue-500/20"></span>
      )}
      
      <span className="relative flex items-center justify-center w-8 h-8 mr-3 transition-all duration-300 group-hover:scale-105">
        {icon}
        {active && (
          <span className="absolute inset-0 bg-blue-500/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        )}
      </span>
      
      <div className="flex-1">
        <div className="text-sm font-medium transition-all duration-300 group-hover:translate-x-0.5">
          {title}
        </div>
        <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-all duration-300 group-hover:translate-x-0.5">
          {subtitle}
        </div>
      </div>
      
      {badge && (
        <span className={getBadgeColorClass(badge.color)}>
          {badge.text}
        </span>
      )}
      
      {endIcon && (
        <span className="transition-all duration-300 group-hover:translate-x-0.5">
          {endIcon}
        </span>
      )}
    </a>
  );
};
