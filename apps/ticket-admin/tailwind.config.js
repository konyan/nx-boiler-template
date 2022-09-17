/** @type {import('tailwindcss').Config} */
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  // purge: [join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}')],
  theme: {
    extend: {
      screens: {
        mew_sm: '429px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: '#1fb6ff',
        purple: '#312e81',
        'purple-md': '#644299',
        black: '#010101',
        white: '#ffffff',
        'gray-dark': '#273444',
        'gray-light': 'azure',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};
