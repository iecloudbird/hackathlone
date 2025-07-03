import classNames from "classnames";
import { type FC, type HTMLAttributes } from "react";

interface SectionContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const SectionContainer: FC<SectionContainerProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <section
      className={classNames(
        "mx-auto mt-12 flex w-full flex-col items-center justify-center px-4 text-left lg:text-center",
        "sm:px-6 lg:mt-[10%] lg:px-[5%]",
        className
      )}
      {...rest}
    >
      {children}
    </section>
  );
};
