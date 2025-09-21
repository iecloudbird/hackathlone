import classNames from "classnames";
import { motion } from "framer-motion";
import { type FC, useState } from "react";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary"; //TODO
  text?: string;
}

export const RedirectButton: FC<Props> = ({
  href,
  text,
  children,
  className,
  variant = "primary",
  ...rest
}) => {
  const [hovered, setHovered] = useState(false);

  // original simple redirect styles moved to variantStyles for possible reuse
  // const simpleButtonBase = "block cursor-pointer rounded-lg bg-white px-8 py-2.5 text-sm font-bold text-black hover:bg-white/85 transition-colors duration-300";

  // the "glowy" styles taken from RegistrationHelp Button
  const glowyButtonBase =
    "relative w-full overflow-hidden rounded-lg bg-orange-500 p-[8px] shadow-xl hover:bg-orange-600 text-white flex items-center justify-center";

  const variantStyles: Record<string, string> = {
    primary: "", // kept for API compatibility
    secondary: "w-full", //TODO
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
          width: hovered ? 140 : 140,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="overflow-hidden"
      >
        <a
          href={href}
          className={classNames(
            // use the glowy/orange look for this button now
            glowyButtonBase,
            variantStyles[variant],
            className
          )}
          target={href?.startsWith("http") ? "_blank" : undefined}
          rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
          {...rest}
        >
          <div className="flex items-center justify-center text-white">
            {/* keep content behavior same: show provided text or children */}
            {text || children}
          </div>
        </a>
      </motion.div>
    </motion.div>
  );
};
