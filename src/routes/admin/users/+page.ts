import type { PageLoad } from './$types';


export const load:PageLoad = (async ({fetch,url}) => {
    const response = await fetch(url.pathname+url.search);
    const result = await response.json();
    
  
    return {
        users:result,
        
    };
}) ;