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
           <a href="/jobCandidateRegistration">
           <div class="w-36 p-2 bg-primary-dark text-white-400 shadow-3xl m-4 sm:w-52">
            <p>Candidate <br> registration</p>
           </div>
           </a>
           <a href="/jobEmployerRegistration">
           <div class="w-36 p-2 bg-primary-dark text-white-400 shadow-3xl m-4 sm:w-52">
            <p>Employer <br> registration</p>
           </div>
           </a>
           <a href="/jobConsultancyRegistration">
           <div class="w-36 p-2 bg-primary-dark text-white-400 shadow-3xl m-4 sm:w-52">
            <p>Agent/consultant <br> registration</p>
           </div>
           </a>
          
       </div>

       <!-- details -->
        <div class="px-4 sm:px-14 my-5">
            <h3 class="text-2xl font-semibold py-2 sm:text-3xl">Orasc Job Portal</h3>
            <p class="sm:text-2xl">The Orasc job portal serves as a dynamic bridge connecting job seekers with employers in international markets. In today’s highly competitive landscape, effectively reaching out to the right candidates or job openings is of paramount importance. This platform caters to the needs of both job seekers looking for opportunities abroad and employers searching for suitable talent.</p>
        </div>
        <div class="px-4 sm:px-14 my-5">
            <h3 class="text-2xl font-semibold py-2 sm:text-3xl">Benefits for Job Seekers</h3>
            <p class="sm:text-2xl">For individuals aspiring to work in foreign countries, Orasc offers a streamlined process to explore diverse job listings. The user-friendly interface allows job seekers to filter opportunities based on their skills, qualifications, and preferred locations. With tailored job recommendations, candidates can find positions that align closely with their professional aspirations.</p>
        </div>
        <div class="px-4 sm:px-14 my-5">
            <h3 class="text-2xl font-semibold py-2 sm:text-3xl">Employers’ Advantages</h3>
            <p class="sm:text-2xl">Employers leveraging the Orasc job portal gain access to a vast pool of global talent. The platform not only simplifies the recruitment process, but also enhances the efficiency of finding the right candidate. By showcasing their company culture and values, businesses can attract job seekers who resonate with their mission, ensuring a good fit.</p>
            <p class="sm:text-2xl">In conclusion, the Orasc job portal is an invaluable resource for both job seekers aiming to broaden their horizons and employers looking to hire exceptional talent. As the workforce becomes increasingly global, Orasc stands at the forefront, facilitating meaningful connections that drive success across borders.</p>
        </div>
   </section>
    
</main>