<script lang="ts">
 
    import type { PageData ,ActionData} from './$types';

    // let { data }: { data: PageData } = $props();
    import type { PageProps } from './$types';
    let { data ,form}: PageProps = $props();
    import { user } from '$src/lib/store';
    import { goto } from '$app/navigation';
    
    // if(!$user){
    //   goto('/signin')
    // }
    // export let form: ActionData;

    console.log('data', data)
  
</script>
 
  <div class="bg-primary text-center">
    <h1 class="text-4xl">Candidate registration</h1>
    
 </div>
 {#if form?.success}
      <div class="text-2xl text-center bg-primary ">
        <p>Data updated successfully</p>
      </div>   
 {/if}
<div class="bg-primary  pt-16 flex justify-center ">
    <form action="" enctype="multipart/form-data" method="post"  class="bg-primary-dark mb-10 w-[90vw]  sm:w-[40vw] md:w-[40vw] lg:w-[40vw]  p-5 rounded-lg">
      <div class="input-div">
        <label for="firstName" class="input-label">First name:</label><br>
        <input type="text" id="firstName" name="firstName" class="input-form" 
        value={data?.data?.firstName}
       />
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
        <label for="date-of-birth" class="input-label">Date-of-birth:</label><br>
        <input type="date" id="date-of-birth" name="dateOfBirth" class="input-form" value={data?.data?.dateOfBirth} />
        {#if form?.errors?.dateOfBirth}
        <p class="text-red-500">{form.errors.dateOfBirth[0]}</p>
      {/if}
      </div>
      <div class="input-div">
        <label for="gender" class="input-label">Gender</label><br>
        <select name="gender" id="gender" class="input-form" value={data?.data?.gender} >
            <option value="">Please choose an option</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">others</option>
        </select>
        {#if form?.errors?.gender}
        <p class="text-red-500">{form.errors.gender[0]}</p>
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
        <label for="state" class="input-label">State:</label><br>
        <input type="text" id="state" name="state" class="input-form" value={data?.data?.state} />
        {#if form?.errors?.state}
        <p class="text-red-500">{form.errors.state[0]}</p>
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
        <label for="pincode" class="input-label">pincode:</label><br>
        <input type="number" id="pincode" name="pincode" class="input-form" value={data?.data?.pincode} />
        {#if form?.errors?.pincode}
        <p class="text-red-500">{form.errors.pincode[0]}</p>
      {/if}

      </div>
      <div class="input-div">
        <label for="phone-number" class="input-label">phone-number:</label><br>
        <input type="number" id="phone-number" name="number" class="input-form" value={data?.data?.number} />
        {#if form?.errors?.number}
        <p class="text-red-500">{form.errors.number[0]}</p>
      {/if}
      </div>
      <div class="input-div">
        <label for="qualification" class="input-label">Qualification</label><br>
        <select name="qualification" id="qualification" class="input-form" value={data?.data?.qualification} >
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
        <label for="preferred jobs" class="input-label">Preferred jobs:</label><br>
        <textarea  id="preferredJobs" name="preferredJobs" class="input-form" value={data?.data?.preferredJobs} ></textarea>
        {#if form?.errors?.preferredJobs}
        <p class="text-red-500">{form.errors.preferredJobs[0]}</p>
      {/if}
      </div>
      <div class="input-div">
        <label for="preferred country" class="input-label">Preferred countries:</label><br>
        <textarea  id="preferredCountry" name="preferredCountries" class="input-form" value={data?.data?.preferredCountries} ></textarea>
        {#if form?.errors?.preferredCountries}
        <p class="text-red-500">{form.errors.preferredCountries[0]}</p>
      {/if}
        
      </div>
      <div class="input-div">
        <label for="cv" class="input-label">Upload cv :</label>
        <input type="file" id="myFile" name="cv">
        <p>please add pdf file</p>
        {#if form?.errors?.cv}
        <p class="text-red-500">{form.errors.cv[0]}</p>
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
