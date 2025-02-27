<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();

  
  let countries = [];

  if (data?.countries) {
    countries = data.countries;
  }

  let countrySelected = $state();
  let pageSelected = $state(1);
  let pagesArray: any = $state([]);

  $effect(() => {
    if (data?.jobs?.totalPages) {
    
      const arr = [];
      for (let i = 1; i <= data.jobs.totalPages; i++) {
        arr.push(i);
      }
      pagesArray = arr;
    } else {
      pagesArray = [];
    }

    if (data?.jobs?.page) {
      pageSelected = data.jobs.page;
    }
  });

  if (page.url.search) {
    let a = page.url.search.split("&")[0];
    if (a.includes("country")) {
      let b = a.split("=")[1];
      countrySelected = b;
    }
  }

  function detailsHandler(id: any) {
    goto(`/admin/jobDetail/${id}`);
  }
  function countryChangeHandler() {
  
    goto(`${page.url.pathname}?country=${countrySelected}`);
  }

  function pageSelectHandler(pageNumber:number){
   pageSelected = pageNumber;

   const searchUrl = `?country=${countrySelected}&page=${pageSelected}`;
   goto(`${page.url.pathname}${searchUrl}`)
    
  }
</script>

<section class="w-full min-h-screen bg-primary">
  <div class="w-full text-2xl text-center">
    <h1>Jobs</h1>
</div>
  <div class="flex justify-center  my-4">
    <select
      name="country"
      id="country"
      class="border-0 bg-primary text-xl text-white-400 "
      bind:value={countrySelected}
      onchange={countryChangeHandler}
    >
      <option value="all">all</option>
      {#each countries as country}
        <option value={country}>{country}</option>
      {/each}
    </select>
  </div>
  <div class="flex flex-col items-center text-2xl min-h-[70vh]">
  {#if data.jobs?.jobs && data.jobs.jobs.length > 0}
    {#each data.jobs.jobs as job}
      <div class="w-full center-col  m-4 bg-primary-dark p-6 text-white-400">
        <p>country:{job.country}</p>
        <p>job title:{job.jobTitle}</p>
        <p>place:{job.place}</p>
        <p>company:{job.company}</p>
        <div>
          <button
            onclick={detailsHandler.bind(null, job._id)}
            class="btn-second"
            >details
          </button>
        </div>
      </div>
    {/each}
  {:else}
    <p>cannot find jobs</p>
  {/if}
</div>
  <div class="flex justify-center ">
    <div class="">
      {#each pagesArray as page}
        <button onclick={pageSelectHandler.bind(null,page)}
          class={`w-10 h-10 rounded-full text-white-400
          ${pageSelected === page?'bg-primary-dark':'bg-primary-compliment'}`}
        >
          <p>{page}</p>
        </button>
      {/each}
    </div>
  </div>
</section>
