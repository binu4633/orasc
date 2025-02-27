<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
   import Login from '$src/lib/components/home/login.svelte';
   import Signup from '$src/lib/components/home/signup.svelte';
</script>
<section class="w-full min-h-screen bg-primary">
   <Login />
   <Signup />
</section>