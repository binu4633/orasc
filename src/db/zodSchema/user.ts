import { z } from "zod";

const courseItemSchema = z.object({
  course: z.string(),
  university: z.string(),
  country:z.string(),
  courseId:z.string(),
  applicationId:z.string(),
});
const jobItemSchema = z.object({
  jobTitle: z.string(),
  company: z.string(),
  country:z.string(),
  applicationId:z.string(),
});

const ZodUserSchema = z.object({
  firstName: z
    .string()
    .max(564, { message: " fewer characters long" })
    .nonempty({ message: "first is required" }),
  lastName: z
    .string()
    .max(564, { message: " fewer characters long" })
    .optional(),
  email: z.string().email().nonempty({ message: "email is required" }),
  password: z.string().min(4, { message: "minimum 4 letters required" }),

  passwordResetToken: z.string().optional(),
  passwordResetExpires: z.string().date(),
  userType: z
    .enum(["admin", "employe", "user"], {
      message: "incurrect value",
    })
    .optional(),
  studentRegistrationId: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/, {
      message: "Invalid ObjectId format",
    })
    .optional(),
  studentRegistrationApprove: z
    .enum(["pending", "approved", "unapproved"], {
      message: "incurrect value",
    })
    .optional(),
  universityRegistrationId: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/, {
      message: "Invalid ObjectId format",
    })
    .optional(),
 
  studentConsultantRegistrationId: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/, {
      message: "Invalid ObjectId format",
    })
    .optional(),
 
  jobCandidateRegistrationId: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/, {
      message: "Invalid ObjectId format",
    })
    .optional(),
  jobCandidateRegistrationApprove: z
    .enum(["pending", "approved", "unapproved"], {
      message: "incurrect value",
    })
    .optional(),

  employerRegistrationId: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/, {
      message: "Invalid ObjectId format",
    })
    .optional(),

  jobConsultantRegistrationId: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/, {
      message: "Invalid ObjectId format",
    })
    .optional(),
   appliedCourses:z.array(courseItemSchema), 
   appliedJobs:z.array(jobItemSchema), 

});

export { ZodUserSchema };
