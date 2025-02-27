import type { RequestHandler } from './$types';
import { json,error } from "@sveltejs/kit";
import Course from '$db/schema/courseSchema';
export const GET: RequestHandler = async ({params}) => {
    
    const courseId = params.courseId

    const course = await Course.findById(courseId);
    if(!course){
        error(404,{
            message:'not found'
        })
    }
    return json({course});
};


