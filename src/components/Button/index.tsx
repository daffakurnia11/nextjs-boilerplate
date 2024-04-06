import Primary from "./Primary";

const Button = {
  /**
   * Props for the Button Primary component.
   * @param {React.ReactNode} children
   * - The content of the component for the Button component. - Required
   * @param {base|sm} [size='base']
   * - The size of the Button component. Can be lg, base or sm. Default is base. - Optional
   * @param {default|outline|text} [type='default']
   * - The type of the Button component. Can be default, outline, or text. Default is default. - Optional
   * @param {boolean} [iconOnly=false]
   * - Whether the Button component should only contain an icon. Default is false. - Optional
   * @param {boolean} [disabled=false]
   * - Whether the Button component should be disabled. Default is false. - Optional
   * @param {boolean} [fullWidth=false]
   * - Whether the Button component should be full width. Default is false. - Optional
   * @param {keyof JSX.IntrinsicElements} [as='button']
   * - The HTML tag to use for the component. Can be button, a, or span. Default is button. - Optional
   * @param {React.ReactNode} [prefix]
   * - The icon to be displayed before the text of the label in the button component. - Optional
   * @param {React.ReactNode} [suffix]
   * - The icon to be displayed after the text of the label in the button component. - Optional
   * @param {center|between} [placement='center']
   * - The placement of the icon and text in the button component. Can be center or between. Default is center. - Optional
   * @param {string} [className='']
   * - The className of the component for adding custom styles from TailwindCSS. - Optional
   * @param {React.CSSProperties} [style={}]
   * - The style of the component for adding custom styles using inline CSS. - Optional
   * @param {void} [onClick]
   * - The function to be called when the button is clicked. - Optional
   * @returns {React.ReactElement} The Button component with the appropriate HTML tag, styling, and content.
   */
  Primary,
};

export default Button;
