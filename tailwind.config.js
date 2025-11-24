/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#0284c7', // HVAC Blue (Sky 600)
          dark: '#0f172a',    // Slate-900 (Main Background - Dark)
          card: '#1e293b',    // Slate-800 (Card Background - Dark)
          light: '#f8fafc',   // Slate-50 (Main Text - Light)
          muted: '#94a3b8',   // Slate-400 (Muted Text)
          accent: '#dc2626',  // Heating Red (Red 600)
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  },
  plugins: [],
}