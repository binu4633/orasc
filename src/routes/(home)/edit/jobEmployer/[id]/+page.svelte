<script lang="ts">
    import type { PageData ,ActionData} from './$types';
    import type { PageProps } from './$types';
    let { data ,form}: PageProps = $props();
  
</script>
<div class="bg-primary text-center">
  <h1 class="text-4xl">Edit employer registration</h1>
</div>
{#if form?.success}
<div class="text-2xl text-center bg-primary ">
  <p>Data updated successfully</p>
</div>   
{/if}
<div class="w-full min-h-screen bg-primary">
    <div class="bg-primary  pt-16 flex justify-center ">
        <form action="" method="post" class="bg-primary-dark mb-10 w-[90vw]  sm:w-[40vw] md:w-[40vw] lg:w-[40vw]  p-5 rounded-lg">
            <div class="input-div">
                <label for="firstName" class="input-label">First name:</label><br>
                <input type="text" id="firstName" name="firstName" class="input-form" value={data?.data?.firstName} />
                {#if form?.errors?.firstName}
                <p class="text-red-500">{form.errors.firstName[0]}</p>
               {/if}
              </div>
              <div class="input-div">
                <label for="lastName" class="input-label">Last name:</label><br>
                <input type="text" id="lastName" name="lastName" class="input-form" value={data?.data?.lastName} />
                {#if form?.errors?.lastName}
                <p class="text-red-500">{form.errors.lastName[0]}</p>
               {/if}
              </div>
              <div class="input-div">
                <label for="businessName" class="input-label">Business name:</label><br>
                <input type="text" id="businessName" name="businessName" class="input-form" value={data?.data?.businessName} />
                {#if form?.errors?.businessName}
                <p class="text-red-500">{form.errors.businessName[0]}</p>
               {/if}
              </div>
              <div class="input-div">
                <label for="email" class="input-label">email:</label><br>
                <input type="email" id="email" name="email" class="input-form" value={data?.data?.email} />
                {#if form?.errors?.email}
                <p class="text-red-500">{form.errors.email[0]}</p>
               {/if}
               <p class="text-white-400">email must be login email</p>
              </div>
              <div class="input-div">
                <label for="website" class="input-label">website:</label><br>
                <input type="text" id="website" name="website" class="input-form" value={data?.data?.website}/>
                {#if form?.errors?.website}
                <p class="text-red-500">{form.errors.website[0]}</p>
               {/if}
              </div>
              <div class="input-div">
                <label for="address" class="input-label">Address:</label><br>
                <textarea  id="address" name="address" class="input-form" value={data?.data?.address} ></textarea>
                {#if form?.errors?.address}
                <p class="text-red-500">{form.errors.address[0]}</p>
               {/if}
              </div>
              <div class="input-div">
                <label for="city" class="input-label">City:</label><br>
                <input type="text" id="city" name="city" class="input-form" value={data?.data?.city} />
                {#if form?.errors?.city}
                <p class="text-red-500">{form.errors.city[0]}</p>
               {/if}
            
              </div>
              <div class="input-div">
                <label for="country" class="input-label">Country:</label><br>
                <input type="text" id="country" name="country" class="input-form" value={data?.data?.country} />
                {#if form?.errors?.country}
                <p class="text-red-500">{form.errors.country[0]}</p>
               {/if}
              </div>
              <div class="input-div">
                <label for="phone-number" class="input-label">phone-number:</label><br>
                <input type="number" id="number" name="number" class="input-form" value={data?.data?.number} />
                {#if form?.errors?.number}
                <p class="text-red-500">{form.errors.number[0]}</p>
               {/if}
              </div>
              <div>
                {#if form?.errors?.error}
                   <p class="text-red-500">{form.errors.error}</p>
                {/if}
              </div>
              <div class="flex justify-end">
                <button class="btn-second">submit</button>
             </div>
        </form>
    </div>
</div>