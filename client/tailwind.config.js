module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "14px": "14px",
        "30px": "30px",
        "39px": "39px",
        "40px": "40px",
      },
      fontWeight: {
        thin: "100",
        extraLight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
        extraBold: "800",
        black: "900",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        ibm: ["IBM Plex Sans", "sans-serif"],
      },
      colors: {
        black: "#141313",
        gray: "#F3F3F3",
        orange: "#FFB147",
        red: "#FF6C63",
        purple: "#B86ADF",
      },
      animation: {
        spin: "spin 1.2s linear infinite",
      },
    },
  },
  plugins: [],
};
