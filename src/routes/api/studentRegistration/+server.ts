import { json ,redirect} from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import Razorpay from 'razorpay';
import Fees from '$db/schema/feeSchema';
// const keyId = 'rzp_test_OTifL5LsdPUvh9';
// const secret = 'SKQeOkp2GAnHal4MNF3eoFI4';
import { RAZORPAY_KEY } from '$env/static/private';
import { RAZORPAY_SECRET } from '$env/static/private';




const razorpay = new Razorpay({
    key_id:RAZORPAY_KEY ,
    key_secret: RAZORPAY_SECRET, 
  });

export const POST: RequestHandler = async ({request,locals}) => {
    
    const user = locals.user;
    
   
   

    if(!locals.user){
      return new Response(JSON.stringify({ error: 'please login to continue' }), { status: 500 });
    }

    if(!user.studentRegistrationId){
      return new Response(JSON.stringify({ error: 'please register student form' }), { status: 500 });
    }

    const feesDb = await Fees.find();

    const fees = feesDb[0].studentRegistrationFee ||0
    Number(fees)
    const options = {
        amount: fees * 100, // Amount in paise
        currency: 'INR',
        receipt: user.email,
        notes:{
          type:'studentRegistration',
          userId:user._id,
          name:user.firstName,
          email:user.email,
        }
      };
    
      try {
        const response = await razorpay.orders.create(options);
       
        return new Response(JSON.stringify(response), { status: 200 });
      } catch (error) {
       
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
      }
};

// 