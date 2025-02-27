import type { PageServerLoad, Actions } from "./$types";
import { redirect, fail, json, error } from "@sveltejs/kit";
import { ZodCourseAddSchema } from "$db/zodSchema/course";
import Course from "$db/schema/courseSchema";
import {getErrorMessage} from '$lib/utils'
export const load = (async () => {
  return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
  default: async (event) => {
    const formData = await event.request.formData();
   
    let data = Object.fromEntries(formData);

    let formError: Record<string, unknown> = {};
    let formResult: Record<string, unknown> = {};

    try {
      formResult = ZodCourseAddSchema.parse(data);
     
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

    
      const { id, ...rest } = data;
     
      const newCourse = await Course.findByIdAndUpdate(id, rest, {
        new: true,
      });
     

      return {
        data: data,
        success: true,
      };
  
  },
};
