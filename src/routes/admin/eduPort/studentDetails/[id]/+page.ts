import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load:PageLoad = (async ({params,fetch}) => {
    const id = params.id;
    
    const response = await fetch(`/admin/eduPort/studentDetails/${id}`)
    const result = await response.json();
   
   
    return {
        student:result.student
    };
}) ;