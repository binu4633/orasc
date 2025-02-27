import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load:PageLoad = (async ({params,fetch}) => {
    const userId = params.id;
  
    const response = await fetch(`/admin/userDetails/${userId}`)
    const result = await response.json();
    // if(!result){
    //   return  error(404,{
    //         message:'not found'
    //     })
    // }

    return {
        user:result.user
    };
}) ;