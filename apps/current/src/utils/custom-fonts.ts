import localFont from "next/font/local";

/*
Font Weight	Numerical Weight
"Thin", "Hairline" 100
"Extra Light", "Ultra Light" 200
"Light", "Book"	300
"Normal", "Regular", "Roman", "Standard", "Plain"	400/Normal
"Medium", "Demi" 500
"Semi Bold", "Semi Bld", "Demi Bold", "Demi Bld"	600
"Bold", "Bld"	700/Bold
"Extra Bold", "Ultra Bold", "Extra Bld", "Ultra Bld" 800
"Black", "Heavy", "Ultra", "Fat", "Poster", "Ultra Black" 900
*/

const SFProDisplay = localFont({
  src: [
    {
      path: "../../public/assets/fonts/sf-pro-display/sf-pro-display-thin.ttf",
      style: "thin",
      weight: "100",
    },
    {
      path: "../../public/assets/fonts/sf-pro-display/sf-pro-display-light.otf",
      style: "light",
      weight: "300",
    },
    {
      path: "../../public/assets/fonts/sf-pro-display/sf-pro-display-regular.otf",
      style: "regular",
      weight: "400",
    },
    {
      path: "../../public/assets/fonts/sf-pro-display/sf-pro-display-semibold.ttf",
      style: "semi bold",
      weight: "600",
    },
    {
      path: "../../public/assets/fonts/sf-pro-display/sf-pro-display-bold.otf",
      style: "bold",
      weight: "700",
    },
  ],
  variable: "--font-sf-pro-display",
});

const CabinetGrotesk = localFont({
  src: [
    {
      path: "../../public/assets/fonts/cabinet-grotesk/cabinet-grotesk-thin.ttf",
      style: "thin",
      weight: "100",
    },
    {
      path: "../../public/assets/fonts/cabinet-grotesk/cabinet-grotesk-extralight.ttf",
      style: "extra light",
      weight: "200",
    },
    {
      path: "../../public/assets/fonts/cabinet-grotesk/cabinet-grotesk-light.ttf",
      style: "light",
      weight: "300",
    },
    {
      path: "../../public/assets/fonts/cabinet-grotesk/cabinet-grotesk-regular.ttf",
      style: "regular",
      weight: "400",
    },
    {
      path: "../../public/assets/fonts/cabinet-grotesk/cabinet-grotesk-medium.ttf",
      style: "medium",
      weight: "500",
    },
    {
      path: "../../public/assets/fonts/cabinet-grotesk/cabinet-grotesk-bold.ttf",
      style: "bold",
      weight: "700",
    },
    {
      path: "../../public/assets/fonts/cabinet-grotesk/cabinet-grotesk-extrabold.ttf",
      style: "extra bold",
      weight: "800",
    },
    {
      path: "../../public/assets/fonts/cabinet-grotesk/cabinet-grotesk-black.ttf",
      style: "black",
      weight: "900",
    },
  ],
  variable: "--font-cabinet-grotesk",
});

const NokaTrial = localFont({
  src: [
    {
      path: "../../public/assets/fonts/NokaTrial/NokaTrial-Hairline.otf",
      style: "thin",
      weight: "100",
    },
    {
      path: "../../public/assets/fonts/NokaTrial/NokaTrial-Light.otf",
      style: "light",
      weight: "300",
    },
    {
      path: "../../public/assets/fonts/NokaTrial/NokaTrial-Medium.otf",
      style: "regular",
      weight: "400",
    },
    {
      path: "../../public/assets/fonts/NokaTrial/NokaTrial-Semibold.otf",
      style: "semi bold",
      weight: "600",
    },
    {
      path: "../../public/assets/fonts/NokaTrial/NokaTrial-Bold.otf",
      style: "bold",
      weight: "700",
    },
    {
      path: "../../public/assets/fonts/NokaTrial/NokaTrial-Black.otf",
      style: "black",
      weight: "900",
    },
  ],
  variable: "--font-noka-trial",
});
export { SFProDisplay, CabinetGrotesk, NokaTrial };
