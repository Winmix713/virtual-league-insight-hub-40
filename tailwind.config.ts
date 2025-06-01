import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Basic winmix colors
        'winmix-dark': {
          DEFAULT: '#09090b',
          translucent: 'rgba(9, 9, 11, 0.85)'
        },
        'winmix-border': 'rgba(255, 255, 255, 0.08)',
        'winmix-card': {
          DEFAULT: 'rgba(18, 18, 20, 0.7)',
          hover: 'rgba(30, 30, 32, 0.7)'
        },
        'winmix-blue': {
          DEFAULT: '#3b82f6',
          light: '#60a5fa',
          dark: '#2563eb'
        },
        'winmix-purple': 'rgba(147, 51, 234, 0.12)',

        // System colors from heroui
        background: {
          DEFAULT: "#09090b"
        },
        content1: {
          DEFAULT: "rgba(18, 18, 20, 0.7)",
          foreground: "#ffffff"
        },
        content2: {
          DEFAULT: "rgba(30, 30, 32, 0.7)",
          foreground: "#ffffff"
        },
        content3: {
          DEFAULT: "rgba(40, 40, 42, 0.7)",
          foreground: "#ffffff"
        },
        content4: {
          DEFAULT: "rgba(50, 50, 52, 0.7)",
          foreground: "#ffffff"
        },
        divider: {
          DEFAULT: "rgba(255, 255, 255, 0.08)"
        },
        focus: {
          DEFAULT: "#3b82f6"
        },
        foreground: {
          DEFAULT: "#ffffff"
        },
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          DEFAULT: "#3b82f6",
          foreground: "#ffffff"
        },
        default: {
          DEFAULT: "rgba(30, 30, 32, 0.7)",
          foreground: "#ffffff"
        },

        // Status colors
        'status-success': '#10b981',
        'status-warning': '#f59e0b',
        'status-error': '#ef4444',
        'status-info': '#3b82f6',

        // Text colors
        'text-primary': '#ffffff',
        'text-secondary': 'rgba(255, 255, 255, 0.7)',
        'text-muted': 'rgba(255, 255, 255, 0.5)',

        // Default shadcn/ui colors for compatibility
        card: 'rgba(18, 18, 20, 0.7)',
        'card-foreground': '#ffffff',
        popover: 'rgba(18, 18, 20, 0.7)',
        'popover-foreground': '#ffffff',
        secondary: 'rgba(30, 30, 32, 0.7)',
        'secondary-foreground': '#ffffff',
        muted: 'rgba(40, 40, 42, 0.7)',
        'muted-foreground': 'rgba(255, 255, 255, 0.5)',
        accent: 'rgba(30, 30, 32, 0.7)',
        'accent-foreground': '#ffffff',
        destructive: '#ef4444',
        'destructive-foreground': '#ffffff',
        border: 'rgba(255, 255, 255, 0.08)',
        input: 'rgba(255, 255, 255, 0.08)',
        ring: '#3b82f6',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
        'noise-texture': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
        'noise': "var(--noise-filter)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-overlay': 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(9, 9, 11, 0.8))',
        'gradient-45': 'linear-gradient(45deg, var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 15s ease-in-out infinite',
        'float-reverse': 'float 18s ease-in-out infinite reverse',
        'card-entrance': 'cardEntrance 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'dash': 'dash 1.5s linear forwards',
        'count-up': 'countUp 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-ring': 'pulseRing 2s cubic-bezier(0.16, 1, 0.3, 1) infinite',
        'rotate': 'rotate 6s linear infinite',
        'rotate-6s': 'rotate 6s linear infinite',
        'countUp': 'countUp 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scaleIn': 'scaleIn 0.3s ease-out forwards',
        'slideIn': 'slideIn 0.5s ease-out forwards',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s infinite",
        "blur-in": "blur-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        skeleton: "skeleton 1.5s ease-in-out infinite",
        "slide-in-left": "slideInLeft 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-in-right": "slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in-up": "fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "progress-bar": "progressBar 2s ease-out forwards",
        bounce: "bounce 1s ease-in-out",
        wiggle: "wiggle 1s ease-in-out infinite",
        heartbeat: "heartbeat 1.5s ease-in-out infinite",
      },
      keyframes: {
        // Loading animations
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "blur-in": {
          "0%": { filter: "blur(10px)", opacity: "0" },
          "100%": { filter: "blur(0px)", opacity: "1" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        skeleton: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0.4" },
          "100%": { opacity: "1" },
        },

        // Movement animations
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        cardEntrance: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        // Progress animations
        dash: {
          to: { strokeDasharray: "1000", strokeDashoffset: "0" },
        },
        "count-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        progressBar: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },

        // Interactive animations
        pulseRing: {
          "0%": { transform: "scale(0.33)" },
          "40%, 50%": { opacity: "1" },
          "100%": { opacity: "0", transform: "scale(1.33)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        countUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        bounce: {
          "0%, 20%, 53%, 80%, 100%": { transform: "translate3d(0,0,0)" },
          "40%, 43%": { transform: "translate3d(0,-8px,0)" },
          "70%": { transform: "translate3d(0,-4px,0)" },
          "90%": { transform: "translate3d(0,-1px,0)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        heartbeat: {
          "0%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.1)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.1)" },
          "70%": { transform: "scale(1)" },
        },
      },
      fontFamily: {
        'primary': ['Inter', 'sans-serif'],
        'display': ['Space Grotesk', 'sans-serif'],
      },
      transitionTimingFunction: {
        'bounce-soft': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glass-hover': '0 8px 32px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'premium': '0 8px 32px rgba(0, 0, 0, 0.2)',
        'inner-glow': 'inset 0 0 15px rgba(255, 255, 255, 0.05)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      borderRadius: {
        'px': '1px',
        'inherit': 'inherit',
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      spacing: {
        '7.5': '30px',
      },
      fontSize: {
        'tiny': '0.75rem',
        'small': '0.875rem',
        'medium': '0.9375rem',
        'large': '1.125rem',
      },
      lineHeight: {
        'tiny': '1rem',
        'small': '1.25rem',
        'medium': '1.5rem',
        'large': '1.75rem',
      },
      transitionDuration: {
        '400': '400ms',
        '2000': '2000ms',
        '3000': '3000ms',
        '8000': '8000ms',
      },
    },
  },
  darkMode: "class",
  plugins: [require("tailwindcss-animate")],
} satisfies Config;