<script lang="ts">
    import { goto, invalidate } from "$app/navigation";
    import { page } from "$app/state";
    import type { PageData } from "./$types";
   
    let { data }: { data: PageData } = $props();
    let approveSelected = $state();
  
   async function updateHandler(){
      if(data?.agent?._id && approveSelected){
    const response = await fetch(`/api/approve/studentConsultancy`,{
      method:"PATCH",
      body: JSON.stringify({
        id:data.agent._id,
        approve:approveSelected
      }),
    })
    const result =await response.json();
    
    if(result?.status === 'success'){
        
        invalidate(page.url.href)
    }
      }
    }
    
  </script>
  
  <section class="bg-primary min-h-screen">
      <div class="flex justify-center">
        <select
        name="approve"
        id="approve"
        class="border-0 bg-primary text-xl text-white-400 mx-4"
        bind:value={approveSelected}
        >
        <option value="">select one</option>
        <option value="pending">pending</option>
        <option value="approved">approved</option>
        <option value="unapproved">unapproved</option>
        
      </select>
          <button onclick={updateHandler} class="btn-second">update</button>
      </div>
    <div class="center-col">
      {#if data?.agent}
        <table>
         
          <tbody>
           
            {#each Object.entries(data.agent) as [key, value], index (key)}
            <tr class="m-10 py-3 md:text-2xl">
              <td class=" py-3 px-2">{key}:</td>
              <td>{value}</td>
            </tr>
            {/each}
          </tbody>
        </table>
      {:else}
        <p>sorry cannot find result</p>
      {/if}
    </div>
  </section>
  