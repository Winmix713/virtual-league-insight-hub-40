import * as React from "react"

import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glassmorphism?: boolean;
  glowColor?: "blue" | "green" | "purple" | "amber" | "red";
  intensity?: "low" | "medium" | "high";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, glassmorphism = false, glowColor = "blue", intensity = "medium", ...props }, ref) => {
    const glassStyles = glassmorphism ? {
      blue: {
        low: "bg-gradient-to-br from-blue-900/10 via-gray-900/20 to-black/30 backdrop-blur-sm border-blue-500/20 hover:border-blue-400/30",
        medium: "bg-gradient-to-br from-blue-900/20 via-gray-900/30 to-black/40 backdrop-blur-md border-blue-500/30 hover:border-blue-400/40",
        high: "bg-gradient-to-br from-blue-900/30 via-gray-900/40 to-black/50 backdrop-blur-lg border-blue-500/40 hover:border-blue-400/50"
      },
      green: {
        low: "bg-gradient-to-br from-green-900/10 via-gray-900/20 to-black/30 backdrop-blur-sm border-green-500/20 hover:border-green-400/30",
        medium: "bg-gradient-to-br from-green-900/20 via-gray-900/30 to-black/40 backdrop-blur-md border-green-500/30 hover:border-green-400/40",
        high: "bg-gradient-to-br from-green-900/30 via-gray-900/40 to-black/50 backdrop-blur-lg border-green-500/40 hover:border-green-400/50"
      },
      purple: {
        low: "bg-gradient-to-br from-purple-900/10 via-gray-900/20 to-black/30 backdrop-blur-sm border-purple-500/20 hover:border-purple-400/30",
        medium: "bg-gradient-to-br from-purple-900/20 via-gray-900/30 to-black/40 backdrop-blur-md border-purple-500/30 hover:border-purple-400/40",
        high: "bg-gradient-to-br from-purple-900/30 via-gray-900/40 to-black/50 backdrop-blur-lg border-purple-500/40 hover:border-purple-400/50"
      },
      amber: {
        low: "bg-gradient-to-br from-amber-900/10 via-gray-900/20 to-black/30 backdrop-blur-sm border-amber-500/20 hover:border-amber-400/30",
        medium: "bg-gradient-to-br from-amber-900/20 via-gray-900/30 to-black/40 backdrop-blur-md border-amber-500/30 hover:border-amber-400/40",
        high: "bg-gradient-to-br from-amber-900/30 via-gray-900/40 to-black/50 backdrop-blur-lg border-amber-500/40 hover:border-amber-400/50"
      },
      red: {
        low: "bg-gradient-to-br from-red-900/10 via-gray-900/20 to-black/30 backdrop-blur-sm border-red-500/20 hover:border-red-400/30",
        medium: "bg-gradient-to-br from-red-900/20 via-gray-900/30 to-black/40 backdrop-blur-md border-red-500/30 hover:border-red-400/40",
        high: "bg-gradient-to-br from-red-900/30 via-gray-900/40 to-black/50 backdrop-blur-lg border-red-500/40 hover:border-red-400/50"
      }
    } : {};

    const glassClass = glassmorphism ? glassStyles[glowColor]?.[intensity] || glassStyles.blue.medium : "";

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg shadow-sm transition-all duration-300 ease-out",
          glassmorphism 
            ? cn("relative overflow-hidden", glassClass, "hover:shadow-lg hover:scale-[1.01]")
            : "border bg-card text-card-foreground",
          className
        )}
        {...props}
      />
    );
  }
)

Card.displayName = "Card"

export { Card }