import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load:PageLoad = (async ({params,fetch}) => {
    const courseId = params.courseId;
  
    const response = await fetch(`/admin/courseDetail/${courseId}`)
    const result = await response.json();
    // if(!result){
    //   return  error(404,{
    //         message:'not found'
    //     })
    // }

    return {
        course:result.course
    };
}) ;