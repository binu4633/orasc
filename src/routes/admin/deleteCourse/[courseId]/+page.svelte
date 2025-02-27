<script lang="ts">
  import { page } from '$app/state';
    import type { PageData ,ActionData} from './$types';
    
    const courseId = page.params.courseId;

  

    // let { data }: { data: PageData } = $props();
    export let form: ActionData;
</script>

<div class="w-full min-h-screen center-col bg-primary">
    <div>
        {#if form?.success}
        <p class="text-white-400">course  deleted  successfully</p>
        {/if}
      </div>
    {#if courseId}
    <p>Are you sure you want to delete this course?</p>
    <form action="" method="post">
        <input type="hidden" name="courseId" value={courseId}>
       <button class="btn-second">delete</button>
   </form>
    {:else}
         <p>something went wrong please try later</p>
    {/if}
    
</div>