import { json,error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import JobConsultancyRegistration from '$db/schema/jobConsultancyRegSchema';
// import JobEmployerRegistration from '$db/schema/jobEmployerSchema';

JobConsultancyRegistration

export const GET: RequestHandler = async ({params}) => {

    const id = params.id

    const regData = await JobConsultancyRegistration.findById(id);
    if(!regData){
        error(404,{
            message:'not found'
        })
    }
    return json({regData});
};