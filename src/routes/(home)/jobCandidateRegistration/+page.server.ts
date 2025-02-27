import { zodCandidateRegSchema } from "$db/zodSchema/candidateRegSchema";
import type { PageServerLoad, Actions } from "./$types";
import { redirect, fail } from "@sveltejs/kit";
import CandidateRegistration from "$db/schema/candidateRegSchema";
import User from "$db/schema/userSchema";
// import {zodStudentRegSchema} from '$src/db/zodSchemastudentRegSchema.ts'



export const load = (async () => {
  return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
  default: async (event) => {
    
    const user = event.locals.user;
    const formData = await event.request.formData();
   

    const cv = formData.get('cv');

   
    // 
   const cvData = {
    fileName:cv.name,
    contentType:cv.type,
    size:cv.size,
    data:await cv.arrayBuffer()
   };
   const arrayBufferToBuffer = (arrayBuffer) => {
    return Buffer.from(new Uint8Array(arrayBuffer));
   };
   const newBufferData = arrayBufferToBuffer(cvData.data);
   cvData.data = newBufferData


    let data = Object.fromEntries(formData);
    data.pincode = Number(data.pincode);
    data.number = Number(data.number);
    let formError: Record<string, unknown> = {};

    try {
      const result = zodCandidateRegSchema.parse(data);
    
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
      const {cv,...rest} = Object.fromEntries(formData);
      
      const data = {
        
        data: rest,
        errors:formError
      }
      return fail(400,data);
    }

    data.cv = cvData;
  
    const existedCandidate = await CandidateRegistration.findOne({email:data.email});


    let newCandidateReg
    if(!existedCandidate){
       newCandidateReg = new CandidateRegistration(data);
      await newCandidateReg.save();
    }else{
      newCandidateReg = await CandidateRegistration.findByIdAndUpdate(existedCandidate._id,data,{
        new:true
      })
    }

   

     const regId = newCandidateReg._id;
    const userId = user._id;

    await User.findByIdAndUpdate(userId,{jobCandidateRegistrationId:regId})


    //  return fail(400,data);
    throw redirect(302, "/jobCandidateRegistrationCheckout");
  },
};
