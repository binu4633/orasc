


import type { RequestHandler } from './$types';
import CandidateRegistration from '$db/schema/candidateRegSchema';



import { json } from '@sveltejs/kit';


export const PATCH: RequestHandler = async ({request}) => {
    const body =await request.json();
    const id = body.id;
    const approve = body.approve
   console.log('does this route works', body)

    await CandidateRegistration.findByIdAndUpdate(id,{
        registrationApprove:approve
    });

    return json({status:'success'});
};