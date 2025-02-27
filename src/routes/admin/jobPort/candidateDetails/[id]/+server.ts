import type { RequestHandler } from '../$types';
import { json,error } from "@sveltejs/kit";
import CandidateRegistration from '$db/schema/candidateRegSchema';

export const GET: RequestHandler = async ({params}) => {
    
    const id = params.id

    const candidate = await CandidateRegistration.findById(id);
    if(!candidate){
        error(404,{
            message:'not found'
        })
    }
    return json({candidate});
};