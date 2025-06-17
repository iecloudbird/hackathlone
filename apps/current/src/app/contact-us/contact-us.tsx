"use client";

import { Canvas } from "@react-three/fiber";
import mentorImage from "@/assets/images/general/contact-us/mentor.svg";
import participantImage from "@/assets/images/general/contact-us/participant.svg";
import sponsorImage from "@/assets/images/general/contact-us/sponsor.svg";
import BackToTopButton from "../general/back-to-top";
import CloudParticleBg from "../general/cloud-particle-bg";
import Footer from "../general/footer";
import NavigationBar from "../general/navigation-bar";
import ContactCard from "./contact-card";

const ContactUs: React.FunctionComponent = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <CloudParticleBg />
        </Canvas>
      </div>
      <div className="relative z-10 py-[12px] sm:py-[24px]">
        <NavigationBar />
        <div className="container mx-auto px-4 pb-24 pt-12 md:pt-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold lg:text-6xl">
              Got{" "}
              <span className="text-hackathone-font-rocket-red">Questions</span>
              ? Let&apos;s Connect.
            </h1>
            <p className="mx-auto mt-10 text-xl md:text-3xl">
              Reach out based on how you&apos;d like to get involved in the
              mission.
            </p>
          </div>
          <div className="mx-auto mt-20 flex flex-col gap-8 lg:flex-row">
            <ContactCard
              title="Want to be a Sponsor?"
              description="Support breakthrough ideas using NASA’s open data and gain visibility in a global innovation movement. Partner with us to power bold solutions for Earth and space."
              href="mailto:spaceappsathlone@gmail.com?subject=Interested%20in%20Sponsoring"
              image={sponsorImage}
            />
            <ContactCard
              title="Want to be a Mentor?"
              description="Share your expertise with future changemakers. Guide teams tackling real-world challenges and expand your impact across a global community."
              href="mailto:spaceappsathlone@gmail.com?subject=Interested%20in%20Mentoring"
              image={mentorImage}
            />
            <ContactCard
              title="Want to be a Participant?"
              description="Join a global hackathon where innovation meets purpose. Collaborate, code, and create solutions using NASA data—on Earth, and beyond."
              href="mailto:spaceappsathlone@gmail.com?subject=Interested%20in%20Participating"
              image={participantImage}
            />
          </div>
        </div>
        <BackToTopButton />
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
