/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        drift: 'drift 20s ease-in-out infinite',
        pulseSoft: 'pulseSoft 6s ease-in-out infinite'
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)', opacity: '0.5' },
          '50%': { transform: 'translate3d(30px, -20px, 0)', opacity: '1' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.8' }
        }
      }
    }
  },
  plugins: []
};
