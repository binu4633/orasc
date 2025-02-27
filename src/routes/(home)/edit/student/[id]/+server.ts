import { json,error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import StudentRegistration from '$db/schema/studentRegSchema';


export const GET: RequestHandler = async ({params}) => {

    const id = params.id

    const regData = await StudentRegistration.findById(id);
    if(!regData){
        error(404,{
            message:'not found'
        })
    }
    return json({regData});
};