import Display from "./Display";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Small from "./Small";

const Typography = {
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
  Display,

  /**
   * Props for the Heading component.
   * @param {React.ReactNode} children
   * - The content of the component for the Heading component. - Required
   * @param {1|2|3|4|5|6} [level='1']
   * - The level of the Display component. Can be 1, 2, 3, 4, 5, or 6. - Required
   * @param {keyof JSX.IntrinsicElements} [as='h1']
   * - The HTML tag to use for the component. Can be h1, h2, h3, h4, h5, or h6. - Optional
   * @param {string} [className='']
   * - The className of the component for adding custom styles from TailwindCSS. - Optional
   * @returns {React.ReactElement} The Heading component with the appropriate HTML tag, styling, and content.
   */
  Heading,

  /**
   * Props for the Paragraph component.
   * @param {React.ReactNode} children
   * - The content of the component for the Paragraph component. - Required
   * @param {base|sm} [size='base']
   * - The level of the Display component. Can be base or sm. Default is base - Optional
   * @param {keyof JSX.IntrinsicElements} [as='p']
   * - The HTML tag to use for the component. Can be p, span, or small. - Optional
   * @param {string} [className='']
   * - The className of the component for adding custom styles from TailwindCSS. - Optional
   * @returns {React.ReactElement} The Paragraph component with the appropriate HTML tag, styling, and content.
   */
  Paragraph,

  /**
   * Props for the Small component.
   * @param {React.ReactNode} children
   * - The content of the component for the Small component. - Required
   * @param {base|sm} [size='base']
   * - The level of the Display component. Can be base or sm. Default is base - Optional
   * @param {keyof JSX.IntrinsicElements} [as='small']
   * - The HTML tag to use for the component. Can be p, span, or small. - Optional
   * @param {string} [className='']
   * - The className of the component for adding custom styles from TailwindCSS. - Optional
   * @returns {React.ReactElement} The Small component with the appropriate HTML tag, styling, and content.
   */
  Small,
};

export default Typography;
