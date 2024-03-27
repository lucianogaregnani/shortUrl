import { z } from "zod";

export const LoginUserSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(1, "The password is required")
    .min(6, "The password should have at least 6 characters"),
});

export const RegisterUserSchema = LoginUserSchema.partial().extend({
  repassword: z.string(),
});

RegisterUserSchema.refine(
  (data) => data.password === data.repassword,
  "The passwords do not match"
);

export type LoginUserSchemaType = z.infer<typeof LoginUserSchema>;
export type RegisterUserSchemaType = z.infer<typeof RegisterUserSchema>;
