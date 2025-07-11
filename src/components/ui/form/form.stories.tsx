import { z } from "zod";
import { Form } from "./form";
import { Input } from "./input";

export default {
  title: "Form/FormWrapper",
  component: Form,
};

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const Default = () => (
  <Form
    schema={schema}
    onSubmit={(data) => {
      console.log("Form submitted:", data);
    }}
  >
    {(methods) => (
      <div className="space-y-4">
        <Input
          type="email"
          label="Email"
          register={methods.register("email")}
          error={methods.formState.errors.email}
        />
        <Input
          type="password"
          label="Password"
          register={methods.register("password")}
          error={methods.formState.errors.password}
        />
      </div>
    )}
  </Form>
);
