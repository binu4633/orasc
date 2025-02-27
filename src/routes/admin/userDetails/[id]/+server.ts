import User from '$db/schema/userSchema';
import type { RequestHandler } from './$types';
import { json,error } from "@sveltejs/kit";

export const GET: RequestHandler = async ({params}) => {
    
    const userId = params.id

    const user = await User.findById(userId).select('firstName lastName email userType');
    if(!user){
        error(404,{
            message:'not found'
        })
    }
    return json({user});
};
export const POST: RequestHandler = async ({params,request}) => {
    
    const userId = params.id;
   const body = await request.json();

   const userType = body.userType;

//    console.log(body, userId)

 if(!userType || !userId) return

   
   await User.findByIdAndUpdate(userId,{userType})


    
    return json({});
};