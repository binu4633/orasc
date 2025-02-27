
<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/state";
    import type { PageData } from "./$types";
  
    let { data }: { data: PageData } = $props();
  
    
   
  
    let keywordSelected = $state('');
    let pageSelected = $state(1);
    let pagesArray: any = $state([]);
  
    $effect(() => {
      if (data?.users?.totalPages) {
      
        const arr = [];
        for (let i = 1; i <= data.users.totalPages; i++) {
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
      goto(`/admin/userDetails/${id}`);
    }
    function searchHandler() {
      console.log('keyword selected', keywordSelected)
      goto(`${page.url.pathname}?keyword=${keywordSelected}`);
    }
  
    function pageSelectHandler(pageNumber:number){
     pageSelected = pageNumber;

     let searchUrl 
     if(keywordSelected){
       searchUrl = `?keyword=${keywordSelected||''}&page=${pageSelected}`;
     }else{
        searchUrl = `?page=${pageSelected}`;
     }
  
     
     goto(`${page.url.pathname}${searchUrl}`)
      
    }
  </script>
  
  <section class="w-full min-h-screen bg-primary">
    <div class="w-full flex justify-end">
       <div>
        <input type="text" name="" id=""  bind:value={keywordSelected} >
        <button type="button" onclick={searchHandler}>search</button>
       </div>
    </div>
    <div class="w-full text-2xl text-center">
      <h1>Users</h1>
  </div>
   
    <div class="flex flex-col items-center text-2xl min-h-[70vh]">
    {#if data.users?.users && data.users.users.length > 0}
      {#each data.users.users as user}
        <div class="w-full center-col  m-4 bg-primary-dark p-6 text-white-400">
          <p>Firsr name:{user.firstName}</p>
          <p>Last name:{user.lastName}</p>
          <p>email:{user.email}</p>
          <p>type:{user.userType}</p>
          <div>
            <button
              onclick={detailsHandler.bind(null, user._id)}
              class="btn-second"
              >details
            </button>
          </div>
        </div>
      {/each}
    {:else}
      <p>cannot find users</p>
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
  