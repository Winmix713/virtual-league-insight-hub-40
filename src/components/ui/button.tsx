
import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "glass";
  size?: "default" | "sm" | "lg" | "icon" | "iconSm" | "iconLg";
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
}

export const buttonVariants = {
  default: "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-blue-500/20 active:shadow-inner",
  destructive: "bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-red-500/20 active:shadow-inner",
  outline: "border border-[#333336] bg-transparent hover:bg-[#1e1e20] text-white hover:border-[#444448]",
  secondary: "bg-[#1e1e20] text-white hover:bg-[#2a2a2e] shadow-md active:shadow-inner",
  ghost: "bg-transparent text-white hover:bg-[#1e1e20] hover:text-white/90",
  link: "text-blue-500 underline-offset-4 hover:underline bg-transparent",
  glass: [
    "relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg text-white shadow-md",
    "before:absolute before:inset-0 before:-z-10 before:transform before:rounded-md",
    "before:bg-gradient-to-r before:from-blue-500/20 before:to-purple-500/20",
    "before:opacity-0 before:transition before:duration-300 hover:before:opacity-100",
    "after:absolute after:inset-0 after:rounded-md after:ring-1 after:ring-inset after:ring-white/10",
    "hover:shadow-blue-500/10 active:shadow-inner"
  ]
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ 
  variant = "default",
  size = "default",
  fullWidth = false,
  leftIcon,
  rightIcon,
  loading,
  children,
  className,
  disabled,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";
  
  const sizeStyles = {
    default: "h-10 px-4 py-2",
    sm: "h-8 px-3 py-1 text-xs",
    lg: "h-12 px-6 py-3 text-base",
    icon: "h-10 w-10",
    iconSm: "h-8 w-8",
    iconLg: "h-12 w-12"
  };

  return (
    <button
      ref={ref}
      className={cn(
        baseStyles,
        typeof buttonVariants[variant] === 'string' 
          ? buttonVariants[variant] 
          : cn(...(buttonVariants[variant] as string[])),
        sizeStyles[size],
        fullWidth && "w-full",
        loading && "relative text-transparent hover:text-transparent cursor-wait",
        className
      )}
      disabled={loading || disabled}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        </div>
      )}
      {leftIcon && !loading && leftIcon}
      {children}
      {rightIcon && !loading && rightIcon}
    </button>
  );
});

Button.displayName = "Button";
