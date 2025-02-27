<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import { user } from "$src/lib/store";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();

  
  const courseId = page.params.courseId;
 
 

 
  let course = $state();
  let applicationFee = $state();

  if (data?.course) {
    const { _id, createdAt, updatedAt, __v, ...rest } = data.course;
    course = rest;
    
  }



  if (data?.fees?.fees?.courseApplicationFee) {
    applicationFee = data.fees.fees.courseApplicationFee;
  }

  async function handlePayment() {

    if(!courseId )return
    

    const response = await fetch("/api/courseApplication", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        courseId ,
        
        
      }), // Example amount
    });

    const data = await response.json();

     if (data.id) {
       const options = {
         key_id: 'rzp_test_OTifL5LsdPUvh9', // Replace with your Razorpay key_id
         amount: data.amount,
         currency: data.currency,
         name: "ORASC",
         description: "course application",
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
    {#if course}
      <table>
        <tbody>
          {#each Object.entries(course) as [key, value], index (key)}
            <tr class="m-10 py-3 text-2xl">
              <td class=" py-3 px-2">{key}:</td>
              {#if key == "courseLink"}
                <td><a href={value}>{value}</a></td>
              {:else}
                <td>{value}</td>
              {/if}
            </tr>
          {/each}
        </tbody>
      </table>

      {#if applicationFee}
        <div class="min-w-min center-col my-4 bg-primary-dark p-5 rounded-md">
          <div class="text-2xl text-white-400 my-4">
            <p>apply to this course, application fee {applicationFee}</p>
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
