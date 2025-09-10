export interface FooterLink {
  text: string;
  href: string;
  isExternal?: boolean;
  onClick?: () => void;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  href: string;
  icon: string;
  alt: string;
  ariaLabel: string;
}

export interface FooterData {
  logo: {
    src: string;
    alt: string;
    href: string;
  };
  socialLinks: SocialLink[];
  sections: FooterSection[];
  bottomLinks: FooterLink[];
  copyright: {
    year: number;
    text: string;
  };
}

export const footerData: FooterData = {
  logo: {
    src: "/assets/svgs/hackathlone-logo.svg",
    alt: "HackAthlone Logo",
    href: "/",
  },
  socialLinks: [
    {
      href: "https://twitter.com/hack_athlone?ref_src=twsrc%5Etfw",
      icon: "/assets/images/general/landing-page/x_logo.svg",
      alt: "X Icon",
      ariaLabel: "Follow us on X (formerly Twitter)",
    },
    {
      href: "https://www.instagram.com/spaceappsathlone/",
      icon: "/assets/images/general/landing-page/instagram.png",
      alt: "Instagram Icon",
      ariaLabel: "Follow us on Instagram",
    },
    {
      href: "https://www.linkedin.com/company/spaceapps-hackathlone/",
      icon: "/assets/images/general/landing-page/linkedin.png",
      alt: "LinkedIn Icon",
      ariaLabel: "Connect with us on LinkedIn",
    },
    {
      href: "https://www.tiktok.com/@spaceapps.athlone?_t=ZN-8zRSryywoZa&_r=1",
      icon: "/assets/images/general/landing-page/tiktok.svg",
      alt: "TikTok Icon",
      ariaLabel: "Follow us on TikTok",
    },
    {
      href: "mailto:spaceappsathlone@gmail.com",
      icon: "email", // Special case for SVG email icon
      alt: "Email",
      ariaLabel: "Send us an email",
    },
  ],
  sections: [
    {
      title: "Participation Kit",
      links: [
        {
          text: "Meet Our Team",
          href: "/teams",
          isExternal: false,
        },
        // Uncomment when challenges release
        // {
        //   text: "Challenges",
        //   href: "https://www.spaceappschallenge.org/nasa-space-apps-2025/challenges/",
        //   isExternal: true,
        // },
        {
          text: "How to Register",
          href: "https://www.youtube.com/watch?v=_AL3QrPBugc",
          isExternal: true,
        },
        {
          text: "Choose a Challenge",
          href: "https://www.youtube.com/watch?v=37dqOg2ljMw",
          isExternal: true,
        },
        {
          text: "How to Form Teams",
          href: "https://www.youtube.com/watch?v=37dqOg2ljMw",
          isExternal: true,
        },
        {
          text: "Tips and Tricks",
          href: "https://www.youtube.com/watch?v=_wJP0GLNdf8",
          isExternal: true,
        },
      ],
    },
    {
      title: "Archive",
      links: [
        {
          text: "Glimpse 24",
          href: "https://nasa-spaceapps.vercel.app/",
          isExternal: false,
        },
        {
          text: "Glimpse 23",
          href: "https://66b8783ce930a118fc45939c--voluble-conkies-fba672.netlify.app/",
          isExternal: false,
        },
        {
          text: "UL 21 Opening Ceremony",
          href: "https://www.youtube.com/watch?v=n_KqGdnlOcU",
          isExternal: true,
        },
        {
          text: "UL 21 Mentor Sessions",
          href: "https://www.youtube.com/watch?v=zFdhwgOyqho",
          isExternal: true,
        },
        {
          text: "UL 21 Practice Presentations",
          href: "https://www.youtube.com/watch?v=EjbDhhmpgEk",
          isExternal: true,
        },
        {
          text: "UL 21 Closing Ceremony",
          href: "https://www.youtube.com/watch?v=CFN7ewwBYT0",
          isExternal: true,
        },
      ],
    },
  ],
  bottomLinks: [
    {
      text: "Privacy Policy",
      href: "https://www.nasa.gov/about/highlights/HP_Privacy.html",
      isExternal: true,
    },
    {
      text: "Legal",
      href: "https://www.spaceappschallenge.org/legal/",
      isExternal: true,
    },
    {
      text: "Contact",
      href: "mailto:spaceappsathlone@gmail.com",
      isExternal: true,
    },
    {
      text: "Resources",
      href: "https://www.spaceappschallenge.org/resources/",
      isExternal: true,
    },
  ],
  copyright: {
    year: new Date().getFullYear(),
    text: "HackAthlone",
  },
};
