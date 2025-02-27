import type { PageLoad } from './$types';


export const load:PageLoad = (async ({fetch,url}) => {
    const search = url.search ||'';
    
    const response = await fetch(`/admin/showCourses${url.search}`);
    
    const result = await response.json();

   

    const countryResponse = await fetch('/admin/settings/countries');
    const countryResult = await countryResponse.json()
    
    return {
        courses:result,
        countries:countryResult?.countries ||[]
    };
}) ;