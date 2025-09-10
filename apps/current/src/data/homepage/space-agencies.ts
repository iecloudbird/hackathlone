import { type StaticImageData } from "next/image";
import Aeb from "@/assets/images/general/landing-page/space-agencies/aeb.png";
import AEE from "@/assets/images/general/landing-page/space-agencies/AEE.png";
import Aem from "@/assets/images/general/landing-page/space-agencies/aem.png";
import Aep_O from "@/assets/images/general/landing-page/space-agencies/aep.png";
import Asi from "@/assets/images/general/landing-page/space-agencies/asi.png";
import Bahrain from "@/assets/images/general/landing-page/space-agencies/BSA.png";
import Canada from "@/assets/images/general/landing-page/space-agencies/canada.png";
import Conae from "@/assets/images/general/landing-page/space-agencies/conae.png";
import Eesa from "@/assets/images/general/landing-page/space-agencies/eesa.png";
import Isro from "@/assets/images/general/landing-page/space-agencies/isro.png";
import Jaxa from "@/assets/images/general/landing-page/space-agencies/jaxa.png";
import MBRSC from "@/assets/images/general/landing-page/space-agencies/MBRSC.png";
import Sansa from "@/assets/images/general/landing-page/space-agencies/sansa.png";
import UKSA from "@/assets/images/general/landing-page/space-agencies/UKSA.png";

export interface SpaceAgency {
  id: string;
  name: string;
  logo: StaticImageData;
  url: string;
}

export interface SpaceAgenciesSectionData {
  title: string;
  subtitle: string;
  agencies: SpaceAgency[];
}

export const spaceAgenciesData: SpaceAgenciesSectionData = {
  title: "Global Space Agency Partners",
  subtitle:
    "This isn't just a NASA event anymore. Space agencies from around the world contribute challenges and datasets",
  agencies: [
    {
      id: "asi",
      name: "Italian Space Agency",
      logo: Asi,
      url: "https://www.asi.it/en/",
    },
    {
      id: "aem",
      name: "Mexican Space Agency",
      logo: Aem,
      url: "https://www.iafastro.org/membership/all-members/agencia-espacial-mexicana-aem.html",
    },
    {
      id: "aep",
      name: "Paraguayan Space Agency",
      logo: Aep_O,
      url: "https://aep.gov.py/",
    },
    {
      id: "canada",
      name: "Canadian Space Agency",
      logo: Canada,
      url: "https://www.asc-csa.gc.ca/eng/",
    },
    {
      id: "aeb",
      name: "Brazilian Space Agency",
      logo: Aeb,
      url: "https://www.iafastro.org/membership/all-members/brazilian-space-agency-aeb.html",
    },
    {
      id: "conae",
      name: "Argentine Space Agency",
      logo: Conae,
      url: "https://www.argentina.gob.ar/ciencia/conae",
    },
    {
      id: "esa",
      name: "European Space Agency",
      logo: Eesa,
      url: "https://www.esa.int/",
    },
    {
      id: "isro",
      name: "Indian Space Research Organisation",
      logo: Isro,
      url: "https://www.isro.gov.in/",
    },
    {
      id: "jaxa",
      name: "Japan Aerospace Exploration Agency",
      logo: Jaxa,
      url: "https://global.jaxa.jp/",
    },
    {
      id: "sansa",
      name: "South African National Space Agency",
      logo: Sansa,
      url: "https://www.sansa.org.za/",
    },
    {
      id: "bahrain",
      name: "Bahrain Space Agency",
      logo: Bahrain,
      url: "https://bsa.gov.bh/",
    },
    {
      id: "aee",
      name: "Spanish Space Agency",
      logo: AEE,
      url: "https://www.aee.gob.es/",
    },
    {
      id: "mbrsc",
      name: "Mohammed Bin Rashid Space Centre",
      logo: MBRSC,
      url: "http://www.mbrsc.ae/",
    },
    {
      id: "uksa",
      name: "UK Space Agency",
      logo: UKSA,
      url: "https://www.gov.uk/government/organisations/uk-space-agency",
    },
  ],
};
