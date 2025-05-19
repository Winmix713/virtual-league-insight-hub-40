
import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  glassmorphism?: boolean;
  glowColor?: "blue" | "purple" | "green" | "amber" | "none";
  hoverEffect?: boolean;
  variant?: "default" | "elevated" | "bordered";
}

export const Card: React.FC<CardProps> = ({
  title,
  icon,
  children,
  className = "",
  glassmorphism = false,
  glowColor = "blue",
  hoverEffect = false,
  variant = "default"
}) => {
  const getGlowStyles = () => {
    const baseClasses = "absolute opacity-30 blur-3xl rounded-full transition-opacity duration-500";
    const positionClasses = {
      topLeft: "-top-24 -left-24 w-96 h-96",
      bottomRight: "-bottom-24 -right-24 w-96 h-96"
    };
    
    const colorClasses = {
      blue: {
        topLeft: "bg-blue-500/20 animate-pulse",
        bottomRight: "bg-indigo-500/20 animate-pulse delay-1000"
      },
      purple: {
        topLeft: "bg-purple-500/20 animate-pulse",
        bottomRight: "bg-fuchsia-500/20 animate-pulse delay-1000"
      },
      green: {
        topLeft: "bg-green-500/20 animate-pulse",
        bottomRight: "bg-emerald-500/20 animate-pulse delay-1000"
      },
      amber: {
        topLeft: "bg-amber-500/20 animate-pulse",
        bottomRight: "bg-orange-500/20 animate-pulse delay-1000"
      },
      none: {
        topLeft: "hidden",
        bottomRight: "hidden"
      }
    };
    
    return {
      topLeft: `${baseClasses} ${positionClasses.topLeft} ${colorClasses[glowColor].topLeft}`,
      bottomRight: `${baseClasses} ${positionClasses.bottomRight} ${colorClasses[glowColor].bottomRight}`
    };
  };

  const variantClasses = {
    default: "bg-[#121214] border-[#222224]",
    elevated: "bg-[#121214] border-[#222224] shadow-lg shadow-black/20",
    bordered: "bg-[#121214]/80 border-[#333336] backdrop-blur-sm"
  };

  const glowStyles = getGlowStyles();

  return (
    <div className={cn(
      "rounded-lg border text-card-foreground transition-all duration-300",
      glassmorphism && "relative overflow-hidden backdrop-blur-xl bg-background/95 border-white/10",
      hoverEffect && "hover:translate-y-[-2px] hover:shadow-xl hover:shadow-black/20",
      variantClasses[variant],
      className
    )}>
      {glassmorphism && (
        <>
          <div className={glowStyles.topLeft}></div>
          <div className={glowStyles.bottomRight}></div>
        </>
      )}
      
      <div className="relative z-10">
        {title && (
          <div className="flex items-center justify-between p-4 border-b border-[#222224]">
            <h3 className="font-semibold tracking-tight text-lg">{title}</h3>
            {icon && (
              <div className="transition-transform duration-300 group-hover:scale-110">
                {icon}
              </div>
            )}
          </div>
        )}
        <div className={title ? 'p-4' : 'p-0'}>
          {children}
        </div>
      </div>
    </div>
  );
};
