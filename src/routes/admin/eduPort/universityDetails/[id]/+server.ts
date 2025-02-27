import type { RequestHandler } from '../$types';
import { json,error } from "@sveltejs/kit";
import UniversityRegistration from '$db/schema/universitySchema';

export const GET: RequestHandler = async ({params}) => {
    
    const id = params.id

    const university = await UniversityRegistration.findById(id);
    if(!university){
        error(404,{
            message:'not found'
        })
    }
    return json({university});
};