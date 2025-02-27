import type { PageServerLoad, Actions } from "./$types";
import { redirect,fail } from "@sveltejs/kit";
import { zodUniversityRegSchema } from "$db/zodSchema/universityRegSchema";
import UniversityRegistration from '$db/schema/universitySchema';
import User from "$db/schema/userSchema";

export const load = (async () => {
  return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
  default: async (event) => {
    const user = event.locals.user;
    const formData = await event.request.formData();
   
    let data = Object.fromEntries(formData);

    data.number = Number(data.number);
    let formError: Record<string, unknown> = {};

    try {
      const result = zodUniversityRegSchema.parse(data);
     
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

    const existedUniversity = await UniversityRegistration.findOne({email:data.email});

    let newUniversityReg;
    if(!existedUniversity){
       newUniversityReg = new UniversityRegistration(data)
       await newUniversityReg.save();
    }else{
      newUniversityReg = await UniversityRegistration.findByIdAndUpdate(existedUniversity._id,data,{new:true})
    }

    

    const regId = newUniversityReg._id;
    const userId = user._id;

    await User.findByIdAndUpdate(userId,{universityRegistrationId:regId})

    throw redirect(302, "/universityRegSuccess");
  },
};
