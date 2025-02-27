import type { PageLoad } from './$types';

export const load:PageLoad = (async ({fetch}) => {
    const response = await fetch('/admin/settings/fees');
    const result = await response.json()
    
    return {
        fees:result?.fees ||{}
    };
}) ;