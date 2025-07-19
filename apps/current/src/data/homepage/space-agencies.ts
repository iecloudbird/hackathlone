import { type StaticImageData } from "next/image";
import Aeb_O from "@/assets/images/general/landing-page/space-agencies/aeb_round.png";
import Aem_O from "@/assets/images/general/landing-page/space-agencies/aem_round.png";
import Aep_O from "@/assets/images/general/landing-page/space-agencies/aep_round.png";
import Asi_O from "@/assets/images/general/landing-page/space-agencies/asi_round.png";
import Australia_O from "@/assets/images/general/landing-page/space-agencies/australia_round.png";
import Canada_O from "@/assets/images/general/landing-page/space-agencies/canada_round.png";
import Conae_O from "@/assets/images/general/landing-page/space-agencies/conae_round.png";
import Cst_O from "@/assets/images/general/landing-page/space-agencies/cst_round.png";
import Eesa_O from "@/assets/images/general/landing-page/space-agencies/eesa_round.png";
import Isro_O from "@/assets/images/general/landing-page/space-agencies/isro_round.png";
import Jaxa_O from "@/assets/images/general/landing-page/space-agencies/jaxa_round.png";
import Nssa_O from "@/assets/images/general/landing-page/space-agencies/nssa_round.png";
import Sansa_O from "@/assets/images/general/landing-page/space-agencies/sansa_round.png";
import Ssa_O from "@/assets/images/general/landing-page/space-agencies/spanish.jpg";
import Turkey_O from "@/assets/images/general/landing-page/space-agencies/turkish_round.png";

export interface SpaceAgency {
  id: string;
  name: string;
  logo: StaticImageData;
  url: string;
}

export interface SpaceAgenciesSectionData {
  title: string;
  agencies: SpaceAgency[];
}

export const spaceAgenciesData: SpaceAgenciesSectionData = {
  title: "Space Agencies World Wide",
  agencies: [
    {
      id: "asi",
      name: "Italian Space Agency",
      logo: Asi_O,
      url: "https://www.asi.it/en/",
    },
    {
      id: "aem",
      name: "Mexican Space Agency",
      logo: Aem_O,
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
      logo: Australia_O,
      url: "https://www.industry.gov.au/australian-space-agency",
    },
    {
      id: "canada",
      name: "Canadian Space Agency",
      logo: Canada_O,
      url: "https://www.asc-csa.gc.ca/eng/",
    },
    {
      id: "aeb",
      name: "Brazilian Space Agency",
      logo: Aeb_O,
      url: "https://www.iafastro.org/membership/all-members/brazilian-space-agency-aeb.html",
    },
    {
      id: "conae",
      name: "Argentine Space Agency",
      logo: Conae_O,
      url: "https://www.argentina.gob.ar/ciencia/conae",
    },
    {
      id: "esa",
      name: "European Space Agency",
      logo: Eesa_O,
      url: "https://www.esa.int/",
    },
    {
      id: "isro",
      name: "Indian Space Research Organisation",
      logo: Isro_O,
      url: "https://www.isro.gov.in/",
    },
    {
      id: "jaxa",
      name: "Japan Aerospace Exploration Agency",
      logo: Jaxa_O,
      url: "https://global.jaxa.jp/",
    },
    {
      id: "nssa",
      name: "National Space Science Agency",
      logo: Nssa_O,
      url: "https://www.iafastro.org/membership/all-members/national-space-science-agency-nssa.html",
    },
    {
      id: "sansa",
      name: "South African National Space Agency",
      logo: Sansa_O,
      url: "https://www.sansa.org.za/",
    },
    {
      id: "turkey",
      name: "Turkish Space Agency",
      logo: Turkey_O,
      url: "https://tua.gov.tr/en",
    },
    {
      id: "cst",
      name: "Saudi Space Agency",
      logo: Cst_O,
      url: "https://www.cst.gov.sa",
    },
    {
      id: "ssa",
      name: "Spanish Space Agency",
      logo: Ssa_O,
      url: "https://www.aee.gob.es/",
    },
  ],
};
