module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '14px': '14px',
      },
      fontWeight: {
        'LightItalic': 300,
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        royalBlue: "#4169e1",
      },
      animation: {
        spin: "spin 1.2s linear infinite",
      },
    },

  },
  plugins: [
  ],
}