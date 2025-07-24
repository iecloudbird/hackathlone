import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface HoverEffectProps {
  items: {
    title: string;
    description: string;
    link: string;
    imageSrc: StaticImageData;
  }[];
  className?: string;
}

export const HoverEffect = ({ items, className }: HoverEffectProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 py-10 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: idx * 0.3 + 0.5,
            ease: [0.21, 1.11, 0.81, 0.99],
          }}
        >
          <a
            href={item.link}
            className="group relative block h-full w-full p-2"
          >
            <Card>
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="transform object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                  priority
                />
              </div>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <div className="mt-4">
                <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-white underline decoration-white/50 underline-offset-4 hover:decoration-white">
                  Read more
                </span>
              </div>
            </Card>
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border-2 border-transparent bg-black p-1 shadow-[0_4px_8px_-1px_rgba(255,255,255,0.1)] group-hover:border-slate-700 dark:border-white/[0.2]",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-[14px]">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("mt-4 font-bold tracking-wide text-zinc-100", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  // Convert children to string and trim to 200 characters
  const text =
    typeof children === "string"
      ? children.length > 200
        ? children.slice(0, 200) + "..."
        : children
      : children;

  return (
    <p
      className={cn(
        "mt-8 text-justify text-sm leading-relaxed text-zinc-400",
        className
      )}
    >
      {text}
    </p>
  );
};
