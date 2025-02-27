<script lang="ts">
    import type { PageData,ActionData } from './$types';

    // let { data }: { data: PageData } = $props();
    export let form: ActionData;

    console.log('form', form)
</script>

<section class="w-full min-h-screen bg-primary center-col">
    <form method="post" >
        <div class="input-div">
            <label for="email" class="input-label">email:</label><br>
            <input type="email" id="email" name="email" class="input-form" value={form?.email} required/>
            <p>send link to this email</p>
            {#if form?.errors?.error}
                 <p class="text-white-400">{form.errors.error}</p>
            {/if}
            {#if form?.success}
                 <p class="text-white-400">{form.success}</p>
            {/if}
            <button class="btn-second">submit</button>
          </div>
    </form>
</section>