import { type StaticImageData } from "next/image";
import Aeb from "@/assets/images/general/landing-page/space-agencies/aeb.png";
import Aem from "@/assets/images/general/landing-page/space-agencies/aem.png";
import Aep_O from "@/assets/images/general/landing-page/space-agencies/aep.png";
import Asi from "@/assets/images/general/landing-page/space-agencies/asi.png";
import Australia from "@/assets/images/general/landing-page/space-agencies/australia.png";
import Canada from "@/assets/images/general/landing-page/space-agencies/canada.png";
import Conae from "@/assets/images/general/landing-page/space-agencies/conae.png";
import Cst from "@/assets/images/general/landing-page/space-agencies/cst_round.png";
import Eesa from "@/assets/images/general/landing-page/space-agencies/eesa.png";
import Isro from "@/assets/images/general/landing-page/space-agencies/isro.png";
import Jaxa from "@/assets/images/general/landing-page/space-agencies/jaxa.png";
import Nssa from "@/assets/images/general/landing-page/space-agencies/nssa.png";
import Sansa from "@/assets/images/general/landing-page/space-agencies/sansa.png";
import Ssa from "@/assets/images/general/landing-page/space-agencies/spanish.png";
import Turkey from "@/assets/images/general/landing-page/space-agencies/tsa.png";

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
      id: "australia",
      name: "Australian Space Agency",
      logo: Australia,
      url: "https://www.industry.gov.au/australian-space-agency",
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
      id: "nssa",
      name: "National Space Science Agency",
      logo: Nssa,
      url: "https://www.iafastro.org/membership/all-members/national-space-science-agency-nssa.html",
    },
    {
      id: "sansa",
      name: "South African National Space Agency",
      logo: Sansa,
      url: "https://www.sansa.org.za/",
    },
    {
      id: "turkey",
      name: "Turkish Space Agency",
      logo: Turkey,
      url: "https://tua.gov.tr/en",
    },
    {
      id: "cst",
      name: "Saudi Space Agency",
      logo: Cst,
      url: "https://www.cst.gov.sa",
    },
    {
      id: "ssa",
      name: "Spanish Space Agency",
      logo: Ssa,
      url: "https://www.aee.gob.es/",
    },
  ],
};
