
import type { RequestHandler } from './$types';
import JobEmployerRegistration from '$db/schema/jobEmployerSchema';
import { json } from '@sveltejs/kit';


export const PATCH: RequestHandler = async ({request}) => {
    const body =await request.json();
    const id = body.id;
    const approve = body.approve
   

    await JobEmployerRegistration.findByIdAndUpdate(id,{
        registrationApprove:approve
    });

    return json({status:'success'});
};