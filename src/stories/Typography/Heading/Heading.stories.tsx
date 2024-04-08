import Heading from "../../../components/Typography/Heading";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Heading> = {
  title: "Typography/Heading",
  component: Heading,
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Example: Story = {
  args: {
    children: "Heading",
    level: 1,
    as: "h1",
    className: "",
    style: {},
  },
};

export const Heading1: Story = {
  args: {
    ...Example.args,
    level: 1,
    as: "h1",
    children: "Heading 1",
  },
};

export const Heading2: Story = {
  args: {
    ...Example.args,
    level: 2,
    as: "h2",
    children: "Heading 2",
  },
};

export const Heading3: Story = {
  args: {
    ...Example.args,
    level: 3,
    as: "h3",
    children: "Heading 3",
  },
};

export const Heading4: Story = {
  args: {
    ...Example.args,
    level: 4,
    as: "h4",
    children: "Heading 4",
  },
};

export const Heading5: Story = {
  args: {
    ...Example.args,
    level: 5,
    as: "h5",
    children: "Heading 5",
  },
};

export const Heading6: Story = {
  args: {
    ...Example.args,
    level: 6,
    as: "h6",
    children: "Heading 6",
  },
};
