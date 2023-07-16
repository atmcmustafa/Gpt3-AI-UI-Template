/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: "true",
    },
    extend: {
      colors: {
        gradientText:
          "linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)",
        gradientBar:
          "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
        colorBg: "#040C18",
        colorFooter: "#031B34",
        colorBlog: "#042c54",
        colorText: " #81AFDD",
        colorSubtext: " #FF8A71",
      },
    },

    screens: {
      mobile: "350px",
      largeMobile: "480px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
