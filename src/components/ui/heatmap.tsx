
import React from "react";
import { cn } from "@/lib/utils";

interface HeatmapData {
  label: string;
  value: number;
  date: string;
}

interface HeatmapProps {
  data: HeatmapData[];
  maxValue?: number;
  className?: string;
}

export const Heatmap: React.FC<HeatmapProps> = ({ 
  data, 
  maxValue, 
  className 
}) => {
  const max = maxValue || Math.max(...data.map(d => d.value));
  const getIntensity = (value: number) => Math.min(value / max, 1);

  return (
    <div className={cn("grid grid-cols-7 gap-1", className)}>
      {data.map((item, index) => (
        <div
          key={index}
          className={cn(
            "w-3 h-3 rounded-sm transition-all duration-200 hover:scale-125 cursor-pointer",
            "border border-[#222224]"
          )}
          style={{
            backgroundColor: `rgba(59, 130, 246, ${getIntensity(item.value) * 0.8})`,
          }}
          title={`${item.label}: ${item.value} on ${item.date}`}
        />
      ))}
    </div>
  );
};
