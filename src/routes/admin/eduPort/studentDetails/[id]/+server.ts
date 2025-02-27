import StudentRegistration from '$db/schema/studentRegSchema';
import type { RequestHandler } from '../$types';
import { json,error } from "@sveltejs/kit";
import StudentRegistration from '$db/schema/studentRegSchema';


export const GET: RequestHandler = async ({params}) => {
    
    const id = params.id

    const student = await StudentRegistration.findById(id);
    if(!student){
        error(404,{
            message:'not found'
        })
    }
    return json({student});
};