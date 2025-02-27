import { redirect } from '@sveltejs/kit';
import type { PageServerLoad,Actions } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default:async (event)=>{
       
        event.cookies.set('token','',{
            maxAge:0,
            path:'/'
        })

        throw redirect(302,'/')
    }
};