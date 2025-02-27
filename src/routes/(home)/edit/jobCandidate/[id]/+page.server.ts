
import type { PageServerLoad, Actions } from "./$types";
import { redirect, fail } from "@sveltejs/kit";
import CandidateRegistration from "$db/schema/candidateRegSchema";
import User from "$db/schema/userSchema";
import { zodCandidateRegEditSchema } from "$db/zodSchema/candidateRegEditSchema";
// import {zodStudentRegSchema} from '$src/db/zodSchemastudentRegSchema.ts'



export const load = (async () => {
  return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
  default: async (event) => {
    
    const user = event.locals.user;
    const formData = await event.request.formData();
    const id =  event.params.id;

    if(!id) return
    let data = Object.fromEntries(formData);

    const cv = formData.get('cv');
    
    let cvData;

    if(cv.size !== 0){
         cvData = {
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
    }else{
        data.cv = ''
     }

   
    // 
   


    
    data.pincode = Number(data.pincode);
    data.number = Number(data.number);
    let formError: Record<string, unknown> = {};

    try {
      const result = zodCandidateRegEditSchema.parse(data);
    
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

    if(cvData){
        data.cv = cvData;
     }

     function cleanObject(obj) {
        for (const key in obj) {
            if (obj[key] == null ||obj[key] == '' ||obj[key] == undefined) { // This checks for both null and undefined
                delete obj[key];
            }
        }
        return obj;
    }  

    const newData = cleanObject(data);

    await CandidateRegistration.findByIdAndUpdate(id,newData);

    return {
        success:true
    }

  


    
    

   

     
    
  },
};
