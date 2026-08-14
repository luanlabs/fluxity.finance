import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        WhiteSmoke: '#F5F5F5',
        BabyBlue: '#E4F6F9',
        MidnightBlue: '#050142',
        RoyalPurple: '#3A21D4',
        LemonYellow: '#FCFF56',
        LightSkyBlue: '#75EEFF',
        // Semantic / lowercase aliases referenced by components (CInput, etc.).
        // Previously undefined, which silently dropped input text, placeholder,
        // focus-border and error styling.
        midnightBlue: '#050142',
        darkBlue: '#050142',
        mutedBlue: '#9CA3AF',
        error: '#EF4444',
      },
      screens: {
        sm: { max: '767px' },
        md: { min: '768px', max: '1023px' },
        lg: { min: '1024px', max: '1280px' },
        mobile: { max: '1023px' },
        xl: { min: '1281px', max: '1535px' },
        xxl: { min: '1536px' },
      },
      animation: {
        movingLine: 'movingLine 6.5s linear infinite',
        movingLineDelay1: 'movingLine 7s linear infinite',
        movingLineDelay2: 'movingLine 9s linear infinite',
        movingLineDelay3: 'movingLine 7.5s linear infinite',
      },
      keyframes: {
        movingLine: {
          '0%': {
            '-moz-transform': 'translateX(-100%)',
            '-webkit-transform': 'translateX(-100%)',
            transform: 'translateX(-100%)',
          },
          '100%': {
            '-moz-transform': 'translateX(110%)',
            '-webkit-transform': 'translateX(110%)',
            transform: 'translateX(110%)',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
