import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "The name is short!").max(100, "The name is long!"),
  email: z.string().email("Invalid email"),
  message: z
    .string()
    .min(100, "The message is short!")
    .max(2000, "The message is long!"),
});

export type ContactFormType = z.infer<typeof contactSchema>;
