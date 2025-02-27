import { json } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load:LayoutServerLoad = (async (event) => {
    
    let user ;
    
    if(event.locals.user){
        const u = event.locals.user;
        
     user= {
       
        name:u.firstName,
        email:u.email,
        userType:u.userType,
        studentRegistrationId:u.studentRegistrationId||null,
        studentRegistrationApprove:u.studentRegistrationApprove||null,
        universityRegistrationId:u.universityRegistrationId||null,
        studentConsultantRegistrationId:u.studentConsultantRegistrationId||null,
        jobCandidateRegistrationId:u.jobCandidateRegistrationId||null,
        jobCandidateRegistrationApprove:u.jobCandidateRegistrationApprove||null,
        employerRegistrationId:u.employerRegistrationId||null,
        jobConsultantRegistrationId:u.jobConsultantRegistrationId||null,
      }
     
    }

   
    return {
        posts:JSON.stringify(user)
    };
}) ;