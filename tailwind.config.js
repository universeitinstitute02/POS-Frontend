// tailwind.config.js
import daisyui from 'daisyui';

export default {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4f46e5",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#6b7280",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#f97316",
          foreground: "#ffffff",
        },
        customRed: "#ef4444",
        customBlue: "#3b82f6",
        labelBlue: "#1e40af",
        focusColor: "#fef08a",
      },
      borderRadius: {
        lg: "0.5rem",
        xl: "0.75rem",
        '2xl': "1rem",
        '3xl': "1.5rem",
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.02)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'premium': '0 20px 40px -15px rgba(79, 70, 229, 0.15)',
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#4f46e5",
          "secondary": "#6b7280",
          "accent": "#f97316",
          "neutral": "#374151",
          "base-100": "#f8fafc",
          "info": "#3b82f6",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
    ],
  },
};
