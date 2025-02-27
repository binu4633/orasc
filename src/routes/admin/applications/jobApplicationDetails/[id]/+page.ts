import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load:PageLoad = (async ({params,fetch}) => {
    const applicationId = params.id;
  
    const response = await fetch(`/admin/applications/jobApplicationDetails/${applicationId}`)
    const result = await response.json();
  
    // if(!result){
    //   return  error(404,{
    //         message:'not found'
    //     })
    // }

   


    return {
        job:result.job,
        candidate:result.candidate,
        application:result.application,
       

    };
}) ;