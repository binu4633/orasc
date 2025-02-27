import type { PageServerLoad, Actions } from "./$types";
import { redirect, fail } from "@sveltejs/kit";
import { zodStudentAgentRegSchema } from "$db/zodSchema/studentAgentRegSchema";
import JobEmployerRegistration from "$db/schema/jobEmployerSchema";
import User from "$db/schema/userSchema";

export const load = (async () => {
  return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
  default: async (event) => {
    const user = event.locals.user;
    const id =  event.params.id;
    if(!id) return;

    const formData = await event.request.formData();
   
    let data = Object.fromEntries(formData);

    data.number = Number(data.number);
    let formError: Record<string, unknown> = {};

    try {
      const result = zodStudentAgentRegSchema.parse(data);
      
    } catch (error) {
      if (error) {
    
        formError = error.flatten().fieldErrors;
      }
    }
    if(!user){
      formError.error = 'signin before register '
    }
    if(user){
      if(user.email !== data.email){
        formError.error = 'email and login email are not same'
      }
    }
    if (Object.keys(formError).length > 0) {
      const resultData = {
        data: data,
        errors: formError,
      };
      return fail(400, resultData);
    }

    await JobEmployerRegistration.findByIdAndUpdate(id,data)

    return {
        success:true,
    }
 },
};
