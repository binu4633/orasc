import type { RequestHandler } from '../$types';
import { json,error } from "@sveltejs/kit";
import JobConsultancyRegistration from '$db/schema/jobConsultancyRegSchema';

export const GET: RequestHandler = async ({params}) => {
    
    const id = params.id

    const agent = await JobConsultancyRegistration.findById(id);
    if(!agent){
        error(404,{
            message:'not found'
        })
    }
    return json({agent});
};