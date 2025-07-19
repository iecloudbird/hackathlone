export interface HeroSectionData {
  title: string;
  subtitle: string;
  registerButtonText: string;
  registerButtonHref: string;
  showRegistrationStatus: boolean;
  backgroundImage: string;
}

export const heroData: HeroSectionData = {
  title: "Welcome to Hack{Athlone}",
  subtitle:
    "Support the next generation of innovators and problem-solvers. Your sponsorship helps us create an unforgettable experience for participants and fosters a community of space enthusiasts.",
  registerButtonText: "Register now",
  registerButtonHref: "https://www.spaceappschallenge.org",
  showRegistrationStatus: true,
  backgroundImage: "/assets/images/horizon.png",
};
