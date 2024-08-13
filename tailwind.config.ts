import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md: '2rem',
          lg: '2rem',
          xl: '5rem',
        },
      },
      boxShadow: {
        custom: '-2px 3px 27px 5px rgba(0,0,0,0.65)',
      },
      colors: {
        primary: '#2A2B2A',
        secondary: '#4A7FE0',
        line: '#707481',
      },
      fontFamily: {
        roboto: ['Roboto', 'system-ui'],
        bebas: ['Bebas Neue', 'system-ui'],
      },
    },
    screens: {
      sm: '420px',
      md: '744px',
      lg: '1024px',
      xl: '1260px',
    },
  },
  plugins: [],
};

export default config;
