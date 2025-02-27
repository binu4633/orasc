import type { RequestHandler } from './$types';
import { json,error } from "@sveltejs/kit";
import JobEmployerRegistration from '$db/schema/jobEmployerSchema';
import CandidateRegistration from '$db/schema/candidateRegSchema';

export const GET: RequestHandler = async ({url}) => {
   
   
    // let country = url.searchParams.get('country');
    let registrationApprove = url.searchParams.get('registrationApprove');
    const page =  Math.floor(Number( url.searchParams.get("page")))||1; 

    const limit = 1;
    const skip = (page-1)*limit;
    let query = {}
    // if(country ==='all'||country===null){
    //     query = query
    // }else{
    //     query.country = country
    // }
    if(registrationApprove ==='all'||registrationApprove===null){
        query = query
    }else{
        query.registrationApprove = registrationApprove
    }

   

    const totalNum = await CandidateRegistration.countDocuments(query);
    const totalPages = Math.ceil( totalNum/limit);
    
    if(page <1 || page > totalPages){
        throw new Error(' doest excist')
    }

   
    const candidate = await CandidateRegistration.find(query).sort("createdAt").skip(skip).limit(limit).select('firstName lastName email registrationApprove')
    return json({
        candidate,
        totalPages,
        page
    });
};