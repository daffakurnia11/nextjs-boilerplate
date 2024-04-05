import Small from "../../../components/Typography/Small";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Small> = {
  title: "Typography/Small",
  component: Small,
};

export default meta;
type Story = StoryObj<typeof Small>;

export const TextSmall: Story = {
  args: {
    size: "base",
    as: "p",
    children: "Text Small",
    className: "",
    style: {},
  },
};

export const TextExtraSmall: Story = {
  args: {
    size: "sm",
    as: "p",
    children: "Text Extra Small",
    className: "",
    style: {},
  },
};
