import Image from "next/image";
import Earth from "@/assets/images/general/landing-page/earth.png";
import { Footer } from "@/components/common/shared/footer";

import { NavbarDemo } from "@/components/common/shared/Navbar/Navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";

import { TimelineDemo } from ".";

const About = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-deepSpace text-white">
      <div className="relative z-10 py-3 sm:py-3 md:py-6 lg:py-6">
        <NavbarDemo />
        <div className="absolute right-0 top-60 hidden w-full -translate-y-20 translate-x-1/2 lg:block">
          <Image src={Earth} alt="Earth Image" />
        </div>

        <div className="mx-4 mt-4 sm:mx-4 md:mx-8 lg:mx-4">
          <ShootingStars />
          <div className="min-h-screen">
            <TimelineDemo />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
