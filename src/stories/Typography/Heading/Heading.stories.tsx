import Heading from "../../../components/Typography/Heading";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Heading> = {
  title: "Component/Typography/Heading",
  component: Heading,
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Heading1: Story = {
  args: {
    level: 1,
    as: "h1",
    children: "Heading 1",
    className: "",
    style: {},
  },
};

export const Heading2: Story = {
  args: {
    level: 2,
    as: "h2",
    children: "Heading 2",
    className: "",
    style: {},
  },
};

export const Heading3: Story = {
  args: {
    level: 3,
    as: "h3",
    children: "Heading 3",
    className: "",
    style: {},
  },
};

export const Heading4: Story = {
  args: {
    level: 4,
    as: "h4",
    children: "Heading 4",
    className: "",
    style: {},
  },
};

export const Heading5: Story = {
  args: {
    level: 5,
    as: "h5",
    children: "Heading 5",
    className: "",
    style: {},
  },
};

export const Heading6: Story = {
  args: {
    level: 6,
    as: "h6",
    children: "Heading 6",
    className: "",
    style: {},
  },
};