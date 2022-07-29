/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "baby-powder": "#F7F6F2",
        independence: "#3D405B",
        opal: "#C0D8CC",
        "steel-teal": "#5F797B",
        "wintergreen-dream": "#70968B",
        "green-sheen": "#81B29A",
      },
      fontFamily: {
        lora: ["Lora", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      transitionDuration: {
        250: "250ms",
      },
    },
  },
  plugins: [],
};
