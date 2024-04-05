import Display from "../../../components/Typography/Display";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Display> = {
  title: "Typography/Display",
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

export const Large: Story = {
  args: {
    size: "lg",
    as: "h1",
    children: "Display Large",
    className: "",
    style: {},
  },
};

export const Base: Story = {
  args: {
    size: "base",
    as: "h2",
    children: "Display Base",
    className: "",
    style: {},
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    as: "h3",
    children: "Display Small",
    className: "",
    style: {},
  },
};
