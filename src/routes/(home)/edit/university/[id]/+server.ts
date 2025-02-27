import { json,error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import UniversityRegistration from '$db/schema/universitySchema';
// import StudentRegistration from '$db/schema/studentRegSchema';




export const GET: RequestHandler = async ({params}) => {

    const id = params.id

    const regData = await UniversityRegistration.findById(id);
    if(!regData){
        error(404,{
            message:'not found'
        })
    }
    return json({regData});
};