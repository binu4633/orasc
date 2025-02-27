import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

import User from "$db/schema/userSchema";
import StudentRegistration from "$db/schema/studentRegSchema";
import CandidateRegistration from "$db/schema/candidateRegSchema";


import CourseApplication from "$db/schema/courseApplication";

import JobApplication from "$db/schema/jobApplicationSchema";
import verifySignature from "$lib/webhookSignature.server";

export const GET: RequestHandler = async () => {
  return json({ hia: "heloow world" });
};
export const POST: RequestHandler = async ({ request }) => {
  console.log("herreaaa");
  const body = await request.json();
  console.log("req body webhook", body);
  console.log("body payload notes", body.payload.payment.entity.notes);
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

  if (notes?.type === "studentRegistration") {
    const userId = notes.userId || "";

    const user = await User.findOne({ _id: userId });

    if (!user) return;

    const registrationId = user.studentRegistrationId;

    await StudentRegistration.findByIdAndUpdate(registrationId, {
      registrationApprove: "pending",
    });

    user.studentRegistrationApprove = "pending";
    await user.save();
  }
  if (notes?.type === "jobCandidateRegistration") {
    const userId = notes.userId || "";

    const user = await User.findOne({ _id: userId });

    if (!user) return;

    const registrationId = user.jobCandidateRegistrationId;

    await CandidateRegistration.findByIdAndUpdate(registrationId, {
      registrationApprove: "pending",
    });

    user.jobCandidateRegistrationApprove = "pending";
    await user.save();
  }
  if (notes?.type === "courseApplication"){
   
    const courseObj = {
      name:notes.name||'',
      email:notes.email||'',
      country:notes.country||'',
      college:notes.college||'',
      university:notes.university||'',
      course:notes.courseName||'',
      userId:notes.userId||'',
      courseId:notes.courseId||'',
      payment:'autherized',
      status:'pending'
    }

    console.log('course obj', courseObj);
    console.log('course id', notes.courseId)

    const newCourseApplication = new  CourseApplication(courseObj);

    await newCourseApplication.save()
   
  }
  if (notes?.type === "jobApplication"){
   
    const jobObj = {
      name:notes.name||'',
      email:notes.email||'',
      country:notes.country||'',
      jobTitle:notes.jobTitle||'',
      company:notes.company||'',
      place:notes.place||'',
      userId:notes.userId||'',
      jobId:notes.jobId||'',
      payment:'autherized',
      status:'pending'
    }

    console.log('job obj', jobObj);
    // console.log('course id', notes.courseId)
    // back from here
    const newJobApplication = new  JobApplication(jobObj);

    await newJobApplication.save()
   
  }

  return json({ hia: "hellow world" });
};
