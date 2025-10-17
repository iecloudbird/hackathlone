/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
/* eslint-disable import/no-unresolved */
"use client";
import DownloadIcon from "@mui/icons-material/Download";
import { motion } from "framer-motion";
import Image from "next/image";
import ShannonRiverImage from "@/assets/images/general/landing-page/Shannon_River_basin.png";
import { ShootingStars } from "@/components/ui/shooting-stars";

export default function RiverShannon() {
  const handleDownload = (fileName: string) => {
    const link = document.createElement("a");
    link.href = fileName;
    link.download = fileName.split("/").pop() || "download";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen bg-deepSpace text-white">
      <ShootingStars />
      <div className="relative z-10 py-3 sm:py-3 md:py-6 lg:py-6">
        {/* Main Content - Removed nested padding */}
        <div className="mx-auto mt-20 w-full px-4 pb-20 sm:px-6 md:px-8 lg:px-20">
          <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <div className="overflow-hidden rounded-3xl border border-gray-700 bg-gradient-to-br from-purple-900/20 via-black/40 to-black/40 p-4 backdrop-blur-xl">
                <Image
                  src={ShannonRiverImage}
                  alt="Shannon River Basin"
                  className="h-auto w-full rounded-2xl object-cover"
                />
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex w-full flex-col gap-6 md:w-1/2"
            >
              <motion.h1
                className="font-nokaTrial text-3xl font-bold leading-tight text-white md:text-5xl"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                The <span className="text-[#FFA220]">Shannon River Basin</span>{" "}
                Side Quest
              </motion.h1>

              <motion.p
                className="font-hackathoneCabinetGrotesk text-base leading-relaxed text-gray-300 md:text-lg"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                The Shannon Studio is a collaborative hub for experimenting with
                solutions to societal challenges, leveraging space enabled
                technologies and research across disciplines.
              </motion.p>

              <motion.div
                className="inline-flex w-fit items-center justify-center rounded-lg border border-[#FFA220] bg-[#FFA220]/10 px-6 py-3 font-hackathoneCabinetGrotesk text-sm font-medium text-[#FFA220] backdrop-blur-sm md:text-base"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Submit a qualitative challenge and win 250€ prize!
              </motion.div>

              <motion.button
                onClick={() =>
                  handleDownload(
                    "/downloads/one-pager-shannon-challenge-bank.pdf"
                  )
                }
                className="mt-4 flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-hackathoneCabinetGrotesk font-semibold text-black transition-all hover:scale-105 hover:bg-gray-100"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <DownloadIcon className="size-5" />
                Download PDF
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
