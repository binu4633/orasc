import type { RequestHandler } from './$types';
import { json,error } from "@sveltejs/kit";
import Fees from '$db/schema/feeSchema';

export const GET: RequestHandler = async () => {
    const findFees = await Fees.find();
    const fees = findFees[0];

    return json({fees});
};
export const POST: RequestHandler = async ({request}) => {
    const body = await request.json();

    
     const newObj = {
        studentRegistrationFee:Number(body.studentRegistrationFee)||0,
        jobCandidateRegistrationFee:Number(body.jobCandidateRegistrationFee)||0,
        courseApplicationFee:Number(body.courseApplicationFee)||0,
        jobApplicationFee:Number(body.jobApplicationFee)||0
     }

     const fees = await Fees.find();
     
     if(fees.length === 0){
         
 
         const newFees = new Fees(newObj);
         await newFees.save();
        
     }
     else{
         const id = fees[0]._id;
          await Fees.findByIdAndUpdate(id,newObj)
 
     }
 
 
 
     return json({
          success:true
     });
};