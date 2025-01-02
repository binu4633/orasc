<script lang="ts">
    import type { PageData,ActionData } from './$types';
    
    // let { data }: { data: PageData } = $props();
    import { enhance } from "$app/forms";
    import Banners from '$lib/components/home/banners.svelte';
  import AboutAddress from '$src/lib/components/home/aboutAddress.svelte';
    

    let name:string|null = null;
    let number:number|null = null;
    let email:string|null = null;
    let message:string|null = null;
    export let form: ActionData;
    console.log('form fronend',form)
</script>
<Banners />
<div class="bg-primary sm:grid sm:grid-cols-2">
    <div class="px-10 text-center py-10">
        <h4 class="text-2xl font-semibold sm:text-4xl">Contact Us for Recruitment Assistance</h4>
        <p class="sm:text-2xl">Reach out for overseas recruitment and education inquiries today.</p>
    </div>
    <div class="flex justify-center">
        <form action="" method="post" class="bg-primary-dark   sm:w-[40vw] md:w-[40vw] lg:w-[40vw]   m-[5%] p-5 rounded-lg">
        <p class="text-white sm:text-2xl">name</p>
      <input type="text" name="name" id="" class="input-form" value={form?.data?.name ?? ''} required/>
      {#if form?.errors?.name}
      <p class="text-red-600 sm:text-2xl">Name is required</p>
      {/if}
      <p class="text-white sm:text-2xl">mobile number</p>
      <input type="number" name="number" id="" class="input-form" value={form?.data?.number ?? ''} />
      {#if form?.errors?.number}
      <p class="text-red-600 sm:text-2xl">number is required</p>
      {/if}
      <p class="text-white sm:text-2xl">email</p>
      <input type="email" name="email" id="" class='input-form' value={form?.data?.email ?? ''} />
      {#if form?.errors?.email}
      <p class="text-red-600 sm:text-2xl">email is required</p>
      {/if}
      <p class="text-white sm:text-2xl">message</p>
      <textarea id="message" name="message" rows="4" cols="30 " class='input-form' value={form?.data?.message ?? ''} />
        your message
       
        <br>

        <button type="submit" 
        class="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
    Send Message
</button>
  {#if form?.failed}
     <p class="bg-red-600 sm:text-xl">connection error please try later</p>
  {/if}
        </form>
    </div>
</div>
<AboutAddress />