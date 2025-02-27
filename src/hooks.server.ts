import User from '$db/schema/userSchema';
import { JWT_SECRET } from '$env/static/private';
import  connectDB from './db/mongo';
import type { Handle } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';

connectDB()

export const handle: Handle = async ({ event, resolve }) => {
	let token:string|undefined = event.cookies.get('token');
      if(token){

            let  decodedData =   jwt.verify(token, JWT_SECRET); 
            // console.log('decoded daata', decodedData)
            const user = await User.findOne({email:decodedData.email});

            // console.log('user', user);
            event.locals.user = user;
      }
      // console.log('coo', token)

	const response = await resolve(event);
	return response;
};