<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';

    let { data, children }: { data: LayoutData, children: Snippet } = $props();
     import '../../app.css'
</script>
<div class="w-full h-20 bg-primary flex">
    <div class="m-2">
        <a href="/">home</a>
    </div>
    <div class="m-2">
        <a href="/admin">admin</a>
    </div>
</div>
{@render children()}