"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle } from "lucide-react";
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

            {/* 🎯 Animate width directly */}
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
                        <HelpCircle className="h-6 w-6" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </Button>
            </motion.div>
          </motion.div>
        </DialogTrigger>

        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>How to Register</DialogTitle>
          </DialogHeader>
          <div className="flex justify-center">
            <img
              src="E:\Onedrive\Desktop\hackathlone\apps\current\public\assets\images\general\landing-page\register.gif"
              alt="Registration walkthrough"
              className="max-h-[70vh] rounded-lg border object-contain shadow-md"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
