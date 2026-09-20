module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        blush: '#f9d7d7',
        rose: '#d86d7d',
        plum: '#4f2d3a',
        cream: '#fffaf7',
        gold: '#d9b77a'
      },
      boxShadow: {
        soft: '0 25px 50px -12px rgba(79, 45, 58, 0.18)'
      }
    }
  },
  plugins: []
};
