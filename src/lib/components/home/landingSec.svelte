<script>
      import office1 from '$lib/images/office1.jpg'
      import office5 from '$lib/images/office5.jpg';
      import student2 from '$lib/images/student2.jpg';
      import handshake from '$lib/images/handshake2.jpg';
      import legal4 from '$lib/images/legal4.jpg';
      
</script>
<!-- section1 -->
<section class="bg-primary p-4 w-full sm:flex">
      <div class="my-2 sm:w-[30%] sm:flex sm:items-center">
            <div>
                  <p class="sm:px-5 sm:text-2xl ">ORASC - Overseas Recruitment And Studies Council - India National level special legal council - Apex federation, Governed by Autonomous body, a section 8 ISO Certified public limited company incorporated under ministry of corporate affairs Government of India, and recognised by NITI Aayog </p>
                  <p class="sm:px-5 sm:text-2xl mt-5 ">Empowering your journey towards overseas recruitment and education with expert guidance and support.</p>
            </div>
            
      </div>
      <div class="sm:flex sm:w-[70%]">
            <img src={office1} alt="office" class="my-2 rounded-md sm:w-[50%] sm:p-2 sm:rounded-[10%] ">
            <img src={office5} alt="office" class="my-2 rounded-lg sm:w-[50%] sm:p-2 sm:rounded-[10%] ">
      </div>
</section>

<!-- section2 -->

<section class="bg-primary p-4 ">
      <h2 class="text-2xl mb-3 font-bold sm:text-4xl text-center ">Global Recruitment Services</h2>
      <p class="sm:text-2xl sm:mt-10 text-center">We facilitate overseas recruitment and education for individuals seeking opportunities abroad with expert guidance.</p>
       <div class="sm:flex w-full sm:justify-between">
       <div class="mt-6 sm:w-[30%]">
            <div>
                  <img src={student2} alt="student">
            </div>
            <div class="mt-4">
                  <p class="text-xl sm:text-3xl sm:font-bold">Education Assistance</p>
                  <p class="sm:text-2xl">Our team provides comprehensive support for students pursuing education opportunities overseas, ensuring a smooth transition.</p>
            </div>
       </div>
       <div class="mt-6 sm:w-[30%]">
            <div>
                  <img src={handshake} alt="migration">
            </div>
            <div class="mt-4">
                  <p class="text-xl sm:text-3xl sm:font-bold">Migration Support</p>
                  <p class="sm:text-2xl">We assist clients with migration processes, ensuring compliance with legal requirements for a successful relocation.</p>
            </div>
       </div>
       <div class="mt-6 sm:w-[30%]">
            <div>
                  <img src={legal4} alt="legal">
            </div>
            <div class="mt-4">
                  <p class="text-xl sm:text-3xl sm:font-bold">Legal Guidance</p>
                  <p class="sm:text-2xl">Our legal experts guide you through the complexities of overseas recruitment and education regulations.</p>
            </div>
       </div>
      </div>
</section>