import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import { fail ,redirect} from '@sveltejs/kit';
import cookie from 'cookie';
import User from '$db/schema/userSchema';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { JWT_SECRET,NODE_ENV } from '$env/static/private';
export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    login: async (event) => {
		// TODO log the user in
        const formData = await event.request.formData();
      //  let data = Object.fromEntries(formData);
     

      const email = formData.get('email');
      const password = formData.get('password');

      const user:any = await User.findOne({email});

      if(user){
       const result = await bcrypt.compare(password,user.password);

       if(result){
        
        // create jwt token
        const token = jwt.sign({ id: user._id,email: user.email ,}, JWT_SECRET, {
          expiresIn: '240d',
        });
        event.cookies.set('token',token,{
          httpOnly: true,
          secure: NODE_ENV  === 'production',
          maxAge: 3600*24*240, // 1 hour*24*240
          path: '/',
          sameSite:'strict'
        })

        throw redirect(302,'/')
     
       }

      
      }

       
       return fail(400, {
        loginError:'email or password is incorrect'
       })
	},
    signUp: async (event) => {
		// TODO log the user in
        const formData = await event.request.formData();



      
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');
        if(firstName){
            firstName.toString()
        }
        if(lastName){
            lastName.toString()
        }
        if(email){
            email.toString()
        }
        if(password){
            password.toString()
        }
        if(confirmPassword){
            confirmPassword.toString()
        }
        const errors: Record<string, unknown> = {}
       

        const isUserExist = await User.findOne({email});

        
         // user create error 
         if(isUserExist){
            errors.exist = 'user already exist'
         }
         // create error for unfilled colums
         if(!firstName){
            errors.firstName='first name required'
         }
         if(!email){
            errors.email = 'email required'
         }
         if(!password){
            errors.password= 'password required'
         }
         if(password){
          if(password.length < 5){
            errors.password= 'password required minimum 5 characters'
          }
         }
         if(!confirmPassword){
            errors.confirmPassword='confirm required'
         }
         if(password !== confirmPassword){
            errors.passwordMismatch = 'password mismatch'
         }
        
         if (Object.keys(errors).length > 0) {
          const {confirmPassword,password,...rest} = Object.fromEntries(formData)
            const data = {
              data: rest,
              errors
            }
            return fail(400, data)
          }
        // hash password here

        const hashedPassword = await bcrypt.hash(password, 10);

        // try {
        // create a user data here
       const newUser = new User({
         firstName,
         lastName,
         email,
         password:hashedPassword
       })

        await newUser.save();

        // create jwt token
        const token = jwt.sign({ id: newUser._id, email }, JWT_SECRET, {
            expiresIn: '240d',
          });
      
        // set cookies 
       
        event.cookies.set('token',token,{
          httpOnly: true,
          secure: NODE_ENV  === 'production',
          maxAge: 3600*24*240, // 1 hour*24*240
          path: '/',
          sameSite:'strict'
        })

        throw redirect(302,'/')
        
        // const setCookie = cookie.serialize('token', token, {
        //   httpOnly: true,
        //   secure: NODE_ENV  === 'production',
        //   maxAge: 3600*24*240, // 1 hour*24*240
        //   path: '/',
        // });
        // return {
        //   status: 201,
        //   // headers: {
        //   //   'Set-Cookie': setCookie,
        //   // },
        //   data: { message: 'User registered successfully' },
        // };

        // } catch (er) {
        
        //     return fail(400,{failed:true})
        // }

       



	},
};