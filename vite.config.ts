import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		allowedHosts: [
		  '697c-2409-4073-411-13e0-744c-7494-c02f-a26c.ngrok-free.app'
		]
	    },
	      
});
