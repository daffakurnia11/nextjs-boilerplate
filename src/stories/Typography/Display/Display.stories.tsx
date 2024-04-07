import Display from "../../../components/Typography/Display";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Display> = {
  title: "Component/Typography/Display",
  component: Display,
  argTypes: {
    size: {
      table: {
        defaultValue: { summary: "base" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Display>;

export const Example: Story = {
  args: {
    children: "Display Large",
    size: "lg",
    as: "h1",
    className: "",
    style: {},
  },
};

export const Large: Story = {
  args: {
    ...Example.args,
    size: "lg",
    as: "h1",
    children: "Display Large",
  },
};

export const Base: Story = {
  args: {
    ...Example.args,
    size: "base",
    as: "h2",
    children: "Display Base",
  },
};

export const Small: Story = {
  args: {
    ...Example.args,
    size: "sm",
    as: "h3",
    children: "Display Small",
  },
};
