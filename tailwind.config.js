/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#0D0D0D',
        secondary: '#141410',
        'surface-light': '#1A1914',
        'accent-gold': '#C8A96E',
        'accent-gold-hover': '#D4B483',
        'accent-cream': '#F5F0E8',
        'muted-text': '#8A8478',
        'bg-footer': '#0A0A08',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        none: '0px',
      },
      letterSpacing: {
        eyebrow: '0.14em',
        btn: '0.10em',
      },
    },
  },
  plugins: [],
}
