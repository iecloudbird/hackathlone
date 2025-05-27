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
      },
      fontFamily: {
        hackathoneCabinetGrotesk: ["var(--font-cabinet-grotesk)"],
        hackathoneSFProDisplay: ["var(--font-sf-pro-display)"],
      },
      screens: {
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        DesktopScreen: { min: "1024.5px" },
        // => @media (min-width: 1024.5px) { ... }

        MobileScreen: { max: "480.5px" },
        // => @media (max-width: 480.5px) { ... }

        TabletScreen: { max: "1024.5px", min: "480.5px" },
        // => @media (min-width: 480.5px) and (max-width: 1024.5px) { ... }

        lg: "1024.5px",
        // => @media (min-width: 1024px) { ... }

        md: "768.1px",
        // => @media (min-width: 768px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
};
export default config;
