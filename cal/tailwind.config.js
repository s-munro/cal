/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      "blue": "#5063F7",
      "purple": "#6622CC",
      "offwhite": "#F5F5F5",
      "black": "#141414",
      "green": "#53A548",
      "orange": "#f4a261",
      "sand": "#e9c46a",
      "sun": "#e76f51",
      "ocean": "#2a9d8f",
    },
  },
  plugins: [],
};
