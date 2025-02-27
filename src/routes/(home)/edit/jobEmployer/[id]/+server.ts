import { json,error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import JobEmployerRegistration from '$db/schema/jobEmployerSchema';

export const GET: RequestHandler = async ({params}) => {

    const id = params.id

    const regData = await JobEmployerRegistration.findById(id);
    if(!regData){
        error(404,{
            message:'not found'
        })
    }
    return json({regData});
};