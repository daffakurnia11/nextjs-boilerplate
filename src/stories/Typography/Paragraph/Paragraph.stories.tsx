import Paragraph from "../../../components/Typography/Paragraph";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Paragraph> = {
  title: "Component/Typography/Paragraph",
  component: Paragraph,
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Example: Story = {
  args: {
    children: "Paragraph",
    size: "base",
    as: "p",
    className: "",
    style: {},
  },
};
export const Base: Story = {
  args: {
    ...Example.args,
    size: "base",
    children: "Paragraph Base",
  },
};

export const Small: Story = {
  args: {
    ...Example.args,
    size: "sm",
    children: "Paragraph Small",
  },
};
