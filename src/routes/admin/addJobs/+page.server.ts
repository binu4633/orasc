import type { PageServerLoad, Actions } from "./$types";
import {  fail } from "@sveltejs/kit";
import { ZodJobAddSchema} from "$db/zodSchema/jobs";
import Job from "$db/schema/jobsSchema";

export const load = (async () => {
  return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
  default: async (event) => {
    const formData = await event.request.formData();
    
    let data = Object.fromEntries(formData);

    
    let formError: Record<string, unknown> = {};

    try {
      const result = ZodJobAddSchema.parse(data);
      
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

    const newJob = new Job(data);

    await newJob.save();

    return {
        success:true
    }
  },
};
