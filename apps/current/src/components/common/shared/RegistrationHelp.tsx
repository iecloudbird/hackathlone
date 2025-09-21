/* eslint-disable tailwindcss/no-custom-classname */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function RegistrationHelp() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {/* simplified / plain RedirectButton-like styling moved here */}
          <Button
            size="lg"
            className="relative w-full overflow-hidden rounded-lg bg-white px-8 py-2.5 text-sm font-bold text-black transition-colors duration-300 hover:bg-white/85"
          >
            <div className="flex items-center justify-center text-black">
              Need Help?
            </div>
          </Button>
        </DialogTrigger>

        <DialogContent className="max-w-3xl border-none bg-black/30 backdrop-blur-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <DialogHeader className="mb-4">
              <DialogTitle className="font-hackathloneCabinetGrotesk text-2xl font-bold text-white">
                How to Register
              </DialogTitle>
            </DialogHeader>
            <div className="flex justify-center">
              <Image
                src="/assets/images/general/landing-page/register.gif"
                alt="Registration walkthrough"
                width={800} // Add appropriate width
                height={600} // Add appropriate height
                className="max-h-[70vh] rounded-lg border object-contain shadow-md"
              />
            </div>
            <div className="mt-4 text-center font-hackathoneCabinetGrotesk text-sm text-gray-600">
              Follow these steps to complete your registration for HackAthlone
              2025
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
