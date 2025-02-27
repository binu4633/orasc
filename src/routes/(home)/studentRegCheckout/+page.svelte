<script lang="ts">
  import { goto } from "$app/navigation";
  import { user } from "$src/lib/store";
  import type { PageData } from "./$types";
  
  let { data }: { data: PageData } = $props();

  
  if(!$user){
      goto('/signin')
    }

  let registrationFee = $state();
  if (data?.fees?.fees?.studentRegistrationFee) {
    registrationFee = data.fees.fees.studentRegistrationFee;
  }
  
  async function handlePayment() {
   
    const response = await fetch("/api/studentRegistration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: registrationFee, currency: "INR" }), // Example amount
    });

    const data = await response.json();
    
    
    if (data.id) {
      const options = {
        key_id: 'rzp_test_OTifL5LsdPUvh9', // Replace with your Razorpay key_id
        amount: data.amount,
        currency: data.currency,
        name: "ORASC",
        description: "student registration",
        order_id: data.id,
        handler: function (response) {
          alert("Payment Successful: " + response.razorpay_payment_id);
        },
        prefill: {
          name: $user?.name||'',
          email: $user?.email||'',
          contact:$user?.number ||'',
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

<div class="w-full min-h-screen bg-primary text-center pt-10">
  <p class="text-4xl font-semibold my-10">
    complete your registration with checkout
  </p>
  {#if registrationFee}
    <p class="text-2xl my-5">
      registation fee : <span class="text-white-400">{registrationFee}</span>
    </p>
    <div class="w-full flex justify-center">
      <p class=" max-w-fit text-3xl px-5 border-b-2 border-black my-5">
        summary
      </p>
    </div>
    <p class="text-2xl my-4">tottal :{registrationFee}</p>
    <div>
      <button onclick={handlePayment} class="btn-second">order</button>
    </div>
  {:else}
    <p>something went wrong please try later</p>
  {/if}
</div>
