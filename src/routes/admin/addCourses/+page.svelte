<script lang="ts">
    import type { PageData,ActionData } from './$types';
    import type { PageProps } from './$types';
    let { data ,form}: PageProps = $props();
    let countries = [];
   
    // export let form: ActionData;
    if(data?.countries){
    countries = data.countries
    }
   
</script>

 <section class="">
      <div class="bg-primary text-center">
        <h1 class="text-4xl">Add course</h1>
      </div>
      <div class="w-full min-h-screen bg-primary pt-16 flex justify-center ">
      <form action="" method="post" class="bg-primary-dark mb-10 w-[90vw]  sm:w-[40vw] md:w-[40vw] lg:w-[40vw]  p-5 rounded-lg">
        <div>
          {#if form?.success}
          <p class="text-white-400">course  added successfully</p>
          {/if}
        </div>
         <div class="input-div">
            <label for="country" class="input-label">Country:</label><br>
           
            <select name="country" id="country" class="input-form" value={form?.data?.country} >
              <option value="">Please choose an option</option>
              {#each countries as country}
              <option value={country}>{country}</option>
              {/each}
            
          </select>
            {#if form?.errors?.country}
            <p class="text-red-500">{form.errors.country[0]}</p>
           {/if}
          </div>
         <div class="input-div">
            <label for="college" class="input-label">College:</label><br>
            <input type="text" id="college" name="college" class="input-form" value={form?.data?.college} />
            {#if form?.errors?.college}
            <p class="text-red-500">{form.errors.college[0]}</p>
           {/if}
          </div>
        <div class="input-div">
            <label for="university" class="input-label">University :</label><br>
            <input type="text" id="university" name="university" class="input-form" value={form?.data?.university} />
            {#if form?.errors?.university}
            <p class="text-red-500">{form.errors.university[0]}</p>
           {/if}
          </div>
          <div class="input-div">
            <label for="studyLevel" class="input-label">Study level</label><br>
            <select name="studyLevel" id="studyLevel" class="input-form" value={form?.data?.studyLevel} >
                <option value="">Please choose an option</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Master">Master</option>
                <option value="PhD">PhD</option>
            </select>
            {#if form?.errors?.studyLevel}
            <p class="text-red-500">{form.errors.studyLevel[0]}</p>
          {/if}
          </div>
          <div class="input-div">
            <label for="course" class="input-label">Course</label><br>
            <input type="text" id="course" name="course" class="input-form" value={form?.data?.course} />
            {#if form?.errors?.course}
            <p class="text-red-500">{form.errors.course[0]}</p>
           {/if}
          </div>
          <div class="input-div">
            <label for="subCourse" class="input-label">Subcourse</label><br>
            <input type="text" id="subCourse" name="subCourse" class="input-form" value={form?.data?.subCourse} />
            {#if form?.errors?.subCourse}
            <p class="text-red-500">{form.errors.subCourse[0]}</p>
           {/if}
          </div>
          <div class="input-div">
            <label for="compus" class="input-label">Compus</label><br>
            <input type="text" id="compus" name="compus" class="input-form" value={form?.data?.compus} />
            {#if form?.errors?.compus}
            <p class="text-red-500">{form.errors.compus[0]}</p>
           {/if}
          </div>
          <div class="input-div">
            <label for="eligibility" class="input-label">Eligibility</label><br>
            <input type="text" id="eligibility" name="eligibility" class="input-form" value={form?.data?.eligibility} />
            {#if form?.errors?.eligibility}
            <p class="text-red-500">{form.errors.eligibility[0]}</p>
           {/if}
          </div>
          <div class="input-div">
            <label for="duration" class="input-label">Duration</label><br>
            <input type="text" id="duration" name="duration" class="input-form" value={form?.data?.duration} />
            {#if form?.errors?.duration}
            <p class="text-red-500">{form.errors.duration[0]}</p>
           {/if}
          </div>
          <div class="input-div">
            <label for="intake" class="input-label">Intake</label><br>
            <input type="text" id="intake" name="intake" class="input-form" value={form?.data?.intake} />
            {#if form?.errors?.intake}
            <p class="text-red-500">{form.errors.intake[0]}</p>
           {/if}
          </div>
          <div class="input-div">
            <label for="tutionFee" class="input-label">Tution fee</label><br>
            <input type="text" id="tutionFee" name="tutionFee" class="input-form" value={form?.data?.tutionFee} />
            {#if form?.errors?.tutionFee}
            <p class="text-red-500">{form.errors.tutionFee[0]}</p>
           {/if}
          </div>
          <div class="input-div">
            <label for="intenship" class="input-label">Intenship</label><br>
            <input type="text" id="intenship" name="intenship" class="input-form" value={form?.data?.intenship} />
            {#if form?.errors?.intenship}
            <p class="text-red-500">{form.errors.intenship[0]}</p>
           {/if}
          </div>
          <div class="input-div">
            <label for="courseLink" class="input-label">Course link</label><br>
            <input type="text" id="courseLink" name="courseLink" class="input-form" value={form?.data?.courseLink} />
            {#if form?.errors?.courseLink}
            <p class="text-red-500">{form.errors.courseLink[0]}</p>
           {/if}
          </div>
          
          <div class="flex justify-end">
            <button class="btn-second">submit</button>
         </div>
      </form>
    </div>
 </section>