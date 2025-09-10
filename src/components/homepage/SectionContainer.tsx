import classNames from "classnames";
import { type FC, type HTMLAttributes } from "react";

interface SectionContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  marginTop?: string;
}

export const SectionContainer: FC<SectionContainerProps> = ({
  children,
  className,
  marginTop = "lg:mt-[10%]",
  ...rest
}) => {
  return (
    <section
      className={classNames(
        "mx-auto mt-12 flex w-full flex-col items-center justify-center px-4 text-left lg:text-center",
        "sm:px-6 lg:px-[5%]",
        marginTop,
        className
      )}
      {...rest}
    >
      {children}
    </section>
  );
};
