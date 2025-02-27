import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load:PageLoad = (async ({params,fetch}) => {
    const applicationId = params.id;
  
    const response = await fetch(`/admin/applications/courseApplicationDetails/${applicationId}`)
    const result = await response.json();
  
    // if(!result){
    //   return  error(404,{
    //         message:'not found'
    //     })
    // }

   


    return {
        course:result.course,
        student:result.student,
        application:result.application,
       

    };
}) ;