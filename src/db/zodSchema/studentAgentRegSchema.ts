import { z } from "zod";

const zodStudentAgentRegSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Must be 2 or more characters long" })
    .max(64, { message: "Must be 2 or fewer characters long" })
    .trim(),
  lastName: z
    .string()
    .max(64, { message: "Must be 2 or fewer characters long" })
    .optional(),
  businessName: z
    .string()
    .min(2, { message: "business name required" })
    .max(1064, { message: "Must be 2 or fewer characters long" }),

  email: z.string().email(),
  address: z
    .string()
    .max(564, { message: " fewer characters long" })
    .nonempty({ message: " address is required" }),
  city: z
    .string()
    .max(564, { message: "fewer characters long" })
    .nonempty({ message: " city required" }),

  country: z
    .string()
    .max(564, { message: " fewer characters long" })
    .nonempty({ message: "country is required" }),

  number: z.number().min(5, { message: "phone number required" }),
  website: z
    .string()
    .url().or(z.literal('')).optional(),
  registrationApprove: z
    .enum(["pending", "approved", "disapproved"], {
      message: "incurrect value",
  }).optional(),  
});

export { zodStudentAgentRegSchema };
