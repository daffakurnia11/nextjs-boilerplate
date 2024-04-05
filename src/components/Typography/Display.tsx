import React from "react";
import type { DisplayProps } from "@/types/components/Typography";

/**
 * Props for the Display component.
 * @param {React.ReactNode} children
 * - The content of the component for the Display component. - Required
 * @param {lg|base|sm} [size='base']
 * - The level of the Display component. Can be lg, base, or sm. Default is base. - Optional
 * @param {keyof JSX.IntrinsicElements} [as='h1']
 * - The HTML tag to use for the component. Can be h1, h2, h3, h4, h5, or h6. - Optional
 * @param {string} [className='']
 * - The className of the component for adding custom styles from TailwindCSS. - Optional
 * @returns {React.ReactElement} The Display component with the appropriate HTML tag, styling, and content.
 */
export default function Display({
  size,
  as,
  children,
  className = "",
  ...props
}: DisplayProps): React.ReactElement {
  const textSizeLevel = {
    lg: "text-8xl",
    base: "text-7xl",
    sm: "text-6xl",
  };
  const textSizeClass = textSizeLevel[size ?? "base"];
  const Component = as || (size === "lg" ? "h1" : size === "sm" ? "h3" : "h2");
  return (
    <Component
      {...props}
      className={`typography-display ${textSizeClass} ${className}`}
    >
      {children}
    </Component>
  );
}
