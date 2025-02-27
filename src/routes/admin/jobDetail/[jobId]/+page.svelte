<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/state";
    import type { PageData } from "./$types";
  
    let { data }: { data: PageData } = $props();
   
  
    function updateHandler(){
      goto(`/admin/jobUpdate/${page.params.jobId}`)
    }
    function deleteHandler(){
      goto(`/admin/jobDelete/${page.params.jobId}`)
    }
  </script>
  
  <section class="bg-primary min-h-screen">
      <div class="flex justify-center">
          <button onclick={updateHandler} class="btn-second mx-5">edit</button>
          <button onclick={deleteHandler} class="btn-second">delete</button>
      </div>
    <div class="center-col">
      {#if data?.job}
        <table>
         
          <tbody>
           
            {#each Object.entries(data.job) as [key, value], index (key)}
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
  