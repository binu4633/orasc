import { error } from '@sveltejs/kit';
import type { PageServerLoad,Actions, } from './$types';
import Course from '$db/schema/courseSchema';


export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default:async({request})=>{
     const formData = await request.formData();
     const courseId = formData.get('courseId');
     

     await Course.findByIdAndDelete(courseId);

     return {
        success:true
     }
     
    }
};