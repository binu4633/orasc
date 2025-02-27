import type { PageServerLoad, Actions } from "./$types";
import { redirect, fail } from "@sveltejs/kit";
import { ZodCourseAddSchema} from "$db/zodSchema/course";
import Course from "$db/schema/courseSchema";

export const load = (async () => {
  return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
  default: async (event) => {
    const formData = await event.request.formData();
   
    let data = Object.fromEntries(formData);

    
    let formError: Record<string, unknown> = {};

    try {
      const result = ZodCourseAddSchema.parse(data);
      
    } catch (error) {
      if (error) {
     
        formError = error.flatten().fieldErrors;
      }
    }

    if (Object.keys(formError).length > 0) {
      const resultData = {
        data: data,
        errors: formError,
      };
      return fail(400, resultData);
    }

    const newCourse = new Course(data);

    await newCourse.save();

    return {
        success:true
    }
  },
};
