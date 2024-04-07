import React from "react";
import type { HeadingProps } from "@/types/components/Typography";

/**
 * Props for the Heading component.
 * @param {React.ReactNode} children
 * - The content of the component for the Heading component. - Required
 * @param {1|2|3|4|5|6} [level='1']
 * - The level of the Display component. Can be 1, 2, 3, 4, 5, or 6. Default is 1. - Optional
 * @param {keyof JSX.IntrinsicElements} [as='h1']
 * - The HTML tag to use for the component. Can be h1, h2, h3, h4, h5, or h6. Default is h1. - Optional
 * @param {string} [className='']
 * - The className of the component for adding custom styles from TailwindCSS. - Optional
 * @returns {React.ReactElement} The Heading component with the appropriate HTML tag, styling, and content.
 */
export default function Heading({
  children,
  level = 1,
  as = "h1",
  className = "",
  ...props
}: HeadingProps): React.ReactElement {
  const textSizeLevel = {
    1: "text-5xl",
    2: "text-4xl",
    3: "text-3xl",
    4: "text-2xl",
    5: "text-xl",
    6: "text-lg",
  };
  const textSizeClass = textSizeLevel[level];
  const Component =
    as ||
    (level === 1
      ? "h1"
      : level === 2
        ? "h2"
        : level === 3
          ? "h3"
          : level === 4
            ? "h4"
            : level === 5
              ? "h5"
              : "h6");
  return (
    <Component
      {...props}
      className={`typography-heading ${textSizeClass} ${className}`}
    >
      {children}
    </Component>
  );
}
