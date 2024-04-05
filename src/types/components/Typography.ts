export interface DisplayProps {
  /**
   * The content of the component for the Display component. - Required
   */
  children: React.ReactNode;
  /**
   * The size of the Display component. Can be lg, base, or sm. Default is base. - Optional
   */
  size?: "lg" | "base" | "sm";
  /**
   * The HTML tag to use for the component. Can be h1, h2, h3, h4, h5, or h6. - Optional
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * The className of the component for adding custom styles from TailwindCSS. - Optional
   */
  className?: string;
  /**
   * The style of the component for adding custom styles. - Optional
   */
  style?: React.CSSProperties;
}

export interface HeadingProps {
  /**
   * The content of the component for the Heading component. - Required
   */
  children: React.ReactNode;
  /**
   * The level of the Heading component. Can be 1, 2, 3, 4, 5, or 6. - Required
   */
  level: 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * The HTML tag to use for the component. Can be h1, h2, h3, h4, h5, or h6. - Optional
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * The className of the component for adding custom styles from TailwindCSS. - Optional
   */
  className?: string;
  /**
   * The style of the component for adding custom styles. - Optional
   */
  style?: React.CSSProperties;
}

export interface TextProps {
  /**
   * The content of the component for the Paragraph component. - Required
   */
  children: React.ReactNode;
  /**
   * The size of the Paragraph component. Can be base or sm. - Required
   */
  size?: "base" | "sm";
  /**
   * The HTML tag to use for the component. Can be p, span, or small. - Optional
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * The className of the component for adding custom styles from TailwindCSS. - Optional
   */
  className?: string;
  /**
   * The style of the component for adding custom styles. - Optional
   */
  style?: React.CSSProperties;
}