import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load:PageLoad = (async ({params,fetch}) => {
    
    
    const feeResponse = await fetch(`/admin/settings/fees`);

    const feeResult = await feeResponse.json();
   
    return {
       
        fees:feeResult
    };
}) ;