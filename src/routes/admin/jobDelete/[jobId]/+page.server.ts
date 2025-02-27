import { error } from '@sveltejs/kit';
import type { PageServerLoad,Actions, } from './$types';
import Job from '$db/schema/jobsSchema';


export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default:async({request})=>{
     const formData = await request.formData();
     const jobId = formData.get('jobId');
     

     await Job.findByIdAndDelete(jobId);

     return {
        success:true
     }
     
    }
};