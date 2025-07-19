import { RedirectButton } from "@/components/common/shared/RedirectButton";
import { type HeroSectionData } from "@/data/homepage/hero";
import { formatTitle } from "@/utils/format-title";
import { Athlone } from "../const";
import { SectionContainer } from "../SectionContainer";

interface HeroSectionProps {
  heroData: HeroSectionData;
}

export const HeroSection = ({ heroData }: HeroSectionProps) => {
  const {
    title,
    subtitle,
    registerButtonText,
    registerButtonHref,
    backgroundImage,
  } = heroData;

  return (
    <SectionContainer className="relative h-screen">
      <div
        className="absolute inset-0 -translate-y-12 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />

      <div className="relative flex w-full flex-col items-center gap-4 lg:gap-8">
        <h1 className="font-nokaTrial text-4xl font-bold lg:text-5xl">
          {formatTitle(title, "{Athlone}", Athlone)}
        </h1>
        <p className="font-thin lg:max-w-xl lg:text-xl">{subtitle}</p>
        <div className="flex items-center justify-center gap-6">
          <RedirectButton href={registerButtonHref} text={registerButtonText} />
        </div>
      </div>
    </SectionContainer>
  );
};
