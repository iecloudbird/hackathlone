export interface HeroSectionData {
  title: string;
  subtitle: string;
  subtitle2: string;
  registerButtonText: string;
  registerButtonHref: string;
  backgroundImage: string;
}

export const heroData: HeroSectionData = {
  title: "Welcome to Hack{Athlone}",
  subtitle:
    "This October, join the world’s largest space hackathon in Ireland and tackle real NASA challenges using their data.",
  subtitle2:
    "We're one of 450+ locations worldwide, but the only one in Ireland offering the full 48-hour overnight experience.",
  registerButtonText: "Register now",
  registerButtonHref:
    "https://www.spaceappschallenge.org/2025/local-events/athlone/",
  backgroundImage: "/assets/images/horizon.png",
};
