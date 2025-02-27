import { z } from "zod";

const ZodCourseAddSchema = z.object({
      country: z
      .string()
      .max(564, { message: " fewer characters long" })
      .nonempty({ message: "country is required" }),
      college: z
      .string()
      .max(564, { message: " fewer characters long" })
      .nonempty({ message: "college is required" }),
      university: z
      .string()
      .max(564, { message: " fewer characters long" })
      .nonempty({ message: "university is required" }),
      studyLevel: z
      .string()
      .max(564, { message: " fewer characters long" })
      .nonempty({ message: "study level is required" }),
      course: z
      .string()
      .max(564, { message: " fewer characters long" })
      .nonempty({ message: "course  is required" }),
      subCourse: z
      .string()
      .max(564, { message: " fewer characters long" })
      .optional(),
      compus: z
      .string()
      .max(564, { message: " fewer characters long" })
      .nonempty({ message: "compus  is required" }),
      eligibility: z
      .string()
      .max(564, { message: " fewer characters long" })
      .nonempty({ message: "eligibility  is required" }),
      duration: z
      .string()
      .max(564, { message: " fewer characters long" })
      .nonempty({ message: "duration  is required" }),
      intake: z
      .string()
      .max(564, { message: " fewer characters long" })
      .nonempty({ message: "intake  is required" }),
      tutionFee: z
      .string()
      .max(564, { message: " fewer characters long" })
      .nonempty({ message: "tution fee  is required" }),
      intenship: z
      .string()
      .max(564, { message: " fewer characters long" })
      .optional(),
      courseLink: z
      .string().url()
      .max(564, { message: " fewer characters long" })
      .nonempty({ message: "courseLink   is required" }),
})

export {ZodCourseAddSchema}