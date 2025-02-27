<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/state";
    import type { PageData } from "./$types";
    import { user } from "$src/lib/store";
    let { data }: { data: PageData } = $props();
   
    let job = $state();
    let applicationFee = $state();
    const jobId = page.params.jobId;
    if(data?.job){
        const {_id,createdAt,updatedAt,__v,...rest} = data.job;
        job = rest;
       
    }

    if(data?.fees?.fees?.jobApplicationFee){
      applicationFee = data.fees.fees.jobApplicationFee

    }

async function handlePayment() {

if(!jobId )return

const response = await fetch("/api/jobApplication", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ 
    jobId ,
    
    
  }), // Example amount
});

const data = await response.json();

 if (data.id) {
   const options = {
     key_id: 'rzp_test_OTifL5LsdPUvh9', // Replace with your Razorpay key_id
     amount: data.amount,
     currency: data.currency,
     name: "ORASC",
     description: "job application",
     order_id: data.id,
     handler: function (response) {
       alert("Payment Successful: " + response.razorpay_payment_id);
     },
     prefill: {
       name: $user?.name||'',
       email: $user?.email||'',
      //  contact:$user?.number ||'',
     },
     theme: {
       color: "#F37254",
     },
   };

   if (window.Razorpay) {
     const rzp = new window.Razorpay(options);
     rzp.open();
   } else {
     alert('Razorpay SDK not loaded');
   }
 } else {
   alert("Error creating payment: " + data.error);
 }
}
  
 
  </script>
  
  <section class="bg-primary min-h-screen">
     
    <div class="center-col">
      {#if job}

      <p class="text-2xl">job details</p>
        <table>
         
          <tbody>
           
            {#each Object.entries(job) as [key, value], index (key)}
            <tr class="m-10 py-3 text-2xl">
              <td class=" py-3 px-2">{key}:</td>
              <td>{value}</td>
            </tr>
            {/each}
          </tbody>
        </table>
        {#if applicationFee}
     <div class="min-w-min center-col my-4 bg-primary-dark p-5 rounded-md">
      <div class="text-2xl text-white-400 my-4">
        <p>apply to this job, application fee {applicationFee}</p>
      </div>
      <div>
        <button onclick={handlePayment} class="btn-second">apply</button>
      </div>
     </div>
        
    {/if}
      {:else}
        <p>sorry cannot find result</p>
      {/if}
    </div>
  </section>
  