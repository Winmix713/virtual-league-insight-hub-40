
import React from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: string;
    isPositive: boolean;
    text: string;
  };
  color: "blue" | "green" | "purple" | "amber";
  className?: string;
  trend?: number[];
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  change,
  color,
  className,
  trend = []
}) => {
  const getColorConfig = (color: string) => {
    const configs = {
      blue: {
        bg: "bg-blue-950/50",
        text: "text-blue-500",
        glow: "bg-blue-500/5",
        iconShadow: "group-hover:shadow-blue-500/20",
        border: "group-hover:border-blue-500",
        iconWrapper: "transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
      },
      green: {
        bg: "bg-green-950/50",
        text: "text-green-500",
        glow: "bg-green-500/5",
        iconShadow: "group-hover:shadow-green-500/20",
        border: "group-hover:border-green-500",
        iconWrapper: "transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
      },
      purple: {
        bg: "bg-purple-950/50",
        text: "text-purple-500",
        glow: "bg-purple-500/5",
        iconShadow: "group-hover:shadow-purple-500/20",
        border: "group-hover:border-purple-500",
        iconWrapper: "transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
      },
      amber: {
        bg: "bg-amber-950/50",
        text: "text-amber-500",
        glow: "bg-amber-500/5",
        iconShadow: "group-hover:shadow-amber-500/20",
        border: "group-hover:border-amber-500",
        iconWrapper: "transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
      }
    };

    return configs[color as keyof typeof configs] || configs.blue;
  };

  const colorClass = getColorConfig(color);

  return (
    <div className={cn(
      "group rounded-lg border text-card-foreground relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] bg-[#121214] bg-opacity-90 backdrop-filter backdrop-blur-sm border-[#222224]",
      className
    )}>
      <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg", colorClass.glow)} />
      <div className="p-6 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-400 transition-colors group-hover:text-gray-300">
              {title}
            </span>
            <span className="text-3xl font-bold text-white mt-1 transition-all duration-300 group-hover:scale-[1.02] relative">
              {value}
              {trend.length > 0 && (
                <div className="absolute -right-12 top-1/2 -translate-y-1/2 flex items-end h-6 gap-[2px]">
                  {trend.map((point, i) => (
                    <div
                      key={i}
                      style={{ height: `${point}%` }}
                      className={cn(
                        "w-[3px] rounded-full transition-all duration-300",
                        colorClass.text,
                        "opacity-50 group-hover:opacity-100"
                      )}
                    />
                  ))}
                </div>
              )}
            </span>
          </div>
          <div className={cn(
            "h-12 w-12 rounded-lg flex items-center justify-center",
            colorClass.bg,
            colorClass.text,
            colorClass.iconWrapper,
            colorClass.iconShadow
          )}>
            {icon}
          </div>
        </div>
        
        {change && (
          <div className="mt-4 flex items-center text-sm">
            <span className={cn(
              "font-medium transition-colors",
              change.isPositive ? "text-green-500 group-hover:text-green-400" : "text-red-500 group-hover:text-red-400"
            )}>
              {change.value}
            </span>
            <span className="text-gray-400 ml-1 transition-colors group-hover:text-gray-300">
              {change.text}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
