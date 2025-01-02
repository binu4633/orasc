<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
    import Banners from '$lib/components/home/banners.svelte';
    import Hero from '$lib/components/home/hero.svelte';
    import LandingSec from '$lib/components/home/landingSec.svelte';
    import LandGallery from '$lib/components/home/landGallery.svelte';
  
</script>
<Banners />
<Hero />
<LandingSec />
<LandGallery />