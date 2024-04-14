"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Typography from "@/components/Typography";
import { Form, Formik } from "formik";
import {
  AiOutlineInfoCircle,
  AiOutlineKey,
  AiOutlineMail,
  AiOutlinePlus,
  AiOutlineUser,
} from "react-icons/ai";
import * as Yup from "yup";

export default function Home() {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirm_password: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password")], "Confirm password does not match"),
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="w-80">
        <Typography.Heading level={1} className="text-center mb-3">
          Form Example
        </Typography.Heading>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirm_password: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <Form>
            <Input.Text
              size="base"
              required
              showCount
              maxLength={10}
              tabIndex={5}
              label="Username"
              type="text"
              name="username"
              placeholder="Username"
              prefix={<AiOutlineUser size={20} />}
              suffix={<AiOutlinePlus size={20} />}
              helperText={
                <span className="flex gap-1.5 items-center">
                  <AiOutlineInfoCircle size={20} />
                  Fill the username
                </span>
              }
            />
            <Input.Text
              size="base"
              required
              tabIndex={3}
              label="Email"
              type="email"
              name="email"
              placeholder="Email"
              prefix={<AiOutlineMail size={20} />}
              helperText={
                <span className="flex gap-1.5 items-center">
                  <AiOutlineInfoCircle size={20} />
                  Fill the email
                </span>
              }
            />
            <Input.Password
              size="base"
              required
              tabIndex={1}
              label="Password"
              name="password"
              placeholder="Password"
              prefix={<AiOutlineKey size={20} />}
              helperText={
                <span className="flex gap-1.5 items-center">
                  <AiOutlineInfoCircle size={20} />
                  Fill the password
                </span>
              }
            />
            <Input.Password
              size="base"
              required
              tabIndex={2}
              label="Confirm Password"
              name="confirm_password"
              placeholder="Confirm Password"
              prefix={<AiOutlineKey size={20} />}
              helperText={
                <span className="flex gap-1.5 items-center">
                  <AiOutlineInfoCircle size={20} />
                  Fill the confirm password
                </span>
              }
            />
            <Button.Primary fullWidth buttonType="submit" tabIndex={4}>
              Submit
            </Button.Primary>
          </Form>
        </Formik>
      </div>
    </main>
  );
}
