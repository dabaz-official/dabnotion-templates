import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-sans)',
    },
    extend: {
      colors: {
        notion: {
          default: '#55534F',
          lightgray: '#A5A29A',
          brown: '#976D57',
          yellow: '#C29343',
          orange: '#CC782F',
          green: '#548164',
          blue: '#487CA5',
          purple: '#8A67AB',
          pink: '#B35488',
          red: '#C4554D',
        },
      },
    },
  },
  plugins: [],
};
export default config;
