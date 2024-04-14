import FormGroup from "@/components/Input/FormGroup";
import InputText from "../../../components/Input/InputText";
import { Meta, StoryObj } from "@storybook/react";
import { AiOutlineUser } from "react-icons/ai";

const meta: Meta<typeof InputText> = {
  title: "Form/Input Text",
  component: InputText,
};

export default meta;
type Story = StoryObj<typeof InputText>;

export const Example: Story = {
  args: {
    name: "email",
    size: "base",
    type: "text",
    label: "Label",
    placeholder: "Placeholder",
    required: true,
    disabled: false,
    readonly: false,
    showCount: true,
    maxLength: 20,
    tabIndex: 1,
    prefix: <AiOutlineUser size={20} />,
    suffix: <AiOutlineUser size={20} />,
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
      <InputText {...args} />
    </FormGroup>
  ),
};

export const Basic: Story = {
  args: {
    name: "name",
    type: "text",
  },
  render: (args) => (
    <FormGroup
      initialValues={{ name: "" }}
      onSubmit={() => {}}
      className="w-80"
    >
      <InputText {...args} />
    </FormGroup>
  ),
};

export const AddingLabel: Story = {
  args: {
    name: "name",
    type: "text",
    label: "Label",
  },
  render: (args) => (
    <FormGroup
      initialValues={{ name: "" }}
      onSubmit={() => {}}
      className="w-80"
    >
      <InputText {...args} />
    </FormGroup>
  ),
};

export const AddingRequired: Story = {
  args: {
    name: "name",
    type: "text",
    label: "Label",
    required: true,
  },
  render: (args) => (
    <FormGroup
      initialValues={{ name: "" }}
      onSubmit={() => {}}
      className="w-80"
    >
      <InputText {...args} />
    </FormGroup>
  ),
};

export const AddingPlaceholder: Story = {
  args: {
    name: "name",
    type: "text",
    placeholder: "Placeholder",
  },
  render: (args) => (
    <FormGroup
      initialValues={{ name: "" }}
      onSubmit={() => {}}
      className="w-80"
    >
      <InputText {...args} />
    </FormGroup>
  ),
};

export const DisabledInput: Story = {
  args: {
    name: "name",
    type: "text",
    disabled: true,
  },
  render: (args) => (
    <FormGroup
      initialValues={{ name: "Apple" }}
      onSubmit={() => {}}
      className="w-80"
    >
      <InputText {...args} />
    </FormGroup>
  ),
};

export const ReadonlyInput: Story = {
  args: {
    name: "name",
    type: "text",
    readonly: true,
  },
  render: (args) => (
    <FormGroup
      initialValues={{ name: "Apple" }}
      onSubmit={() => {}}
      className="w-80"
    >
      <InputText {...args} />
    </FormGroup>
  ),
};

export const AddingShowCount: Story = {
  args: {
    name: "name",
    type: "text",
    showCount: true,
    maxLength: 20,
  },
  render: (args) => (
    <FormGroup
      initialValues={{ name: "" }}
      onSubmit={() => {}}
      className="w-80"
    >
      <InputText {...args} />
    </FormGroup>
  ),
};

export const AddingHelperText: Story = {
  args: {
    name: "name",
    type: "text",
    helperText: "Helper Text",
  },
  render: (args) => (
    <FormGroup
      initialValues={{ name: "" }}
      onSubmit={() => {}}
      className="w-80"
    >
      <InputText {...args} />
    </FormGroup>
  ),
};

export const AddingPrefix: Story = {
  args: {
    name: "name",
    type: "text",
    prefix: <AiOutlineUser size={20} />,
  },
  render: (args) => (
    <FormGroup
      initialValues={{ name: "" }}
      onSubmit={() => {}}
      className="w-80"
    >
      <InputText {...args} />
    </FormGroup>
  ),
};

export const AddingSuffix: Story = {
  args: {
    name: "name",
    type: "text",
    suffix: <AiOutlineUser size={20} />,
  },
  render: (args) => (
    <FormGroup
      initialValues={{ name: "" }}
      onSubmit={() => {}}
      className="w-80"
    >
      <InputText {...args} />
    </FormGroup>
  ),
};
