import type { RequestHandler } from './$types';
import { json,error } from "@sveltejs/kit";
import Course from '$db/schema/courseSchema';
import CourseApplication from '$db/schema/courseApplication';
import User from '$db/schema/userSchema';
import StudentRegistration from '$db/schema/studentRegSchema';



export const GET: RequestHandler = async ({params}) => {
    
    const applicationId = params.id;

   
    
    const application = await CourseApplication.findById(applicationId);

    console.log('applicatiion', application)

    if(!application){
        error(404,{
            message:'not found'
        })
    }
    
    const userId = application.userId;

    console.log('user id', userId)
    const courseId = application.courseId;
    const user = await User.findOne({_id:userId});

    console.log('user', user)
    
    const studentRegId = user.studentRegistrationId;
    
    const student = await StudentRegistration.findOne({_id:studentRegId});
    const course = await Course.findOne({_id:courseId});

    console.log('student', student)
    

    if(!student || !course){
        error(404,{
            message:'not found'
        })
    }

    if(student && course && application){
        return json({student, course,application});
    }else{
        return json({error:'cannot find result'});
    }

    
};

export const POST: RequestHandler = async ({params,request})=>{
  const id = params.id;
  const body = await request.json();
  const status = body.status;
  const result = body.result;

  if(!status || !id) return
 
  
  const update = await CourseApplication.findByIdAndUpdate(id,{status,result});

  return json({});

}

