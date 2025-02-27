<script lang="ts">
  import { goto, invalidate } from "$app/navigation";
  import { page } from "$app/state";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();

  const user = data?.user;

  let userTypeSelected = $state();

  console.log(data);


  async function userTypeChangeHandler(){
  console.log('user type', userTypeSelected)
  if(!userTypeSelected) return

  const response = await fetch(page.url.pathname, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({
       userType:userTypeSelected,
       
      }), // Example amount
   });

   invalidate(page.url.href)

   
 }
  
</script>

<section class="bg-primary min-h-screen">
  <div class="center-col">
    {#if data?.user}
      <table>
        <tbody>
          {#each Object.entries(data.user) as [key, value], index (key)}
            <tr class="m-10 py-3 md:text-2xl">
              <td class=" py-3 px-2">{key}:</td>
              <td>{value}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    {:else}
      <p>sorry cannot find result</p>
    {/if}
  </div>
  <div class="text-2xl my-5 center-col">
    <p>change user type</p>
    <div >
    
      <select bind:value={userTypeSelected}  name="userType" id="userType" class="my-6">
        <option value="">select one</option>
        <option value="user">user</option>
        <option value="employe">employe</option>
      </select>
        <br>
       <button onclick={userTypeChangeHandler} class="btn-second">submit</button>
    </div>

    <!-- {#if user}
    <div class="center-col text-3xl">
      <div>
        first name: {user.firstName}
      </div>  
      <div>
        last name: {user.lastName}
      </div>  
      <div>
        email: {user.email}
      </div>  
      <div>
        type: {user.userType}
      </div>  
      <div>
        student registration id: {user.studentRegistrationId ||''}
      </div>  
      <div>
        student registration approve: {user.studentRegistrationApprove ||''}
      </div>  
      <div>
        university registration id: {user.universityRegistrationId ||''}
      </div>  
      <div>
        student consultant registration id: {user.studentConsultantRegistrationId ||''}
      </div>  
      <div>
        student consultant registration id: {user.studentConsultantRegistrationId ||''}
      </div>  
      
    </div>
    {:else}
    <p>sorry cannot find result</p>
    {/if} -->
  </div>
</section>
