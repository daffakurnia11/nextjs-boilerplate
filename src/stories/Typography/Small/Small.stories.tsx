import Small from "../../../components/Typography/Small";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Small> = {
  title: "Typography/Small",
  component: Small,
};

export default meta;
type Story = StoryObj<typeof Small>;

export const Example: Story = {
  args: {
    children: "Text Small",
    size: "base",
    as: "small",
    className: "",
    style: {},
  },
};

export const TextSmall: Story = {
  args: {
    ...Example.args,
    size: "base",
    children: "Text Small",
  },
};

export const TextExtraSmall: Story = {
  args: {
    ...Example.args,
    size: "sm",
    children: "Text Extra Small",
  },
};
