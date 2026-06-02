/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: {
          light: '#eaeaeb',
          strong: '#0f0d28',
        },
        text: {
          prominent: '#0f0d28',
          default: '#50545e',
        },
        bg: {
          surface: '#f7f7f8',
          hover: '#eaeaeb',
        },
      },
    },
  },
  plugins: [],
}
