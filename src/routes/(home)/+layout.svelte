<script lang="ts">
    // import type { Snippet } from 'svelte';
    // import type { LayoutData } from './$types';
    import '../../app.css'
    import Header from '$lib/components/home/header.svelte';
    import Footer from '$lib/components/home/footer.svelte';
    
   
    // let { data, children }: { data: LayoutData, children: Snippet } = $props();
</script>

<!-- {@render children()} -->

<Header />
<slot></slot>
<Footer></Footer>


