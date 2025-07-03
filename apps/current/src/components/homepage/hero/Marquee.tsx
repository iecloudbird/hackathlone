import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState, type FC } from "react";

interface MarqueeProps {
  text?: string;
  speed?: number;
}

export const Marquee: FC<MarqueeProps> = ({
  text = "4th - 6th October 2025",
  speed = 250,
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
      className="flex w-full flex-row items-center gap-4 overflow-hidden"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
    >
      <motion.div
        className="flex flex-row gap-4"
        variants={marqueeVariants}
        animate={controls}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-none grow-0 flex-row items-center gap-4"
          >
            <span className="flex-none grow-0 text-center font-nokaTrial text-[20px] font-extrabold leading-[34px] tracking-[-0.546608px] text-navy">
              {" "}
              {item.text}
            </span>
            {/* Placeholder for the dot */}
            <div className="order-1 size-[9.25px] flex-none grow-0 rounded-full bg-navy" />{" "}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
