import classNames from "classnames";
import { type FC } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"; //TODO
}

export const RedirectButton: FC<Props> = ({ children, className, ...rest }) => {
  const buttonTransition =
    "hover:bg-spiroDiscoBall/90 transition-colors duration-300";

  return (
    <button
      className={classNames(
        "bg-spiroDiscoBall rounded-lg px-8 py-4 text-sm font-bold text-black",
        buttonTransition,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
