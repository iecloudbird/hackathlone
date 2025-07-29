import { type ReactNode } from "react";

// helper to format title strings with placeholders
export const formatTitle = (
  titleText: string,
  placeholder: string,
  component: ReactNode
): ReactNode => {
  const parts = titleText.split(placeholder);
  if (parts.length === 2) {
    return (
      <>
        {parts[0]}
        {component}
        {parts[1]}
      </>
    );
  }
  return titleText;
};
