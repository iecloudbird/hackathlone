import classNames from "classnames";
import { type FC } from "react";

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
  const buttonTransition =
    "hover:bg-spiroDiscoBall/90 transition-colors duration-300";

  const variantStyles = {
    primary: "",
    secondary: "w-full", //TODO
  };

  return (
    <a
      href={href}
      className={classNames(
        "block cursor-pointer rounded-lg bg-spiroDiscoBall px-8 py-3 text-sm font-bold text-black",
        buttonTransition,
        variantStyles[variant],
        className
      )}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...rest}
    >
      {text || children}
    </a>
  );
};
