
import type { RequestHandler } from './$types';
import JobConsultancyRegistration from '$db/schema/jobConsultancyRegSchema';
import { json } from '@sveltejs/kit';


export const PATCH: RequestHandler = async ({request}) => {
    const body =await request.json();
    const id = body.id;
    const approve = body.approve
    

    await JobConsultancyRegistration.findByIdAndUpdate(id,{
        registrationApprove:approve
    });

    return json({status:'success'});
};