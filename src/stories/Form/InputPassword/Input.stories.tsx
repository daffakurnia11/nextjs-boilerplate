import FormGroup from "@/components/Input/FormGroup";
import InputPassword from "../../../components/Input/InputPassword";
import { Meta, StoryObj } from "@storybook/react";
import { AiOutlineKey, AiOutlineLock, AiOutlineUser } from "react-icons/ai";

const meta: Meta<typeof InputPassword> = {
  title: "Form/Input Password",
  component: InputPassword,
};

export default meta;
type Story = StoryObj<typeof InputPassword>;

export const Example: Story = {
  args: {
    name: "password",
    size: "base",
    label: "Password",
    placeholder: "Password",
    required: true,
    disabled: false,
    readonly: false,
    showCount: true,
    maxLength: 20,
    tabIndex: 1,
    prefix: <AiOutlineKey size={20} />,
    suffix: <AiOutlineLock size={20} />,
    helperText: "Helper text",
    className: "",
    style: {},
  },
  render: (args) => (
    <FormGroup
      initialValues={{ email: "" }}
      onSubmit={() => {}}
      className="w-80"
    >
      <InputPassword {...args} />
    </FormGroup>
  ),
};

export const Basic: Story = {
  args: {
    name: "password",
  },
  render: (args) => (
    <FormGroup
      initialValues={{ password: "" }}
      onSubmit={() => {}}
      className="w-80"
    >
      <InputPassword {...args} />
    </FormGroup>
  ),
};

export const AddingLabel: Story = {
  args: {
    name: "password",
    label: "Password",
  },
  render: (args) => (
    <FormGroup
      initialValues={{ password: "" }}
      onSubmit={() => {}}
      className="w-80"
    >
      <InputPassword {...args} />
    </FormGroup>
  ),
};

export const AddingRequired: Story = {
  args: {
    name: "password",
    label: "Password",
    required: true,
  },
  render: (args) => (
    <FormGroup
      initialValues={{ password: "" }}
      onSubmit={() => {}}
      className="w-80"
    >
      <InputPassword {...args} />
    </FormGroup>
  ),
};

export const AddingPlaceholder: Story = {
  args: {
    name: "password",
    placeholder: "Password",
  },
  render: (args) => (
    <FormGroup
      initialValues={{ password: "" }}
      onSubmit={() => {}}
      className="w-80"
    >
      <InputPassword {...args} />
    </FormGroup>
  ),
};

export const DisabledInput: Story = {
  args: {
    name: "password",
    disabled: true,
  },
  render: (args) => (
    <FormGroup
      initialValues={{ password: "Apple" }}
      onSubmit={() => {}}
      className="w-80"
    >
      <InputPassword {...args} />
    </FormGroup>
  ),
};

export const ReadonlyInput: Story = {
  args: {
    name: "password",
    readonly: true,
  },
  render: (args) => (
    <FormGroup
      initialValues={{ password: "Apple" }}
      onSubmit={() => {}}
      className="w-80"
    >
      <InputPassword {...args} />
    </FormGroup>
  ),
};

export const AddingShowCount: Story = {
  args: {
    name: "password",
    showCount: true,
    maxLength: 20,
  },
  render: (args) => (
    <FormGroup
      initialValues={{ password: "" }}
      onSubmit={() => {}}
      className="w-80"
    >
      <InputPassword {...args} />
    </FormGroup>
  ),
};

export const AddingHelperText: Story = {
  args: {
    name: "password",
    helperText: "Helper Text",
  },
  render: (args) => (
    <FormGroup
      initialValues={{ password: "" }}
      onSubmit={() => {}}
      className="w-80"
    >
      <InputPassword {...args} />
    </FormGroup>
  ),
};

export const AddingPrefix: Story = {
  args: {
    name: "password",
    prefix: <AiOutlineKey size={20} />,
  },
  render: (args) => (
    <FormGroup
      initialValues={{ password: "" }}
      onSubmit={() => {}}
      className="w-80"
    >
      <InputPassword {...args} />
    </FormGroup>
  ),
};

export const AddingSuffix: Story = {
  args: {
    name: "password",
    suffix: <AiOutlineKey size={20} />,
  },
  render: (args) => (
    <FormGroup
      initialValues={{ password: "" }}
      onSubmit={() => {}}
      className="w-80"
    >
      <InputPassword {...args} />
    </FormGroup>
  ),
};
