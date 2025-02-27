<script lang="ts">
    import { page } from "$app/state";
    import type { PageData } from "./$types";
    import { invalidate } from "$app/navigation";
 
  let { data }: { data: PageData } = $props();

  let statusSelected = $state('pending');
  let result = $state('pending');

  console.log('daata', data)
  


 async function statusUpdateHandler(){
  
   if(!statusSelected) return

   const response = await fetch(page.url.pathname, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status:statusSelected,
        result
       }), // Example amount
    });

    invalidate(page.url.href)

    
  }

  function fileDownload(f) {
 
    const data = Uint8Array.from(f.data.data);
    

    const blob = new Blob([data.buffer], {
      type: "application/pdf",
    });

    const url = window.URL.createObjectURL(blob);
    console.log('url', url)
    window.open(url, '_blank');
    window.URL.revokeObjectURL(url);
  }
</script>

<div class="bg-primary flex justify-center">
    <div class="flex">
        <p for="status" class="text-xl pt-2">status</p>
        <select
          name="status"
          id="status"
          class="border-0 bg-primary text-xl text-white-400 mx-4"
          bind:value={statusSelected}
        >
         
          <option value="pending">pending</option>
          <option value="processing">processing</option>
          <option value="completed">completed</option>
        </select>
    </div>
  <div class="flex">
    <p for="result" class="text-xl pt-2">result</p>
     <select
    name="result"
    id="result"
    class="border-0 bg-primary text-xl text-white-400 mx-4"
    bind:value={result}
  >
    
    <option value="pending">pending</option>
    <option value="rejected">rejected</option>
    <option value="accepted">accepted</option>
     </select>
  </div>
  
  <button onclick={statusUpdateHandler} class="btn-second">update</button>
</div>

<div class="min-h-screen w-full bg-primary py-10 pb-40">
  {#if !data.application || !data.course || !data.student}
    <div class="min-h-screen center-col">
      <p>cannot find result</p>
    </div>
  {/if}

  {#if data.application}
    <div class="text-center text-3xl">
      <p>Application details</p>
    </div>

    <div class="center-col">
      <table>
        <tbody>
          {#each Object.entries(data.application) as [key, value], index (key)}
            <tr class="m-10 py-3 md:text-2xl">
              <td class=" py-3 px-2">{key}:</td>

              <td>{value}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
  {#if data.course}
    <div class="bg-primary-dark text-white-400">
      <div class="text-center text-3xl">
        <p>course details</p>
      </div>
      <div class="center-col">
        <table>
          <tbody>
            {#each Object.entries(data.course) as [key, value], index (key)}
              <tr class="m-10 py-3 md:text-2xl">
                <td class=" py-3 px-2">{key}:</td>

                <td>{value}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  {/if}
  {#if data.student}
    <div class="text-center text-3xl">
      <p>student details</p>
    </div>

    <div class="center-col">
      <div class="data-wrapper">
        <p class="data-cell">first name:</p>
        <p class="data-cell">{data.student.firstName}</p>
      </div>
      <div class="data-wrapper">
        <p class="data-cell">last name:</p>
        <p class="data-cell">{data.student.lastName}</p>
      </div>
      <div class="data-wrapper">
        <p class="data-cell">email:</p>
        <p class="data-cell">{data.student.email}</p>
      </div>
      <div class="data-wrapper">
        <p class="data-cell">gender:</p>
        <p class="data-cell">{data.student.gender}</p>
      </div>
      <div class="data-wrapper">
        <p class="data-cell">data of birth:</p>
        <p class="data-cell">{data.student.dateOfBirth}</p>
      </div>
      <div class="data-wrapper">
        <p class="data-cell">qualification:</p>
        <p class="data-cell">{data.student.qualification}</p>
      </div>
      <div class="data-wrapper">
        <p class="data-cell">phone-number:</p>
        <p class="data-cell">{data.student.number}</p>
      </div>
      <div class="data-wrapper">
        <p class="data-cell">address:</p>
        <p class="data-cell">{data.student.address}</p>
      </div>
      <div class="data-wrapper">
        <p class="data-cell">city:</p>
        <p class="data-cell">{data.student.city}</p>
      </div>
      <div class="data-wrapper">
        <p class="data-cell">state:</p>
        <p class="data-cell">{data.student.state}</p>
      </div>
      <div class="data-wrapper">
        <p class="data-cell">country:</p>
        <p class="data-cell">{data.student.country}</p>
      </div>
      <div class="data-wrapper">
        <p class="data-cell">pincode:</p>
        <p class="data-cell">{data.student.pincode}</p>
      </div>
      <div class="data-wrapper">
        <p class="data-cell">preferred courses:</p>
        <p class="data-cell">{data.student.preferredCourses}</p>
      </div>
      <div class="data-wrapper">
        <p class="data-cell">preferred countries:</p>
        <p class="data-cell">{data.student.preferredCountries}</p>
      </div>
      <div class="data-wrapper">
        <p class="data-cell">registration:</p>
        <p class="data-cell">{data.student.registrationApprove}</p>
      </div>
      <div class="data-wrapper">
        <p class="data-cell">cv:</p>
        <p class="data-cell">{data.student.cv.fileName}</p>
        <button
          class="bg-primary-compliment px-5 md:btn-second"
          onclick={fileDownload.bind(null, data.student.cv)}>download</button
        >
      </div>
    </div>
  {/if}
</div>
