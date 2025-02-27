import type { RequestHandler } from './$types';
import { json,error } from "@sveltejs/kit";
import JobApplication from '$db/schema/jobApplicationSchema';



export const GET: RequestHandler = async ({url}) => {
   
   
    let country = url.searchParams.get('country');
    let status = url.searchParams.get('status');
    let result = url.searchParams.get('result');
    const page =  Math.floor(Number( url.searchParams.get("page")))||1; 

    const limit = 1;
    const skip = (page-1)*limit;
    let query = {}
    if(country ==='all'||country===null){
        query = query
    }else{
        query.country = country
    }
    if(status ==='all'||status===null){
        query = query
    }else{
        query.status = status
    }
    if(result ==='all'||result===null){
        query = query
    }else{
        query.result = result
    }

   

    const totalNum = await JobApplication.countDocuments(query);
    const totalPages = Math.ceil( totalNum/limit);
     
    if(page <1 || page > totalPages){
        return json({});
    }



   

   
    const application = await JobApplication.find(query).sort("createdAt").skip(skip).limit(limit)
    return json({
        application,
        totalPages,
        page
    });
};