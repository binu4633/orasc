<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>
<div class="w-full min-h-screen bg-primary flex flex-col justify-center items-center px-16">
    <p class="text-4xl font-semibold">Thank you for registration.</p>
    <p class="text-4xl font-semibold">We will contact you soon</p>
</div>