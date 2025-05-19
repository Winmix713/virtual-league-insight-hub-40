
import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base system colors
        'winmix-dark': '#09090b',
        'winmix-border': 'rgba(255, 255, 255, 0.08)',
        'winmix-card': 'rgba(18, 18, 20, 0.7)',
        'winmix-hover': 'rgba(30, 30, 32, 0.7)',
        'winmix-active': 'rgba(40, 40, 42, 0.7)',
        
        // Accent colors
        'winmix-blue': '#3b82f6',
        'winmix-purple': '#8b5cf6',
        'winmix-green': '#10b981',
        'winmix-amber': '#f59e0b',
        'winmix-red': '#ef4444',
        
        // Status colors
        'status-success': '#10b981',
        'status-warning': '#f59e0b',
        'status-error': '#ef4444',
        'status-info': '#3b82f6',
        
        // Text colors
        'text-primary': '#ffffff',
        'text-secondary': 'rgba(255, 255, 255, 0.7)',
        'text-muted': 'rgba(255, 255, 255, 0.5)',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
        'noise': "var(--noise-filter)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-overlay': 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(9, 9, 11, 0.8))',
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 15s ease-in-out infinite',
        'float-reverse': 'float 18s ease-in-out infinite reverse',
        'countUp': 'countUp 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fadeIn': 'fadeIn 0.5s ease-out forwards',
        'slideIn': 'slideIn 0.5s ease-out forwards',
        'scaleIn': 'scaleIn 0.3s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(30px, -20px) scale(1.1)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        countUp: {
          'from': { opacity: 0, transform: 'translateY(10px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: 0 },
          'to': { opacity: 1 },
        },
        slideIn: {
          'from': { transform: 'translateX(-20px)', opacity: 0 },
          'to': { transform: 'translateX(0)', opacity: 1 },
        },
        scaleIn: {
          'from': { transform: 'scale(0.95)', opacity: 0 },
          'to': { transform: 'scale(1)', opacity: 1 },
        },
      },
      fontFamily: {
        'primary': ['Inter', 'sans-serif'],
        'display': ['Space Grotesk', 'sans-serif'],
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(10px)',
      },
      transitionDuration: {
        '400': '400ms',
        '2000': '2000ms',
        '3000': '3000ms',
        '8000': '8000ms',
      },
      borderRadius: {
        'px': '1px',
      },
      spacing: {
        '7.5': '30px',
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",
          small: "0.875rem",
          medium: "0.9375rem",
          large: "1.125rem",
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "6px", 
          medium: "8px", 
          large: "12px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        light: {
          colors: {
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
            }
          }
        },
        // Remove duplicate dark theme since it's identical to light theme
        // Both themes use the same dark UI appearance
      }
    })
  ]
}
