import { json,error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import StudentAgentRegistration from '$db/schema/studentAgentRegSchema';
// import UniversityRegistration from '$db/schema/universitySchema';






export const GET: RequestHandler = async ({params}) => {

    const id = params.id

    const regData = await 
    StudentAgentRegistration.findById(id);
    if(!regData){
        error(404,{
            message:'not found'
        })
    }
    return json({regData});
};