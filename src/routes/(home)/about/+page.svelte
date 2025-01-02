<script lang="ts">
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
    import Banners from '$lib/components/home/banners.svelte';
  import AboutSec from '$lib/components/home/aboutSec.svelte';
  import AboutAddress from '$lib/components/home/aboutAddress.svelte';
   
</script>
<Banners />
<AboutSec />
<AboutAddress />