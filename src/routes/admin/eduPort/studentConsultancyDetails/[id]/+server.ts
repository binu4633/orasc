import type { RequestHandler } from '../$types';
import { json,error } from "@sveltejs/kit";
import StudentAgentRegistration from '$db/schema/studentAgentRegSchema';

export const GET: RequestHandler = async ({params}) => {
    
    const id = params.id

    const agent = await StudentAgentRegistration.findById(id);
    if(!agent){
        error(404,{
            message:'not found'
        })
    }
    return json({agent});
};