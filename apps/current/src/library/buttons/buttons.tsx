import {
  motion,
  type VariantLabels,
  type TargetAndTransition,
} from "framer-motion";
import React from "react";

type ButtonProps = {
  whileHover?: VariantLabels | TargetAndTransition;
  whileTap?: VariantLabels | TargetAndTransition;
  type?: "button" | "submit" | "reset";
  title?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  className?: string;
  text?: string;
  children?: React.ReactNode;
  loading?: boolean;
};

const Buttons: React.FC<ButtonProps> = (props): JSX.Element => {
  const {
    whileHover,
    whileTap,
    type,
    title,
    disabled,
    onClick,
    className,
    text,
    children,
    loading,
  } = props;

  return (
    <motion.button
      whileHover={whileHover}
      whileTap={whileTap}
      type={type || "button"}
      title={title}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${className} flex items-center justify-center rounded-3xl`}
    >
      {loading ? (
        <div className="loader"></div>
      ) : (
        <>
          <p className="font-hackathoneSFProDisplay text-lg">{text}</p>
          {children}
        </>
      )}
    </motion.button>
  );
};

export default Buttons;
