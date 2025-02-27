<script lang="ts">
  import type { PageData, ActionData } from "./$types";

  // let { data }: { data: PageData } = $props();
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
    <h1 class="text-4xl">Add jobs</h1>
  </div>
  <div class="w-full min-h-screen bg-primary pt-16 flex justify-center">
    <form
      action=""
      method="post"
      class="bg-primary-dark mb-10 w-[90vw] sm:w-[40vw] md:w-[40vw] lg:w-[40vw] p-5 rounded-lg"
    >
      <div>
        {#if form?.success}
          <p class="text-white-400">job is added successfully</p>
        {/if}
      </div>
      <div class="input-div">
        <label for="country" class="input-label">Country:</label><br />
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
        <label for="place" class="input-label">Place:</label><br />
        <input
          type="text"
          id="place"
          name="place"
          class="input-form"
          value={form?.data?.place}
        />
        {#if form?.errors?.place}
          <p class="text-red-500">{form.errors.place[0]}</p>
        {/if}
      </div>
      <div class="input-div">
        <label for="jobTitle" class="input-label">Job title :</label><br />
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          class="input-form"
          value={form?.data?.jobTitle}
        />
        {#if form?.errors?.jobTitle}
          <p class="text-red-500">{form.errors.jobTitle[0]}</p>
        {/if}
      </div>
      <div class="input-div">
        <label for="company" class="input-label">company :</label><br />
        <input
          type="text"
          id="company"
          name="company"
          class="input-form"
          value={form?.data?.company}
        />
        {#if form?.errors?.company}
          <p class="text-red-500">{form.errors.company[0]}</p>
        {/if}
      </div>
      <div class="input-div">
        <label for="qualification" class="input-label">Qualification</label><br
        />
        <select
          name="qualification"
          id="qualification"
          class="input-form"
          value={form?.data?.qualification}
        >
          <option value="">Please choose an option</option>
          <option value="SSLC">SSLC</option>
          <option value="Higher Secondary">Higher Secondary</option>
          <option value="VHSC">VHSC</option>
          <option value="Diploma">Diploma</option>
          <option value="Graduation">Graduation</option>
          <option value="Post Graduation">Post Graduation</option>
          <option value="PhD">PhD</option>
        </select>
        {#if form?.errors?.qualification}
          <p class="text-red-500">{form.errors.qualification[0]}</p>
        {/if}
      </div>
      <div class="input-div">
        <label for="specification" class="input-label">Specification :</label><br />
        <input
          type="text"
          id="specification"
          name="specification"
          class="input-form"
          value={form?.data?.specification}
        />
        {#if form?.errors?.specification}
          <p class="text-red-500">{form.errors.specification[0]}</p>
        {/if}
      </div>

      <div class="input-div">
        <label for="salary" class="input-label">Salary</label><br />
        <input
          type="text"
          id="salary"
          name="salary"
          class="input-form"
          value={form?.data?.salary}
        />
        {#if form?.errors?.salary}
          <p class="text-red-500">{form.errors.salary[0]}</p>
        {/if}
      </div>
      <div class="input-div">
        <label for="experience" class="input-label">Experience</label><br />
        <input
          type="text"
          id="experience"
          name="experience"
          class="input-form"
          value={form?.data?.experience}
        />
        {#if form?.errors?.experience}
          <p class="text-red-500">{form.errors.experience[0]}</p>
        {/if}
      </div>
      <div class="input-div">
        <label for="description" class="input-label">Description:</label><br />
        <textarea
          id="description"
          name="description"
          class="input-form"
          value={form?.data?.description}
        ></textarea>
        {#if form?.errors?.description}
          <p class="text-red-500">{form.errors.description[0]}</p>
        {/if}
      </div>

      <div class="flex justify-end">
        <button class="btn-second">submit</button>
      </div>
    </form>
  </div>
</section>
