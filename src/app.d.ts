// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import { z } from 'zod';
import { Types ,Document,Schema} from 'mongoose';
import { zodStudentRegSchema } from "$db/zodSchema/studentRegSchema";
import type { zodUniversityRegSchema } from '$db/zodSchema/universityRegSchema';
import type { zodStudentAgentRegSchema } from '$db/zodSchema/studentAgentRegSchema';

import { zodCandidateRegSchema } from "$db/zodSchema/candidateRegSchema";

import {ZodCourseAddSchema} from '$db/zodSchema/course';
import {ZodJobAddSchema} from '$db/zodSchema/jobs';

import {ZodUserSchema} from "$db/zodSchema/user"




declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}


// interface IUser  {
//       firstName:string;
//       lastName?:string;
//       email:string;
// 	password:string;
// 	isAdmin:boolean;
// 	isEmploye:boolean;
// 	userType:string;
// 	studentRegistrationDetails:
      
// }

type  IUser  = z.infer<typeof ZodUserSchema>;
type IStudentReg = z.infer<typeof zodStudentRegSchema>;
type IUniversityReg = z.infer<typeof zodUniversityRegSchema>;
type IStudentAgentReg = z.infer<typeof zodStudentAgentRegSchema>;
type ICandidateReg = z.infer<typeof zodCandidateRegSchema>;
type IJobEmployerReg = z.infer<typeof zodStudentAgentRegSchema>;
type IJobConsultancyReg = z.infer<typeof zodStudentAgentRegSchema>;
type ICourseAdd = z.infer<typeof ZodCourseAddSchema>;
type IJobAdd = z.infer<typeof ZodJobAddSchema>;


export {IUser,IStudentReg,IUniversityReg,IStudentAgentReg,ICandidateReg,IJobEmployerReg,IJobConsultancyReg,ICourseAdd,IJobAdd};
