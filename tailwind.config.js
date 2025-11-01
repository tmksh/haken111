/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        blue: "var(--blue)",
        "bue-2": "var(--bue-2)",
        green: "var(--green)",
        "grey-2": "var(--grey-2)",
        "grey-3": "var(--grey-3)",
        "grey-4": "var(--grey-4)",
        "grey1-bg": "var(--grey1-bg)",
        "light-blue": "var(--light-blue)",
        "light-yellow": "var(--light-yellow)",
        ngblue: "var(--ngblue)",
        nggreen: "var(--nggreen)",
        "nglight-blue": "var(--nglight-blue)",
        ngorange: "var(--ngorange)",
        ngpink: "var(--ngpink)",
        ngpurple: "var(--ngpurple)",
        ngred: "var(--ngred)",
        ngtext: "var(--ngtext)",
        ngyellow: "var(--ngyellow)",
        pink: "var(--pink)",
        red: "var(--red)",
        text: "var(--text)",
        "text-2": "var(--text-2)",
        white: "var(--white)",
        yellow: "var(--yellow)",
      },
      boxShadow: {
        "": "var(--)",
      },
    },
  },
  plugins: [],
};
