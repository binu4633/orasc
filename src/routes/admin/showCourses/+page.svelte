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
  let pageSelected = $state(1);
  let pagesArray:any = $state([]);

 

  

  

  $effect(() => {
   if(data?.courses?.totalPages){
  
   const arr = [];
   for(let i =1;  i<=data.courses.totalPages;i++){
      
     arr.push(i)
     }
     pagesArray = arr
  }else{
   pagesArray = []
  };

  if(data?.courses?.page){
   pageSelected= data.courses.page
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
    goto(`/admin/courseDetail/${id}`);
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
    <h1>Courses</h1>
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
  {#if data.courses?.courses && data.courses.courses.length > 0}
    {#each data.courses.courses as course}
      <div class="w-full center-col  m-4 bg-primary-dark p-6 text-white-400">
        <p>country:{course.country}</p>
        <p>college:{course.college}</p>
        <p>course:{course.course}</p>
        <div>
          <button
            onclick={detailsHandler.bind(null, course._id)}
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
