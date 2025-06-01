import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
import * as React from "react"

import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "card" | "text" | "circle" | "rectangle";
  lines?: number;
  animated?: boolean;
}

function Skeleton({ 
  className, 
  variant = "default", 
  lines = 1, 
  animated = true,
  ...props 
}: SkeletonProps) {
  const baseClasses = cn(
    "bg-muted rounded-md",
    animated && "animate-skeleton",
    className
  );

  if (variant === "text" && lines > 1) {
    return (
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(
              baseClasses,
              "h-4",
              i === lines - 1 ? "w-3/4" : "w-full"
            )}
            {...props}
          />
        ))}
      </div>
    );
  }

  const variantClasses = {
    default: "h-4 w-full",
    card: "h-24 w-full",
    text: "h-4 w-full",
    circle: "h-12 w-12 rounded-full",
    rectangle: "h-20 w-full",
  };

  return (
    <div
      className={cn(baseClasses, variantClasses[variant])}
      {...props}
    />
  );
}

const SkeletonCard = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6 space-y-4", className)} {...props}>
    <Skeleton variant="text" />
    <Skeleton variant="rectangle" />
    <div className="flex space-x-4">
      <Skeleton variant="circle" />
      <div className="flex-1 space-y-2">
        <Skeleton variant="text" lines={2} />
      </div>
    </div>
  </div>
);

const SkeletonTable = ({ rows = 5, cols = 4 }: { rows?: number; cols?: number }) => (
  <div className="space-y-3">
    <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {Array.from({ length: cols }).map((_, i) => (
        <Skeleton key={i} className="h-8" />
      ))}
    </div>
    {Array.from({ length: rows }).map((_, rowIndex) => (
      <div key={rowIndex} className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {Array.from({ length: cols }).map((_, colIndex) => (
          <Skeleton key={colIndex} className="h-6" />
        ))}
      </div>
    ))}
  </div>
);

export { Skeleton, SkeletonCard, SkeletonTable }
