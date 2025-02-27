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
    let countrySelected = $state('all');
    let statusSelected = $state('all');
    let resultSelected = $state('all');
    let pageSelected = $state(1);
    let pagesArray:any = $state([]);
  
   
  
    
  
    
  
    $effect(() => {
     if(data?.application?.totalPages){
    
     const arr = [];
     for(let i =1;  i<=data.application.totalPages;i++){
        
       arr.push(i)
       }
       pagesArray = arr
    }else{
     pagesArray = []
    };
  
    if(data?.application?.page){
     pageSelected= data.application.page
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
      goto(`/admin/applications/courseApplicationDetails/${id}`);
    }
  
    function countryChangeHandler() {
    
    //   goto(`${page.url.pathname}?country=${countrySelected}`);
    }

    function findHandler(){
        goto(`${page.url.pathname}?country=${countrySelected}&status=${statusSelected}&result=${resultSelected}`);
    }


  
    function pageSelectHandler(pageNumber:number){
     pageSelected = pageNumber;
  
     const searchUrl = `?country=${countrySelected}&page=${pageSelected}`;
     goto(`${page.url.pathname}${searchUrl}`)
     
    }
  </script>
  
  <section class="w-full min-h-screen bg-primary">
    <div class="w-full text-2xl text-center">
      <h1>Courses applications</h1>
  </div>
  <div class="flex flex-col md:flex-row justify-center items-center my-4">
  <div class="flex text-2xl">
    <p class="py-3">country</p>
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
  </div>
  <div class="flex text-2xl">
    <p class="py-3">status</p>
    <select
      name="status"
      id="status"
      class="border-0 bg-primary text-xl text-white-400 mx-4"
      bind:value={statusSelected}
      
    >
      <option value="all">all</option>
      <option value="pending">pending</option>
      <option value="processing">processing</option>
      <option value="completed">completed</option>
      
    </select>
  </div>
  <div class="flex text-2xl">
    <p class="py-3">result</p>
    <select
      name="result"
      id="result"
      class="border-0 bg-primary text-xl text-white-400 mx-4"
      bind:value={resultSelected}
      
    >
      <option value="all">all</option>
      <option value="pending">pending</option>
      <option value="accepted">accepted</option>
      <option value="rejected">rejected</option>
      
    </select>
  </div>

  <div>
    <button onclick={findHandler} class="btn-second mx-4">find</button>
  </div>
   
    
    
  </div>
    <div class="flex flex-col items-center text-2xl min-h-[70vh]">
    {#if data.application?.application && data.application.application.length > 0}
      {#each data.application.application as application}
        <div class="w-full center-col  m-4 bg-primary-dark p-6 text-white-400">

          <p>name:{application.name}</p>
          <p>email:{application.email}</p>
          <p>country:{application.country}</p>
          <p>college:{application.college}</p>
          <p>university:{application.university}</p>
          <p>course:{application.course}</p>
          <p>status:{application.status}</p>
          <div>
            <button
              onclick={detailsHandler.bind(null, application._id)}
              class="btn-second"
              >details
            </button>
          </div>
        </div>
      {/each}
    {:else}
      <p>cannot find courses</p>
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
  
  
  
    <!-- {#if pagesArray}
       <div class="flex justify-center mt-5">
      {#each pagesArray as pageNum}
          <form action="?/paginate" method="post" >
            <input type="hidden" name="page"
            value={pageNum} >
            <input type="hidden" name="search"
            value={''} 
            
            >
            {#if page && page === pageNum}
            
               <button class="w-6 text-xl bg-orange-400 rounded-full">{pageNum}</button>
               {:else}
               <button class="w-6  text-xl bg-orange-400">{pageNum}</button>
           
            {/if}
          </form>
      {/each}
    </div>
      {/if} -->
  
  
  
  
  <!-- {#if pagesArray}
      <div class="w-full flex justify-center">
        <div class="w-10 h-10 ">
          <button>
            <img src={leftArrow}  alt=""  class="  w-full h-full object-contain"/>
          </button>
        </div>
        <div class="w-52 bg-red-500 overflow-x-hidden">
         
           {#each pagesArray as page}
                <button class="w-10 h-10 bg-primary-compliment rounded-full text-white-400">
                 <p>{page}</p>
                </button>
           {/each}
        </div>
        <div class="w-10 h-10 ">
          <button>
            <img src={rightArrow} alt="" class="  w-full h-full object-contain"/>
          </button>
        </div>
      </div>
    {/if} -->
  