<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';
    import '../../app.css';
    import Header from '$lib/components/home/header.svelte';
    import Footer from '$lib/components/home/footer.svelte';
    import {user} from '$lib/store'
    
   
    let { data, children }: { data: LayoutData, children: Snippet } = $props();
    
     if(data.posts){
        const parsed = JSON.parse(data.posts);
       
        $user = JSON.parse(data.posts);
     }
     
    // $effect(()=>{
       
    // })
</script>

<!-- {@render children()} -->

<Header />
<slot></slot>
<Footer></Footer>


