import { z } from "zod";
const MAX_FILE_SIZE = 1000000;
function checkFileType(file: File) {
  if (!file) return true;

  if (file) {
    const fileType = file.name.split(".").pop();

    if (fileType === "pdf") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function checkFileSize(file: File) {
  if (!file) return true;
  if (file?.size) {
    if (file.size > MAX_FILE_SIZE) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}
const zodCandidateRegEditSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Must be 2 or more characters long" })
    .max(64, { message: "Must be 2 or fewer characters long" })
    .trim(),
  lastName: z
    .string()
    .max(64, { message: "Must be 2 or fewer characters long" })
    .optional(),
  dateOfBirth: z
    .string()
    .nonempty({ message: "date of birth  required" })
    .date(),
  gender: z.enum(["male", "female", "others"], {
    message: "value must be male female or others",
  }),
  email: z.string().email(),
  address: z
    .string()
    .max(564, { message: " fewer characters long" })
    .nonempty({ message: " address is required" }),
  city: z
    .string()
    .max(564, { message: "fewer characters long" })
    .nonempty({ message: " city required" }),
  state: z
    .string()
    .max(564, { message: "Must be 2 or fewer characters long" })
    .nonempty({ message: "state  required" }),
  country: z
    .string()
    .max(564, { message: " fewer characters long" })
    .nonempty({ message: "country is required" }),
  pincode: z.number().min(3, { message: " pincode is required" }),
  number: z.number().min(5, { message: "phone number required" }),
  qualification: z
    .string()
    .max(64, { message: " fewer characters long" })
    .nonempty({ message: "qualification is  required" }),
  preferredJobs: z.string().max(564, { message: " fewer characters long" }),
  preferredCountries: z
    .string()
    .max(1064, { message: " fewer characters long" }),
  //   cv:z.any().refine((file)=>{checkFileType(file),{
  //     message:"Only .pdf, .docx formats are supported."
  //   }})
  cv: z
    .any()
    .optional()
   .refine((file) => checkFileType(file), {
      message: "Only .pdf formats is supported.",
    })
    .refine((file) => checkFileSize(file), {
      message: "Max size is 1MB.",
    }),
  registrationApprove: z
    .enum(["pending", "approved", "disapproved"], {
      message: "incurrect value",
    })
    .optional(),
});

export { zodCandidateRegEditSchema };
