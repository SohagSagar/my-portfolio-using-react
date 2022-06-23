module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FFB742",
          secondary: "#333333",
          accent: "#707070",
          neutral: "#0F0F0F",
          neutral1: "#00AEFF",
          bgWhite:"red",
          step1:"#00AEFF",
          "base-100": "#ffffff",
        },
      },
      "light",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}