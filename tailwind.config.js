/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { keyframes: {
      pulseGlow: {
        '0%, 100%': { backgroundColor: '#f0b90b' }, // Color base
        '50%': { backgroundColor: '#f3c04d' }, // Color más claro
      },
    },
    animation: {
      glow: 'pulseGlow 1.5s ease-in-out infinite', // Define la animación
    },
  },
  },
  plugins: [],
}

