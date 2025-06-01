The code is modified to enhance the StatCard component with interactive features, animations, and skeleton loading.
```

```replit_final_file
import React, { useState } from "react";
import { Card } from "./card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  color?: "blue" | "green" | "purple" | "amber";
  change?: {
    value: string;
    isPositive: boolean;
    text: string;
  };
  trend?: number[];
  className?: string;
  interactive?: boolean;
  onClick?: () => void;
  loading?: boolean;
}

export function StatCard({
  title,
  value,
  icon,
  color = "blue",
  change,
  trend,
  className,
  interactive = false,
  onClick,
  loading = false
}: StatCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const colorVariants = {
    blue: {
      icon: "text-blue-500",
      gradient: "from-blue-500/20 to-blue-600/5",
      border: "border-blue-500/20",
      glow: "shadow-blue-500/20"
    },
    green: {
      icon: "text-green-500",
      gradient: "from-green-500/20 to-green-600/5",
      border: "border-green-500/20",
      glow: "shadow-green-500/20"
    },
    purple: {
      icon: "text-purple-500",
      gradient: "from-purple-500/20 to-purple-600/5",
      border: "border-purple-500/20",
      glow: "shadow-purple-500/20"
    },
    amber: {
      icon: "text-amber-500",
      gradient: "from-amber-500/20 to-amber-600/5",
      border: "border-amber-500/20",
      glow: "shadow-amber-500/20"
    }
  };

  const colors = colorVariants[color];

  if (loading) {
    return (
      <Card className={cn("p-6", className)}>
        <div className="animate-pulse">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-700 rounded-lg"></div>
              <div>
                <div className="h-4 bg-gray-700 rounded w-20 mb-2"></div>
                <div className="h-8 bg-gray-700 rounded w-16"></div>
              </div>
            </div>
            <div className="w-16 h-8 bg-gray-700 rounded"></div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <motion.div
      whileHover={interactive ? { scale: 1.02, y: -2 } : undefined}
      whileTap={interactive ? { scale: 0.98 } : undefined}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={className}
    >
      <Card
        className={cn(
          "p-6 transition-all duration-300 relative overflow-hidden",
          `bg-gradient-to-br ${colors.gradient}`,
          `border ${colors.border}`,
          interactive && "cursor-pointer hover:shadow-xl",
          isHovered && interactive && `shadow-xl ${colors.glow}`,
        )}
        onClick={onClick}
      >
        {/* Animated background glow */}
        {isHovered && interactive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            className={cn(
              "absolute inset-0 bg-gradient-to-r",
              color === "blue" && "from-blue-500 to-blue-600",
              color === "green" && "from-green-500 to-green-600",
              color === "purple" && "from-purple-500 to-purple-600",
              color === "amber" && "from-amber-500 to-amber-600"
            )}
          />
        )}

        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {icon && (
                <motion.div
                  animate={isHovered ? { rotate: 5 } : { rotate: 0 }}
                  className={cn("p-2 rounded-lg bg-black/20", colors.icon)}
                >
                  {icon}
                </motion.div>
              )}
              <div>
                <p className="text-sm font-medium text-gray-400">{title}</p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-bold text-white"
                >
                  {value}
                </motion.p>
              </div>
            </div>

            {trend && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-8"
              >
                <svg width="100%" height="100%" viewBox="0 0 64 32" className="overflow-visible">
                  <defs>
                    <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" className={colors.icon} stopOpacity="0.8" />
                      <stop offset="100%" className={colors.icon} stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d={`M 0,${32 - (trend[0] || 0) / 2} ${trend
                      .map((point, index) => `L ${(index * 64) / (trend.length - 1)},${32 - point / 2}`)
                      .join(" ")}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={colors.icon}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                  <path
                    d={`M 0,32 L 0,${32 - (trend[0] || 0) / 2} ${trend
                      .map((point, index) => `L ${(index * 64) / (trend.length - 1)},${32 - point / 2}`)
                      .join(" ")} L 64,32 Z`}
                    fill={`url(#gradient-${color})`}
                  />
                </svg>
              </motion.div>
            )}
          </div>

          {change && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 flex items-center gap-2"
            >
              <span
                className={cn(
                  "inline-flex items-center text-xs font-medium px-2 py-1 rounded-full",
                  change.isPositive
                    ? "text-green-400 bg-green-400/10"
                    : "text-red-400 bg-red-400/10"
                )}
              >
                {change.value}
              </span>
              <span className="text-xs text-gray-400">{change.text}</span>
            </motion.div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}