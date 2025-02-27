import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load:PageLoad = (async ({params,fetch}) => {
    const jobId = params.jobId;
    
    const response = await fetch(`/admin/jobDetail/${jobId}`)
    const result = await response.json();
    const feeResponse = await fetch(`/admin/settings/fees`);

    const feeResult = await feeResponse.json();
   
    return {
        job:result.job,
        fees:feeResult
    };
}) ;