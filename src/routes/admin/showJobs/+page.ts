import type { PageLoad } from './$types';


export const load:PageLoad = (async ({fetch,url}) => {
    const response = await fetch(url.pathname+url.search);
    const result = await response.json();
    const countryResponse = await fetch('/admin/settings/countries');
    const countryResult = await countryResponse.json()
  
    return {
        jobs:result,
        countries:countryResult?.countries ||[]
    };
}) ;