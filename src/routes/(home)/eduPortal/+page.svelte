<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
    import { user } from '$src/lib/store';
   
</script>

<main class="bg-primary">
   <section class="py-6 px-5">

       <div class="flex flex-col justify-center items-center my-5">
        {#if !$user}
        <div class="bg-primary-dark rounded-full px-6 py-2 text-white animate-sizeAnim">
            <p class="sm:text-xl ">please signin before registering </p>
        </div>

        <div class="text-2xl">
            <a href="/login" >signin/login <span >&rarr;</span> </a>
        </div>
        {/if}
       
       
       </div>

       <!-- registration options -->
       <div class="flex flex-col items-center sm:flex-row sm:justify-center sm:text-2xl py-10">
           <a href="/studentRegistration">
           <div class="w-36 p-2 bg-primary-dark text-white-400 shadow-3xl m-4 sm:w-52">
            <p>Student <br> registration</p>
           </div>
           </a>
           <a href="/universityRegistration">
           <div class="w-36 p-2 bg-primary-dark text-white-400 shadow-3xl m-4 sm:w-52">
            <p>University <br> registration</p>
           </div>
           </a>
           <a href="/studentAgentRegistration">
           <div class="w-36 p-2 bg-primary-dark text-white-400 shadow-3xl m-4 sm:w-52">
            <p>Agent/consultant <br> registration</p>
           </div>
           </a>
          
       </div>

       <!-- details -->
        <div class="px-4 sm:px-14 my-5">
            <h3 class="text-2xl font-semibold py-2 sm:text-3xl">Welcome to the Orasc Education Portal</h3>
            <p class="sm:text-2xl">The Orasc Education Portal is a revolutionary platform designed to bridge the gap between students and universities around the globe. By connecting aspiring students with prestigious educational institutions, we strive to facilitate the best education opportunities available today.</p>
        </div>
        <div class="px-4 sm:px-14 my-5">
            <h3 class="text-2xl font-semibold py-2 sm:text-3xl">Find Right Courses and Universities</h3>
            <p class="sm:text-2xl">At Orasc, we understand that choosing the right course can be overwhelming. That’s why we have created an extensive database of courses offered by universities worldwide, enabling students to easily search and compare options. Whether you are looking for undergraduate programs, postgraduate degrees, or short courses, the Orasc Education Portal has you covered.</p>
        </div>
        <div class="px-4 sm:px-14 my-5">
            <h3 class="text-2xl font-semibold py-2 sm:text-3xl">Register Today and Start Your Journey</h3>
            <p class="sm:text-2xl">Both students and universities can register on our portal to access exclusive resources and support. For students, this means personalized guidance to find the right course that aligns with your academic goals and career aspirations. For universities, registering provides an opportunity to connect with potential students and showcase your unique programs. Join us today and take the first step toward unlocking your future with the Orasc Education Portal.</p>
        </div>
   </section>
    
</main>