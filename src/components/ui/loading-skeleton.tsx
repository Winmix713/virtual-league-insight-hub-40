
import React from "react";
import { cn } from "@/lib/utils";

interface LoadingSkeletonProps {
  className?: string;
  variant?: "text" | "card" | "avatar" | "button";
  lines?: number;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  className,
  variant = "text",
  lines = 1
}) => {
  const baseClasses = "animate-pulse bg-gray-800/50 rounded";
  
  if (variant === "text") {
    return (
      <div className={cn("space-y-2", className)}>
        {Array.from({ length: lines }).map((_, i) => (
          <div 
            key={i} 
            className={cn(
              baseClasses, 
              "h-4",
              i === lines - 1 ? "w-3/4" : "w-full"
            )} 
          />
        ))}
      </div>
    );
  }
  
  if (variant === "card") {
    return (
      <div className={cn("p-6 border border-[#222224] rounded-lg", className)}>
        <div className={cn(baseClasses, "h-6 w-1/3 mb-4")} />
        <div className={cn(baseClasses, "h-4 w-full mb-2")} />
        <div className={cn(baseClasses, "h-4 w-2/3")} />
      </div>
    );
  }
  
  if (variant === "avatar") {
    return <div className={cn(baseClasses, "w-10 h-10 rounded-full", className)} />;
  }
  
  if (variant === "button") {
    return <div className={cn(baseClasses, "h-10 w-24", className)} />;
  }
  
  return <div className={cn(baseClasses, className)} />;
};
