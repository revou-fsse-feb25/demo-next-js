/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark mode custom colors
        dark: {
          100: '#1e293b',
          200: '#0f172a',
          300: '#020617',
        },
        glow: {
          blue: '#38bdf8',
          purple: '#a78bfa',
          green: '#4ade80',
          amber: '#fbbf24',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 10px rgba(56, 189, 248, 0.3)',
      }
    },
  },
  plugins: [],
}