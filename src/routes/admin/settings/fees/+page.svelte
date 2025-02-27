<script lang="ts">
  import { effect } from 'zod';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
    let studentRegistrationFee = $state(0);
    let jobCandidateRegistrationFee = $state(0);
    let courseApplicationFee = $state(0);
    let jobApplicationFee = $state(0);
    let apiResult:any = $state(false)

    
    if(data?.fees){
        studentRegistrationFee= data.fees.studentRegistrationFee;
        jobCandidateRegistrationFee=data.fees.jobCandidateRegistrationFee;
        courseApplicationFee=data.fees.courseApplicationFee;
        jobApplicationFee=data.fees.jobApplicationFee;
     }


   async function handleSubmit(e:any){
     e.preventDefault();
   
    const obj = {
        studentRegistrationFee,
        jobCandidateRegistrationFee,
        courseApplicationFee,
        jobApplicationFee
    }
    const response = await fetch('/admin/settings/fees',{
      method:"POST",
      body: JSON.stringify(obj),
    })
    const result =await response.json();
    
    apiResult = result.success;
    }
</script>
<div class=" text-center">
   <p class="text-xl md:text-4xl">Fees</p>
</div>
{#if apiResult === true}
    <div class="bg-primary text-center">
        <p>data updated successfully</p>
    </div>
      
  {/if}
<div class="w-full min-h-screen flex justify-center bg-primary ">
     <form onsubmit={handleSubmit} class="min-w-fit ">
        <div class="flex my-4">
            <label for="studentRegistrationFee" class="input-label min-w-[80%]">studentRegistrationFee:</label>
            
              <input
              type="text"
              id="studentRegistrationFee"
              name="studentRegistrationFee"
              class="w-16 "
              bind:value={studentRegistrationFee}
            />
            
          
        </div>
        <div class="flex my-4">
            <label for="jobCandidateRegistrationFee" class="input-label min-w-[80%]">CandidateRegistrationFee:</label>
          <input
            type="text"
            id="jobCandidateRegistrationFee"
            name="jobCandidateRegistrationFee"
            class="w-16"
            bind:value={jobCandidateRegistrationFee}
          />
        </div>
        <div class="flex my-4">
            <label for="courseApplicationFee" class="input-label min-w-[80%]">courseApplicationFee:</label>
          <input
            type="text"
            id="courseApplicationFee"
            name="courseApplicationFee"
            class="w-16"
            bind:value={courseApplicationFee}
          />
        </div>
        <div class="flex my-4">
            <label for="jobApplicationFee" class="input-label min-w-[80%]">jobApplicationFee:</label>
          <input
            type="text"
            id="jobApplicationFee"
            name="jobApplicationFee"
            class="w-16"
            bind:value={jobApplicationFee}
          />
        </div>
        <div>
            <button class="btn-second">update</button>
        </div>
     </form>
</div>