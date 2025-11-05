import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'apple-blue': '#007AFF',
        'apple-blue-dark': '#0051D5',
        'apple-blue-light': '#4DA2FF',
        'apple-green': '#34C759',
        'apple-purple': '#AF52DE',
        'apple-pink': '#FF2D55',
        'apple-orange': '#FF9500',
        'apple-gray': '#86868B',
        'apple-gray-dark': '#1D1D1F',
        'apple-bg': '#F5F5F7',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'sans-serif'],
      },
      borderRadius: {
        'apple': '28px',
        'apple-sm': '16px',
      },
      boxShadow: {
        'apple-sm': '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'apple-md': '0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.03)',
        'apple-lg': '0 10px 15px rgba(0, 0, 0, 0.08), 0 4px 6px rgba(0, 0, 0, 0.04)',
        'apple-xl': '0 20px 25px rgba(0, 0, 0, 0.1), 0 8px 10px rgba(0, 0, 0, 0.04)',
      },
      backdropBlur: {
        'apple': '20px',
      },
      letterSpacing: {
        'apple': '-0.022em',
        'apple-tight': '-0.04em',
      },
    },
  },
  plugins: [],
}

export default config

