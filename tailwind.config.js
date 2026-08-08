/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0a0705',
        espresso: '#1a0f0a',
        charcoal: '#1e1813',
        copper: {
          DEFAULT: '#b87333',
          light: '#d49356',
          dark: '#8a5524',
        },
        brass: '#c9a14a',
        ottoman: {
          red: '#660000',
          gold: '#c9a14a',
          burgundy: '#4a0e1e',
        },
        ember: '#ff7a18',
        cream: '#f5e6c8',
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'serif'],
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'ember-float': 'emberFloat 8s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        emberFloat: {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '0.8' },
          '100%': { transform: 'translateY(-100vh) translateX(20px)', opacity: '0' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(184,115,51,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(184,115,51,0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}
