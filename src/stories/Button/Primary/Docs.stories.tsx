import { AiOutlinePlus } from "react-icons/ai";
import Button from "../../../components/Button";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button.Primary> = {
  title: "Button/Primary",
  component: Button.Primary,
};

export default meta;
type Story = StoryObj<typeof Button.Primary>;

export const Example: Story = {
  args: {
    children: "Button",
    size: "lg",
    type: "default",
    iconOnly: false,
    disabled: false,
    fullWidth: false,
    as: "button",
    prefix: <AiOutlinePlus />,
    suffix: <AiOutlinePlus />,
    placement: "center",
    className: "",
    style: {},
  },
};

// Size Variants
export const Large: Story = {
  args: {
    ...Example.args,
    size: "lg",
    prefix: null,
    suffix: null,
  },
};

export const Base: Story = {
  args: {
    ...Example.args,
    size: "base",
    prefix: null,
    suffix: null,
  },
};

export const Small: Story = {
  args: {
    ...Example.args,
    size: "sm",
    prefix: null,
    suffix: null,
  },
};

// Icon Placements
export const WithPrefixIcon: Story = {
  args: {
    ...Example.args,
    children: "Prefix Icon",
    prefix: <AiOutlinePlus />,
    suffix: null,
  },
};

export const WithSuffixIcon: Story = {
  args: {
    ...Example.args,
    children: "Suffix Icon",
    prefix: null,
    suffix: <AiOutlinePlus />,
  },
};

export const WithPrefixAndSuffixIcon: Story = {
  args: {
    ...Example.args,
    children: "Prefix & Suffix Icon",
    prefix: <AiOutlinePlus />,
    suffix: <AiOutlinePlus />,
  },
};

export const IconInCenter: Story = {
  args: {
    ...Example.args,
    children: "Center Icon",
    prefix: <AiOutlinePlus />,
    suffix: <AiOutlinePlus />,
    fullWidth: true,
    placement: "center",
  },
  render: (args) => (
    <div style={{ width: 400 }}>
      <Button.Primary {...args} />
    </div>
  ),
};

export const IconInBetween: Story = {
  args: {
    ...Example.args,
    children: "Between Icon",
    prefix: <AiOutlinePlus />,
    suffix: <AiOutlinePlus />,
    fullWidth: true,
    placement: "between",
  },
  render: (args) => (
    <div style={{ width: 400 }}>
      <Button.Primary {...args} />
    </div>
  ),
};

// Button Variants
export const ButtonDefault: Story = {
  args: {
    ...Example.args,
    children: "Button Default",
    size: "lg",
    type: "default",
    prefix: null,
    suffix: null,
  },
};

export const ButtonOutline: Story = {
  args: {
    ...Example.args,
    children: "Button Outline",
    size: "lg",
    type: "outline",
    prefix: null,
    suffix: null,
  },
};

export const ButtonTextOnly: Story = {
  args: {
    ...Example.args,
    children: "Button Text Only",
    size: "lg",
    type: "text",
    prefix: null,
    suffix: null,
  },
};

// Button Variants
export const IconOnlyDefault: Story = {
  args: {
    ...Example.args,
    children: <AiOutlinePlus />,
    iconOnly: true,
    size: "lg",
    type: "default",
  },
};

export const IconOnlyOutline: Story = {
  args: {
    ...Example.args,
    children: <AiOutlinePlus />,
    iconOnly: true,
    size: "lg",
    type: "outline",
  },
};

export const IconOnlyTextOnly: Story = {
  args: {
    ...Example.args,
    children: <AiOutlinePlus />,
    iconOnly: true,
    size: "lg",
    type: "text",
  },
};
