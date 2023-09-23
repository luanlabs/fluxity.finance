import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        WhiteSmoke: '#F5F5F5',
        BabyBlue: '#E4F6F9',
        MidnightBlue: '#050142',
        RoyalPurple: '#3A21D4',
        LemonYellow: '#FCFF56',
        LightSkyBlue: '#75EEFF',
      },
      screens: {
        sm: { max: '767px' },
        md: { min: '768px', max: '1023px' },
        lg: { min: '1024px', max: '1279px' },
        xl: { min: '1280px', max: '1535px' },
        xxl: { min: '1536px' },
      },
    },
  },
  plugins: [],
};

export default config;
