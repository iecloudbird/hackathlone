import { motion } from "framer-motion";
import Link from "next/link";

interface DayNavButtonProps {
  href: string;
  children: React.ReactNode;
}

export const DayNavButton = ({ href, children }: DayNavButtonProps) => {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer rounded-xl border border-white/20 bg-black/50 px-6 py-3 text-center font-nokaTrial text-white backdrop-blur-md transition-colors hover:bg-white/10"
      >
        {children}
      </motion.div>
    </Link>
  );
};
