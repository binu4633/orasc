import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

import User from "$db/schema/userSchema";
import StudentRegistration from "$db/schema/studentRegSchema";
import CandidateRegistration from "$db/schema/candidateRegSchema";
import CourseApplication from "$db/schema/courseApplication";

import JobApplication from "$db/schema/jobApplicationSchema";
import verifySignature from "$lib/webhookSignature.server";

export const GET: RequestHandler = async () => {
  return json({ hi: "hellllllow world" });
};
export const POST: RequestHandler = async ({ request }) => {
  console.log("herreaaa");
  const body = await request.json();
  console.log("req body webhook capture", body);
  console.log("body payload notes capture", body.payload.payment.entity.notes);
  // Verify the webhook signature (optional but recommended)
  const razorpaySignature: any = request.headers.get("x-razorpay-signature");

  // console.log('razor pay signature', razorpaySignature);

  // console.log('requset header', request.headers)
  const isValid = verifySignature(body, razorpaySignature); // Implement this function
  console.log("is valid", isValid);
  if (!isValid) {
    return json({ error: "Invalid signature" }, { status: 400 });
  }

  // { type: 'studentRegistration', userId: '679def91df6b55691d48d359' }

  const notes = body.payload.payment.entity.notes;
  console.log(notes)
  if (notes?.type === "studentRegistration") {
    const userId = notes.userId || "";

    const user = await User.findOne({ _id: userId });

    if (!user) return;

    const registrationId = user.studentRegistrationId;

    await StudentRegistration.findByIdAndUpdate(registrationId, {
      registrationApprove: "approved",
    });

    user.studentRegistrationApprove = "approved";
    await user.save();
  }
  if (notes?.type === "jobCandidateRegistration") {
    const userId = notes.userId || "";

    const user = await User.findOne({ _id: userId });

    if (!user) return;

    const registrationId = user.jobCandidateRegistrationId;

    await CandidateRegistration.findByIdAndUpdate(registrationId, {
      registrationApprove: "approved",
    });

    user.jobCandidateRegistrationApprove = "approved";
    await user.save();
  }

  if(notes?.type ==='courseApplication'){
    
     const application = await CourseApplication.find({
      courseId:notes.courseId,userId:notes.userId
     });

     console.log('webhook application', application)

     application[0].payment = "captured";
     await application[0].save(); 

     const applicationId = application[0]._id;

     const toUserObj = {
      course:notes.courseName,
      university:notes.university,
      country:notes.country,
      applicationId,
     }

   const u=  await User.findOne({_id:notes.userId});


   u.appliedCourses.push(toUserObj);
   await u.save()

  }
  if(notes?.type ==='jobApplication'){
    
     const application = await JobApplication.find({
      jobId:notes.jobId,userId:notes.userId
     });

     console.log('webhook application', application)

     application[0].payment = "captured";
     await application[0].save(); 

     const applicationId = application[0]._id;

     const toUserObj = {
      jobTitle:notes.jobTitle,
      company:notes.company,
      country:notes.country,
      applicationId,
     }

   const u=  await User.findOne({_id:notes.userId});


   u.appliedCourses.push(toUserObj);
   await u.save()

  }

  return json({ hia: "hellow world" });
};
