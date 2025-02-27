import type { RequestHandler } from './$types';
import { json,error } from "@sveltejs/kit";
import Course from '$db/schema/courseSchema';
export const GET: RequestHandler = async ({url}) => {
   
   
    let country = url.searchParams.get('country');
    const page =  Math.floor(Number( url.searchParams.get("page")))||1; 

    const limit = 2;
    const skip = (page-1)*limit;
    let query 
    if(country ==='all'||country===null){
        query = {}
    }else{
        query = {country}
    }

   

    const totalNum = await Course.countDocuments(query);
    const totalPages = Math.ceil( totalNum/limit);
     
    if(page <1 || page > totalPages){
        throw new Error('product doest excist')
    }



   

   
    const courses = await Course.find(query).sort("createdAt").skip(skip).limit(limit).select('country college course ')
    return json({
        courses,
        totalPages,
        page
    });
};