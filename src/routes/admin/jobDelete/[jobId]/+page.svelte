<script lang="ts">
      import { page } from '$app/state';
      import type { PageData ,ActionData} from './$types';
      
      const jobId = page.params.jobId;
  
    
  
      // let { data }: { data: PageData } = $props();
      export let form: ActionData;
  </script>
  
  <div class="w-full min-h-screen center-col bg-primary">
      <div>
          {#if form?.success}
          <p class="text-white-400">job  deleted  successfully</p>
          {/if}
        </div>
      {#if jobId}
      <p>Are you sure you want to delete this job?</p>
      <form action="" method="post">
          <input type="hidden" name="jobId" value={jobId}>
         <button class="btn-second">delete</button>
     </form>
      {:else}
           <p>something went wrong please try later</p>
      {/if}
      
  </div>