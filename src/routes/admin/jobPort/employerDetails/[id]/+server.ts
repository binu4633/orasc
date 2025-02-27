import type { RequestHandler } from '../$types';
import { json,error } from "@sveltejs/kit";
import JobEmployerRegistration from '$db/schema/jobEmployerSchema';

export const GET: RequestHandler = async ({params}) => {
    
    const id = params.id

    const employer = await JobEmployerRegistration.findById(id);
    if(!employer){
        error(404,{
            message:'not found'
        })
    }
    return json({employer});
};