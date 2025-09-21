"use client";
import { Footer } from "@/components/common/shared/footer";
import { NavbarDemo } from "@/components/common/shared/Navbar/Navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { TimelineDemo } from ".";

const Day1 = () => {
  return (
    <section className="relative min-h-screen bg-deepSpace text-white">
      <div className="relative z-10 py-3 sm:py-3 md:py-6 lg:py-6">
        <NavbarDemo />

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

export default Day1;

// Button code

// tailwind.config.js code
