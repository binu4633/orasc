import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load:PageLoad = (async ({params,fetch}) => {
    const id = params.id;
  
    const response = await fetch(`/edit/jobCandidate/${id}`)
    const result = await response.json();
    if(!result){
      return  error(404,{
            message:'not found'
        })
    }

    return {
        data:result.regData
    };
}) ;