import { zodStudentRegSchema } from "$db/zodSchema/studentRegSchema";
import type { PageServerLoad, Actions } from "./$types";
import { redirect, fail } from "@sveltejs/kit";
import StudentRegistration from "$db/schema/studentRegSchema";

// import {zodStudentRegSchema} from '$src/db/zodSchemastudentRegSchema.ts'
zodStudentRegSchema;
import { z } from "zod";
import User from "$db/schema/userSchema";

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
      const result = zodStudentRegSchema.parse(data);
      
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



    const existedStudentReg =  await StudentRegistration.findOne({email:data.email});

    let newStudentReg ;
    if(!existedStudentReg){
     newStudentReg = new StudentRegistration(data);
     await newStudentReg.save();
    }else{
      newStudentReg = await StudentRegistration.findByIdAndUpdate(existedStudentReg._id,data,{new:true})
    }
  
    
    console.log('new Student Reg',newStudentReg )
     

     const regId = newStudentReg._id;
     const userId = user._id;

     await User.findByIdAndUpdate(userId,{studentRegistrationId:regId})




    //  return fail(400,data);
    throw redirect(302, "/studentRegCheckout");
  },
};
