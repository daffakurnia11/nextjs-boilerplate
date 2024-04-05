import Paragraph from "../../../components/Typography/Paragraph";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Paragraph> = {
  title: "Typography/Paragraph",
  component: Paragraph,
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Base: Story = {
  args: {
    size: "base",
    as: "p",
    children: "Paragraph Base",
    className: "",
    style: {},
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    as: "p",
    children: "Paragraph Small",
    className: "",
    style: {},
  },
};
