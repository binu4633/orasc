import type { PageLoad } from './$types';

export const load:PageLoad = (async ({params,fetch}) => {
    const courseId = params.courseId;
 
    const response = await fetch(`/admin/courseDetail/${courseId}`)
    const result = await response.json();
    const countryResponse = await fetch('/admin/settings/countries');
    const countryResult = await countryResponse.json()
    
    return {
        course:result.course,
        countries:countryResult?.countries ||[]
    };
}) ;