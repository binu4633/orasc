import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load:PageLoad = (async ({params,fetch}) => {
    const id = params.id;
    
    const response = await fetch(`/admin/eduPort/universityDetails/${id}`)
    const result = await response.json();
   
   
    return {
        university:result.university
    };
}) ;