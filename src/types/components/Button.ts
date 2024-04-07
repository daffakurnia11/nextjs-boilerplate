export interface ButtonProps {
  /**
   * The content of the component for the Button component. - Required
   */
  children: React.ReactNode;
  /**
   * The className of the component for adding custom styles from TailwindCSS. - Optional
   */
  className?: string;
  /**
   * The style of the component for adding custom styles using inline CSS. - Optional
   */
  style?: React.CSSProperties;
  /**
   * The size of the Button component. Can be lg, base or sm. Default is base. - Optional
   */
  size?: "lg" | "base" | "sm";
  /**
   * The type of the Button component. Can be default, outline, or text. Default is default. - Optional
   */
  type?: "default" | "outline" | "text";
  /**
   * Whether the Button component should only contain an icon. Default is false. - Optional
   */
  iconOnly?: boolean;
  /**
   * Whether the Button component should be disabled. Default is false. - Optional
   */
  disabled?: boolean;
  /**
   * Whether the Button component should be full width. Default is false. - Optional
   */
  fullWidth?: boolean;
  /**
   * The HTML tag to use for the component. Can be button, a, or span. Default is button. - Optional
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * The icon to be displayed before the text of the label in the button component. - Optional
   */
  prefix?: React.ReactNode | null;
  /**
   * The icon to be displayed after the text of the label in the button component. - Optional
   */
  suffix?: React.ReactNode | null;
  /**
   * The placement of the icon and text in the button component. Can be center, between, or null. Default is center. - Optional
   */
  placement?: "center" | "between" | null;
  /**
   * The function to be called when the button is clicked. - Optional
   * @returns {void}
   */
  onClick?: () => void;
}

export interface GeneralButtonProps extends ButtonProps {
  variant: "primary" | "secondary" | "tertiary";
}
