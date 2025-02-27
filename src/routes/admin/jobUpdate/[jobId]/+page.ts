import type { PageLoad } from './$types';

export const load:PageLoad = (async ({params,fetch}) => {
    const jobId = params.jobId;
    
    const response = await fetch(`/admin/jobDetail/${jobId}`)
    const result = await response.json();
    const countryResponse = await fetch('/admin/settings/countries');
    const countryResult = await countryResponse.json()
    return {
        job:result.job,
        countries:countryResult?.countries ||[]
    };
}) ;