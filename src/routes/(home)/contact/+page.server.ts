import type { PageServerLoad ,Actions } from './$types';
import { fail } from '@sveltejs/kit';
import Enquiry from '$db/schema/enquirySchema';
export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default:async(event)=>{
        const formData = await event.request.formData();
        const name = formData.get('name');
        const number = formData.get('number');
        const email = formData.get('email');
        const message = formData.get('message');
        
        const errors: Record<string, unknown> = {}
        if (!email) {
			// return fail(400, { email, missing: true });
            errors.email = 'required'
		}
        if (!name) {
			// return fail(400, { name, missing: true });
            errors.name = 'required'
		}
        if (!number) {
			// return fail(400, { number, missing: true });
            errors.number = 'required'
		}
        if (Object.keys(errors).length > 0) {
            const data = {
              data: Object.fromEntries(formData),
              errors
            }
            return fail(400, data)
          }

        try {
        
            const newEnquiry = new Enquiry({
                name,
                number,
                email,
                message
            })

            await newEnquiry.save();
            return { success: true };
        } catch (error) {
            const data = {
                data: Object.fromEntries(formData),
                failed:true
              }
              return fail(400, data)
        }  

        
    }
};