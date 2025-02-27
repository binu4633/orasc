import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load:PageLoad = (async ({params,fetch}) => {
    const jobId = params.jobId;
    
    const response = await fetch(`/admin/jobDetail/${jobId}`)
    const result = await response.json();
   
   
    return {
        job:result.job
    };
}) ;