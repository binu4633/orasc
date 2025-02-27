import type { RequestHandler } from '../$types';
import { json,error } from "@sveltejs/kit";
import Job from '$db/schema/jobsSchema';

export const GET: RequestHandler = async ({params}) => {
    
    const jobId = params.jobId

    const job = await Job.findById(jobId);
    if(!job){
        error(404,{
            message:'not found'
        })
    }
    return json({job});
};