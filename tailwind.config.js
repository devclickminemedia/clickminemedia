/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cmm: {
          orange: "#FF751F",
          coral: "#FF4B43",
          pink: "#E50069",
          navy: "#111827",
          dark: "#08090B",
          surface: "#0F1117",
          card: "#141721",
          border: "rgba(255, 255, 255, 0.08)",
          muted: "#94A3B8",
          light: "#F5F3EF",
        },
      },
      backgroundImage: {
        'cmm-gradient': 'linear-gradient(135deg, #FF751F 0%, #FF4B43 50%, #E50069 100%)',
        'cmm-gradient-h': 'linear-gradient(90deg, #FF751F 0%, #FF4B43 50%, #E50069 100%)',
        'cmm-glow': 'radial-gradient(circle at 50% 50%, rgba(229, 0, 105, 0.15), rgba(255, 117, 31, 0.05) 50%, transparent 80%)',
      },
      fontFamily: {
        sans: ['var(--font-rubik)', 'Rubik', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-rubik)', 'Rubik', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        shimmer: 'shimmer 8s ease-in-out infinite',
        glow: 'pulseGlow 6s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
