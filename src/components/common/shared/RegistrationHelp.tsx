/* eslint-disable tailwindcss/no-custom-classname */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle } from "lucide-react";
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
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-orange-400 opacity-40 blur-xl"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              animate={{
                width: hovered ? 240 : 56, // <- smooth expand/shrink
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="overflow-hidden"
            >
              <Button
                size="lg"
                className="relative w-full overflow-hidden rounded-full bg-orange-500 px-6 py-4 shadow-xl hover:bg-orange-600"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <div className="flex items-center justify-center text-white">
                  <AnimatePresence mode="wait">
                    {hovered ? (
                      <motion.span
                        key="text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 0.25,
                          delay: 0.15, // wait till button stretches
                        }}
                        className="whitespace-nowrap"
                      >
                        Need Help Registering?
                      </motion.span>
                    ) : (
                      <motion.span
                        key="icon"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <HelpCircle className="size-6" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </Button>
            </motion.div>
          </motion.div>
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
