<script lang="ts">
  import { number } from "zod";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
  
  let countries: string[] = $state([]);
  let editIndex: any = $state(null);
  let apiResult:any = $state(false)

  if(data.countries){
    countries = data.countries
  }

  function editHandler(index: string | number) {
    apiResult = false;
  
    if (editIndex === index) {
      editIndex = null;
    } else {
      editIndex = index;
    }
  }
  function countryInputChangeHandler(index, event) {
    
    countries[index] = event.target.value;
  }
  function addCountryHandler(){
    countries.push('add country');
    apiResult = false;
  }
  function deleteCountryHandler(index:any){
  
   const country = countries[index];
  
   const newCountries =   countries.filter(cl=>cl !== country);
  
   countries = newCountries;
  }

  async function updateCountriesHandler(){
    const response = await fetch('/admin/settings/countries',{
      method:"POST",
      body: JSON.stringify(countries),
    })
    const result =await response.json();
   
    apiResult = result.success;
  }
</script>

<div class="w-full min-h-screen bg-primary flex flex-col items-center">
  <h1 class="text-2xl md:text-4xl">countries</h1>
  {#if apiResult === true}
      <p>data updated successfully</p>
  {/if}
  <!-- <table class="md:text-2xl my-5">
    <tbody>
      {#each countries as country, index}
        <tr>
          <td class="px-10">{countries[index]}</td>
          <td>
            <button onclick={editHandler.bind(null, index)} class="bg-primary-compliment mx-2 my-2 p-1 px-4 text-white-400">
              {#if editIndex === index}
                <p>confirm</p>
              {:else}
                <p>edit</p>
              {/if}
            </button>
            <button onclick={deleteCountryHandler.bind(null,index)}  class="bg-primary-compliment mx-2 my-2 p-1  px-4 text-white-400">delete</button>
          </td>
          
        </tr>
        {#if editIndex === index}
        <tr>
          <td>
            <input
              type="text"
              value={countries[editIndex]}
              oninput={countryInputChangeHandler.bind(null, index)}
              class="w-[100%]"
            />
          </td>
        </tr>
      {/if}
       
      {/each}
    </tbody>
  </table> -->
  <div class="md:text-2xl my-5">
    <div>
      {#each countries as country, index}
   
          <div class="flex">
            <div class="p-1 my-2  md:px-10">{countries[index]}</div>
            <div>
              <button onclick={editHandler.bind(null, index)} class="bg-primary-compliment mx-2 my-2 p-1 px-4 text-white-400">
                {#if editIndex === index}
                  <p>confirm</p>
                {:else}
                  <p>edit</p>
                {/if}
              </button>
              <button onclick={deleteCountryHandler.bind(null,index)}  class="bg-primary-compliment mx-2 my-2 p-1  px-4 text-white-400">delete</button>
          </div>
         
         
          
        </div>
        {#if editIndex === index}
        <div>
          <div>
            <input
              type="text"
              value={countries[editIndex]}
              oninput={countryInputChangeHandler.bind(null, index)}
              class="w-[100%]"
            />
          </div>
        </div>
      {/if}
       
      {/each}
    </div>
  </div>
  <div>
    <button onclick={addCountryHandler} class='btn-second'>add</button>
    <button onclick={updateCountriesHandler} class='btn-second'>update</button>
  </div>
  
</div>
