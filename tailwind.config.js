/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f5ff',
          100: '#e0ecff',
          200: '#bad5ff',
          300: '#7fb3ff',
          400: '#3d88ff',
          500: '#1161ff',
          600: '#0038e3', // iconic Blueland electric cobalt blue
          700: '#002ecc',
          800: '#0025a6',
          900: '#0c1a3a', // dark navy text
          cobalt: '#0038e3',
          cobaltDark: '#002bb8',
          cobaltDeep: '#001c8a',
          cobaltLight: '#eff4ff',
          navy: '#0c1a30',
        },
        surface: {
          DEFAULT: '#ffffff',
          dim: '#f4f6fa',
          bright: '#ffffff',
          lowest: '#ffffff',
          low: '#f7f9fd',
          container: '#f0f3f9',
          high: '#e6eaf3',
          highest: '#dce2ed',
        },
        slateSubtle: '#5c697e',
        accentOrange: '#c55b00',
        textDark: '#0d1829',
        textMuted: '#586578',
        borderSubtle: '#e2e6f0',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'clean': '0 2px 10px rgba(0, 30, 80, 0.04)',
        'card': '0 4px 20px -2px rgba(0, 45, 120, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 12px 30px -4px rgba(0, 45, 120, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.04)',
        'modal': '0 20px 50px -10px rgba(0, 20, 60, 0.25)',
      },
      borderRadius: {
        'brand': '0.75rem',
      }
    },
  },
  plugins: [],
}
