import React from "react";
import type { TextProps } from "@/types/components/Typography";

/**
 * Props for the Paragraph component.
 * @param {React.ReactNode} children
 * - The content of the component for the Paragraph component. - Required
 * @param {base|sm} [size='base']
 * - The level of the Paragraph component. Can be base or sm. Default is base - Optional
 * @param {keyof JSX.IntrinsicElements} [as='p']
 * - The HTML tag to use for the component. Can be p, span, or small. - Optional
 * @param {string} [className='']
 * - The className of the component for adding custom styles from TailwindCSS. - Optional
 * @returns {React.ReactElement} The Paragraph component with the appropriate HTML tag, styling, and content.
 */
export default function Paragraph({
  size,
  as: Component = "p",
  children,
  className = "",
  ...props
}: TextProps): React.ReactElement {
  const textSizeLevel = {
    base: "text-base",
    sm: "text-sm",
  };
  const textSizeClass = textSizeLevel[size ?? "base"];
  return (
    <Component
      {...props}
      className={`typography-text ${textSizeClass} ${className}`}
    >
      {children}
    </Component>
  );
}
