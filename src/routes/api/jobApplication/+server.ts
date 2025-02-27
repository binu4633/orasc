import { json, redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import Razorpay from "razorpay";
import Fees from "$db/schema/feeSchema";
// const keyId = 'rzp_test_OTifL5LsdPUvh9';
// const secret = 'SKQeOkp2GAnHal4MNF3eoFI4';
import { RAZORPAY_KEY } from "$env/static/private";
import { RAZORPAY_SECRET } from "$env/static/private";
// import Course from "$db/schema/courseSchema";

import Job from "$db/schema/jobsSchema";
import User from "$db/schema/userSchema";

const razorpay = new Razorpay({
  key_id: RAZORPAY_KEY,
  key_secret: RAZORPAY_SECRET,
});

export const POST: RequestHandler = async ({ request, locals }) => {
  // get course id from req body

  const body = await request.json();
  const jobId = body.jobId;
  const userId = body.userId;

  

  const job = await Job.findOne({ _id: jobId });
  const user = locals.user;
  if (!job) {
    return new Response(JSON.stringify({ error: "job cannot find" }), {
      status: 500,
    });
  }

  

  if (!locals.user) {
    return new Response(JSON.stringify({ error: "please login to continue" }), {
      status: 500,
    });
  }

  if (!user.jobCandidateRegistrationId) {
    return new Response(
      JSON.stringify({ error: "please register candidate form" }),
      { status: 500 }
    );
  }

  let country: string = job.country;
  let jobTitle: string = job.jobTitle;
  let company: string = job.company;
  let place: string = job.place;
  
 



  const feesDb = await Fees.find();

  const fees = feesDb[0].jobApplicationFee || 0;
  Number(fees);
  const options = {
    amount: fees * 100, // Amount in paise
    currency: "INR",
    receipt: user.email,
    notes: {
      type: "jobApplication",
      userId: user._id,
      jobId,
      name: user.firstName,
      email: user.email,
      country,
      jobTitle,
      company,
      place
      
    },
  };

  try {
    const response = await razorpay.orders.create(options);

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};

//
