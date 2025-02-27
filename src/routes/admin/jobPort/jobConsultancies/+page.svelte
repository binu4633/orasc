<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/state";
    import type { PageData } from "./$types";
    import leftArrow from "$lib/images/left-arrow.png";
    import rightArrow from "$lib/images/right-arrow.png";
 
  
    let { data }: { data: PageData } = $props();
  
    let countries = [];
  
    // export let form: ActionData;
    if (data?.countries) {
      countries = data.countries;
    }
    let countrySelected = $state();
    let approveSelected = $state();
    let pageSelected = $state(1);
    let pagesArray:any = $state([]);
  
  
  
    
  
    
  
    $effect(() => {
     if(data?.agent?.totalPages){
    
     const arr = [];
     for(let i =1;  i<=data.agent.totalPages;i++){
        
       arr.push(i)
       }
       pagesArray = arr
    }else{
     pagesArray = []
    };
  
    if(data?.agent?.page){
     pageSelected= data.agent.page
    }
      });
  
    if(page.url.search){
      let a = page.url.search.split('&')[0];
      if(a.includes('country')){
      let b= a.split('=')[1];
      countrySelected = b;
  
      }
    
    }
  
    function detailsHandler(id: any) {
      goto(`/admin/jobPort/jobConsultancyDetails/${id}`);
    }
  
    function countryChangeHandler() {
      
    //   goto(`${page.url.pathname}?country=${countrySelected}`);
    }

    function findHandler(){
         goto(`${page.url.pathname}?country=${countrySelected}&registrationApprove=${approveSelected}`);
    }
    
  
    function pageSelectHandler(pageNumber:number){
     pageSelected = pageNumber;
  
     const searchUrl = `?country=${countrySelected}&page=${pageSelected}`;
     goto(`${page.url.pathname}${searchUrl}`)
     
    }
  </script>
  
  <section class="w-full min-h-screen bg-primary">
    <div class="w-full text-2xl text-center">
      <h1>Job consultancies</h1>
  </div>
    <div class="md:flex justify-center  my-4">
      <select
        name="country"
        id="country"
        class="border-0 bg-primary text-xl text-white-400 mx-4"
        bind:value={countrySelected}
        onchange={countryChangeHandler}
      >
        <option value="all">all</option>
        {#each countries as country}
          <option value={country}>{country}</option>
        {/each}
      </select>
      <select
        name="approve"
        id="approve"
        class="border-0 bg-primary text-xl text-white-400 mx-4"
        bind:value={approveSelected}
        
      >
        <option value="all">all</option>
        <option value="pending">pending</option>
        <option value="approved">approved</option>
        <option value="unapproved">unapproved</option>
        
      </select>
      <div class="flex justify-center">
        <button onclick={findHandler} class=" bg-primary-compliment px-5 md:btn-second mx-4">find</button>
      </div>
     
    </div>
    <div class="flex flex-col items-center text-2xl min-h-[70vh]">
    {#if data.agent?.agent && data.agent.agent.length > 0}
      {#each data.agent.agent as agent}
        <div class="w-full center-col  m-4 bg-primary-dark p-6 text-white-400">
          <p>buisness name:{agent.businessName}</p>
          <p>country:{agent.country}</p>
          <p>city:{agent.city}</p>
          <p>approve:{agent.registrationApprove}</p>
          <div>
            <button
              onclick={detailsHandler.bind(null, agent._id)}
              class="btn-second"
              >details
            </button>
          </div>
        </div>
      {/each}
    {:else}
      <p>cannot find consultancies</p>
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
  
  
  
          
  
  
  
  
  
        
       
  

 