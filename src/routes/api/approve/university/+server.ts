
import type { RequestHandler } from './$types';
import UniversityRegistration from '$db/schema/universitySchema';
import { json } from '@sveltejs/kit';


export const PATCH: RequestHandler = async ({request}) => {
    const body =await request.json();
    const id = body.id;
    const approve = body.approve;
  

    await UniversityRegistration.findByIdAndUpdate(id,{
        registrationApprove:approve
    });

    return json({status:'success'});
};