
import type { RequestHandler } from './$types';
import StudentAgentRegistration from '$db/schema/studentAgentRegSchema';
import { json } from '@sveltejs/kit';


export const PATCH: RequestHandler = async ({request}) => {
    const body =await request.json();
    const id = body.id;
    const approve = body.approve
  

    await StudentAgentRegistration.findByIdAndUpdate(id,{
        registrationApprove:approve
    });

    return json({status:'success'});
};