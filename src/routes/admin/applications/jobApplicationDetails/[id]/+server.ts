import type { RequestHandler } from './$types';
import { json,error } from "@sveltejs/kit";

import Job from '$db/schema/jobsSchema';
import JobApplication from '$db/schema/jobApplicationSchema';
import User from '$db/schema/userSchema';
import CandidateRegistration from '$db/schema/candidateRegSchema';








export const GET: RequestHandler = async ({params}) => {
    
    const applicationId = params.id;

   
    
    const application = await JobApplication.findById(applicationId);


    if(!application){
        error(404,{
            message:'not found'
        })
    }
    
    const userId = application.userId;
    const jobId = application.jobId;
    const user = await User.findOne({_id:userId});
    
    const candidateRegId = user.jobCandidateRegistrationId;
    
    const candidate = await CandidateRegistration.findOne({_id:candidateRegId});
    const job = await Job.findOne({_id:jobId});

    

    if(!candidate || !job){
        error(404,{
            message:'not found'
        })
    }

    if(candidate && job && application){
        return json({candidate, job,application});
    }else{
        return json({error:'cannot find result'});
    }

    
};

export const POST: RequestHandler = async ({params,request})=>{
  const id = params.id;
  const body = await request.json();
  const status = body.status;
  const result = body.result;

  if(!status || !id) return
 
  
  const update = await JobApplication.findByIdAndUpdate(id,{status,result});

  return json({});

}

