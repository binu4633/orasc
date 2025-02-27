import { z } from "zod";

const ZodJobAddSchema = z.object({
  country: z
    .string()
    .max(564, { message: " fewer characters long" })
    .nonempty({ message: "country is required" }),
  place: z
    .string()
    .max(564, { message: " fewer characters long" })
    .nonempty({ message: "place is required" }),
  jobTitle: z
    .string()
    .max(564, { message: " fewer characters long" })
    .nonempty({ message: "job title is required" }),
  company: z
    .string()
    .max(564, { message: " fewer characters long" })
    .nonempty({ message: "job title is required" }),
  qualification: z
    .string()
    .max(564, { message: " fewer characters long" })
    .nonempty({ message: "qualification is required" }),
  specification: z
    .string()
    .max(1564, { message: " fewer characters long" })
    .optional(),
  salary: z
    .string()
    .max(564, { message: " fewer characters long" })
    .nonempty({ message: "salary  is required" }),
  experience: z
    .string()
    .max(564, { message: " fewer characters long" })
    .nonempty({ message: "experience  is required" }),
  description: z
    .string()
    .max(2064, { message: " fewer characters long" })
    .optional(),
});

export { ZodJobAddSchema };
