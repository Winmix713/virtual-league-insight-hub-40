import type { Config } from "tailwindcss"
const config = require("shadcn-ui/tailwind.config.js")

/**
 * Tailwind CSS Configuration
 *
 * This configuration extends the default Tailwind setup with custom
 * colors, animations, and other theme customizations for the sports app.
 */
export default {
  // Core configuration
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  presets: [config],

  theme: {
    // Container configuration
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      /**
       * Color System
       */
      colors: {
        // Winmix colors
        "winmix-dark": {
          DEFAULT: "#09090b",
          translucent: "rgba(9, 9, 11, 0.85)",
        },
        "winmix-border": "rgba(255, 255, 255, 0.08)",
        "winmix-card": {
          DEFAULT: "rgba(18, 18, 20, 0.7)",
          hover: "rgba(30, 30, 32, 0.7)",
        },
        "winmix-blue": {
          DEFAULT: "#3b82f6",
          light: "#60a5fa",
          dark: "#2563eb",
        },
        "winmix-purple": "rgba(147, 51, 234, 0.12)",

        // Base UI colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // Semantic colors
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          // DEFAULT: "rgba(30, 30, 32, 0.7)",
          // foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
          // DEFAULT: "#ef4444",
          // foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
          // DEFAULT: "rgba(40, 40, 42, 0.7)",
          // foreground: "rgba(255, 255, 255, 0.5)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          // DEFAULT: "rgba(30, 30, 32, 0.7)",
          // foreground: "#ffffff",
        },

        // Component colors
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
          // DEFAULT: "rgba(18, 18, 20, 0.7)",
          // foreground: "#ffffff",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          // DEFAULT: "rgba(18, 18, 20, 0.7)",
          // foreground: "#ffffff",
        },

        // Content levels
        content1: {
          DEFAULT: "rgba(18, 18, 20, 0.7)",
          foreground: "#ffffff",
        },
        content2: {
          DEFAULT: "rgba(30, 30, 32, 0.7)",
          foreground: "#ffffff",
        },
        content3: {
          DEFAULT: "rgba(40, 40, 42, 0.7)",
          foreground: "#ffffff",
        },
        content4: {
          DEFAULT: "rgba(50, 50, 52, 0.7)",
          foreground: "#ffffff",
        },

        // Status colors
        "status-success": "#10b981",
        "status-warning": "#f59e0b",
        "status-error": "#ef4444",
        "status-info": "#3b82f6",

        // Text colors
        "text-primary": "#ffffff",
        "text-secondary": "rgba(255, 255, 255, 0.7)",
        "text-muted": "rgba(255, 255, 255, 0.5)",

        // Brand/Sports-specific colors
        sports: {
          // Blue palette
          blue: "#0ea5e9",
          "blue-dark": "#0284c7",

          // Green palette
          green: "#10b981",
          "green-dark": "#059669",

          // Accent palette
          accent: "#f59e0b",
          "accent-dark": "#d97706",
        },
      },

      /**
       * Background Images
       */
      backgroundImage: {
        "glass-gradient": "linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))",
        "noise-texture":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
        noise: "var(--noise-filter)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-overlay": "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(9, 9, 11, 0.8))",
        "gradient-45": "linear-gradient(45deg, var(--tw-gradient-stops))",
      },

      /**
       * Border Radius System
       */
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // lg: "0.75rem",
        // md: "0.5rem",
        // sm: "0.25rem",
        px: "1px",
        inherit: "inherit",
      },

      /**
       * Animation Keyframes
       */
      keyframes: {
        // UI component animations
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        // Transition animations
        "fade-in": {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-out": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "50%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
        },
        "scale-in": {
          from: { transform: "scale(0.95)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },

        // Movement animations
        "slide-up": {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "slide-in": {
          from: { transform: "translateX(-20px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },

        // Effect animations
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        "blur-in": {
          "0%": {
            opacity: "0",
            filter: "blur(10px)",
          },
          "100%": {
            opacity: "1",
            filter: "blur(0)",
          },
        },
        "pulse-slow": {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.8",
          },
        },
        float: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(30px, -20px) scale(1.1)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
        cardEntrance: {
          to: { opacity: "1", transform: "translateY(0)" },
        },
        dash: {
          to: { strokeDashoffset: "0" },
        },
        countUp: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.8)", opacity: "0.8" },
          "80%, 100%": { transform: "scale(1.5)", opacity: "0" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },

      /**
       * Animation Definitions
       */
      animation: {
        // Component animations
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",

        // Fade animations
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-in-fast": "fade-in 0.3s ease-out forwards",
        "fade-in-out": "fade-in-out 2s ease-out infinite",

        // Movement and transition animations
        "scale-in": "scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-in": "slide-in 0.5s ease-out forwards",
        "slide-in-right": "slide-in-right 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",

        // Effect animations
        shimmer: "shimmer 2s infinite",
        "blur-in": "blur-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 15s ease-in-out infinite",
        "float-reverse": "float 18s ease-in-out infinite reverse",
        "card-entrance": "cardEntrance 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        dash: "dash 1.5s linear forwards",
        "count-up": "countUp 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-ring": "pulseRing 2s cubic-bezier(0.16, 1, 0.3, 1) infinite",
        rotate: "rotate 6s linear infinite",
        "rotate-6s": "rotate 6s linear infinite",
        countUp: "countUp 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        scaleIn: "scaleIn 0.3s ease-out forwards",
      },

      /**
       * Font Families
       */
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        primary: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },

      /**
       * Transition Timing Functions
       */
      transitionTimingFunction: {
        "bounce-soft": "cubic-bezier(0.16, 1, 0.3, 1)",
      },

      /**
       * Box Shadows
       */
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
        "glass-hover": "0 8px 32px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)",
        premium: "0 8px 32px rgba(0, 0, 0, 0.2)",
        "inner-glow": "inset 0 0 15px rgba(255, 255, 255, 0.05)",
      },

      /**
       * Backdrop Blur
       */
      backdropBlur: {
        xs: "2px",
      },

      /**
       * Spacing
       */
      spacing: {
        "7.5": "30px",
      },

      /**
       * Font Sizes
       */
      fontSize: {
        tiny: "0.75rem",
        small: "0.875rem",
        medium: "0.9375rem",
        large: "1.125rem",
      },

      /**
       * Line Heights
       */
      lineHeight: {
        tiny: "1rem",
        small: "1.25rem",
        medium: "1.5rem",
        large: "1.75rem",
      },

      /**
       * Transition Durations
       */
      transitionDuration: {
        "400": "400ms",
        "2000": "2000ms",
        "3000": "3000ms",
        "8000": "8000ms",
      },
    },
  },

  /**
   * Plugins
   */
  plugins: [require("tailwindcss-animate")],
} satisfies Config
