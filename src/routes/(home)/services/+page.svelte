<script lang="ts">
    import type { PageData } from './$types';
    
    let { data }: { data: PageData } = $props();
    import Banners from '$lib/components/home/banners.svelte';
  import GlobalServices from '$lib/components/home/globalServices.svelte';
  import Terms from '$lib/components/home/terms.svelte';
  import Privacy from '$lib/components/home/privacy.svelte';
  import RefundPolicy from '$lib/components/home/refundPolicy.svelte'; 
</script>
<Banners/>
<GlobalServices />
<Terms />
<Privacy />
<RefundPolicy />
