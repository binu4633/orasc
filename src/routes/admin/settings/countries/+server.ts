import type { RequestHandler } from './$types';
import Country from '$db/schema/countrySchema';
import { json,error } from "@sveltejs/kit";
export const GET: RequestHandler = async () => {
    const findCountries = await Country.find();

    if(findCountries[0]?.countries){
        const countries = findCountries[0].countries;

        return json({countries});
    }else{
        return json({countries:''}); 
    }
    
};
export const POST: RequestHandler = async ({request}) => {

    const body = await request.json();

    const countries = await Country.find();
    
    if(countries.length === 0){
        

        const newCounties = new Country({countries:body});
        await newCounties.save();
      
    }else{
        const id = countries[0]._id;
        countries[0].countries = body;
        await countries[0].save()

    }

    

    return json({
         success:true
    });
};