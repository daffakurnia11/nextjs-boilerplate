import FormGroup from "../../components/Input/FormGroup";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Meta, StoryObj } from "@storybook/react";
import * as Yup from "yup";

const meta: Meta<typeof FormGroup> = {
  title: "Form/FormGroup",
  component: FormGroup,
  argTypes: {
    initialValues: {
      description:
        "The initial values of the form fields to be used in the form.",
      table: {
        type: { summary: "Object" },
      },
    },
    validationSchema: {
      description:
        "The validation schema of the form fields using Yup for form validation.",
      table: {
        type: { summary: "Object" },
      },
    },
    onSubmit: {
      description: "The function to be called when the form is submitted.",
      table: {
        type: { summary: "void" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormGroup>;

export const Example: Story = {
  args: {
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
    }),
    onSubmit: () => {},
  },
  render: (args) => (
    <FormGroup {...args} className="w-80">
      <Input.Text name="email" label="Email" placeholder="Enter your email" />
      <Input.Password
        name="password"
        label="Password"
        placeholder="Enter your password"
      />
      <Button.Primary buttonType="submit" fullWidth>
        Submit
      </Button.Primary>
    </FormGroup>
  ),
};
