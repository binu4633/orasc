import User from '$db/schema/userSchema';
import { fail } from '@sveltejs/kit';
import type { PageServerLoad,Actions} from './$types';
import { resetPasswordEmail } from '$src/lib/email.server';





export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default:async({request,url,locals})=>{
        const formData = await request.formData();
        const email = formData.get('email');
        let formError: Record<string, unknown> = {};

        if(!locals.user){
           formError.error = 'login to first'
        }
        if(locals.user !== email){
           formError.error = 'cannot reset password to this email'
        }

    
        const user = await User.findOne({email});
        

        

      

        if(!user){
            formError.error = 'cannot find a user'
        }

        if (Object.keys(formError).length > 0) {
              const data = {
                email,
                errors:formError
              }
              return fail(400,data);
            }
    const uuid = crypto.randomUUID();

    console.log('uuid', uuid)
    const name = `${user.firstName} ${user.lastName}`;
        user.passwordResetToken = uuid;
        user.passwordResetExpires = Date.now()+1000*60*60*24;

        await user.save();

        const newUrl = `${url.origin}/resetPassword/${uuid}`
       
    // console.log('event', event.url.origin)  
   // "event.url.origin http://localhost:5173"
      resetPasswordEmail({
        email,
        subject:'password reset email',
        name,
        resetUrl:newUrl
      })     

      return { success: 'send email to this address' };    

        console.log('email', email)
    }
};