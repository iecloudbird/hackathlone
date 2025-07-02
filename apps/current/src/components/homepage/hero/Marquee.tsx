// components/Marquee.tsx
"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface MarqueeProps {
  text?: string;
  speed?: number;
}

export const Marquee: React.FC<MarqueeProps> = ({
  text = "4th - 6th October 2025",
  speed = 50,
}) => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  const items = Array(10).fill({ text });

  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: (1440 / speed) * 2,
          ease: "linear",
        },
      },
    },
    static: {
      x: "0%",
      transition: { duration: 0 },
    },
  };

  useEffect(() => {
    if (isInteracting) {
      controls.start("animate");
    } else {
      controls.start("static");
    }
  }, [isInteracting, controls]);

  useEffect(() => {
    const node = containerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInteracting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex h-[78.2px] w-[1440px] flex-row items-center overflow-hidden p-[1.87175px] [gap:23.21px]"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
    >
      <motion.div
        className="flex flex-row [gap:23.21px]"
        variants={marqueeVariants}
        animate={controls}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="[order:${index}] flex h-[34px] w-[269.46px] flex-row items-center [flex-grow:0] [flex:none] [gap:23.21px]"
          >
            <span className="h-[34px] w-[237px] text-center font-['Noka_Trial'] text-[24px] font-extrabold leading-[34px] tracking-[-0.546608px] text-[#2C3C60] [flex:none] [grow:0] [order:0]">
              {item.text}
            </span>
            <div className="size-[9.25px] rounded-full bg-[#2C3C60] [flex:none] [grow:0] [order:1]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
