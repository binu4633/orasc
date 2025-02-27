import type { PageLoad } from './$types';

export const load:PageLoad = (async ({fetch}) => {
    const response = await fetch('/admin/settings/countries');
    const result = await response.json()
   
    const countries = result?.countries ||[]
    return {
        countries
    };
}) ;