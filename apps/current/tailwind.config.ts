import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        "hackathone-background-dark-blue": "#07173F",
        "hackathone-background-grey": "#DEDEDE4F",
        "hackathone-background-light-grey": "#E4E4E7",
        "hackathone-background-white": "#F8FDFF",
        "hackathone-background-yellow": "#EAFE07",
        "hackathone-border-grey": "#C6C6C6",
        "hackathone-border-light-green": "#77DEB2",
        "hackathone-font-dark-blue": "#07173F",
        "hackathone-font-light-grey": "#52525B",
        "hackathone-font-martin-red": "#07173F",
        "hackathone-font-rocket-red": "#eafe07",

        // remove above colors after complete migration
        brightYellow: "#FFA220",
        pineTree: "#2B2828",
        maastrichtBlue: "#0C1A39",
        vividOrange: "#FF5D00",
        spiroDiscoBall: "#2DC3FF",
      },
      fontFamily: {
        hackathoneCabinetGrotesk: ["var(--font-cabinet-grotesk)"],
        hackathoneSFProDisplay: ["var(--font-sf-pro-display)"],
      },
    },
  },
};
export default config;
