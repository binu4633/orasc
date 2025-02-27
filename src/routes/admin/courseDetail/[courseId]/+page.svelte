<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();


  function updateHandler(){
    goto(`/admin/courseUpdate/${page.params.courseId}`)
  }
  function deleteHandler(){
    goto(`/admin/deleteCourse/${page.params.courseId}`)
  }
</script>

<section class="bg-primary min-h-screen">
    <div class="flex justify-center">
        <button onclick={updateHandler} class="btn-second mx-5">edit</button>
        <button onclick={deleteHandler} class="btn-second">delete</button>
    </div>
  <div class="center-col">
    {#if data?.course}
      <table>
       
        <tbody>
         
          {#each Object.entries(data.course) as [key, value], index (key)}
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
