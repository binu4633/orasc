



import type { RequestHandler } from './$types';
import StudentRegistration from '$db/schema/studentRegSchema';




import { json } from '@sveltejs/kit';


export const PATCH: RequestHandler = async ({request}) => {
    const body =await request.json();
    const id = body.id;
    const approve = body.approve
   console.log('does this route works', body)

    await StudentRegistration.findByIdAndUpdate(id,{
        registrationApprove:approve
    });

    return json({status:'success'});
};