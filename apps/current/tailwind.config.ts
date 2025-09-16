import { type Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("tailwindcss-animate")],
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
        deepSpace: "#030309",
        brightYellow: "#FFA220",
        pineTree: "#2B2828",
        maastrichtBlue: "#0C1A39",
        vividOrange: "#FF5D00",
        spiroDiscoBall: "#2DC3FF",
        navy: "#2C3C60",
        battleship: "#757575",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        hackathoneCabinetGrotesk: ["var(--font-cabinet-grotesk)"],
        hackathoneSFProDisplay: ["var(--font-sf-pro-display)"],
        nokaTrial: ["var(--font-noka-trial)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
};
export default config;
