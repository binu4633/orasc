import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";
import User from '$db/schema/userSchema';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { JWT_SECRET,NODE_ENV } from '$env/static/private';


export const load = (async () => {
  return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
  default: async ({request,params,cookies}) => {
    const formData = await request.formData();
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    const paramsId = params.id;

    console.log('event', params)

    const errors: Record<string, unknown> = {};

    if (password) {
      if (password.length < 5) {
        errors.password = "password required minimum 5 characters";
      }
    }

    if (!confirmPassword) {
      errors.confirmPassword = "confirm required";
    }
    if (password !== confirmPassword) {
      errors.passwordMismatch = "password mismatch";
    }

    const user = await User.findOne({passwordResetToken:paramsId});

    if(!user){
        errors.error = 'cannot find a user';
    }

    if(user){
       if(user.passwordResetExpires < Date.now()){
         errors.error = 'link expires already please try new one';
       }
    }



    if (Object.keys(errors).length > 0) {
      
      const data = {
        errors,
      };
      return fail(400, data);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;

    await user.save();

     const token = jwt.sign({ id: user._id, email:user.email }, JWT_SECRET, {
                expiresIn: '240d',
              });
          
            // set cookies 
           
            cookies.set('token',token,{
              httpOnly: true,
              secure: NODE_ENV  === 'production',
              maxAge: 3600*24*240, // 1 hour*24*240
              path: '/',
              sameSite:'strict'
            })
    
            throw redirect(302,'/')
    },
};
