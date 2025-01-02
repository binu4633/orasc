<script>
      import europe from '$lib/images/europe.mp4';
      import student1 from '$lib/images/student-about1.jpg';
      import student2 from '$lib/images/studentabout2.jpg';
      
</script>

<div class="bg-primary">

      <!-- video bg -->
       <div class="relative w-full h-60 sm:h-[40vh]">
           <video src={europe} autoplay="autoplay" muted loop type="video/mp4" track kind="captions" class="w-full h-[100%] absolute object-cover"></video>
           <div class="absolute top-0 left-0 w-full h-60 sm:h-[100%] flex items-center justify-center">
             <div class="text-white bg-primary-dark bg-opacity-75 px-3 sm:px-32">
             <p class="text-xl sm:text-4xl">ORASC Empowering Your Global Visions</p>
             
             
             
           </div>
         </div>
       </div>

       <div class=" sm:grid sm:grid-cols-2 sm:text-2xl">
           <section class="p-4 sm:p-10">
             <p class="my-5"><span class="font-bold"> ORASC - Overseas Recruitment And Studies Council - India</span> National level special legal council - Apex federation, Governed by Autonomous body, a section 8 ISO Certified public limited company incorporated under ministry of corporate affairs Government of India, and accredited by <span class="font-bold">NITI Aayog </span> , </p>
             <p class="my-5">ORASC is dedicated to facilitating overseas recruitment and education, assisting individuals and entities in their migration journey through our expertise and support as a national level special legal council.</p>
             <p class="my-5">The National Level Apex Federation serves as a pivotal organization for authorized overseas study consultancies and recruitment agencies recognized by the Ministry of External Affairs. This federation is dedicated to promoting the interests of its members while ensuring adherence to best practices and ethical standards within the industry. By providing a platform for collaboration and resource sharing, the federation empowers its members to enhance their services and support students seeking opportunities abroad. </p>
             <p class="my-5">Through various initiatives, it facilitates knowledge exchange and professional development, enabling consultancies and recruiters to remain updated on global trends in education and employment. Ultimately, this federation plays a crucial role in shaping a well-regulated environment for foreign studies and recruitment, fostering trust and reliability among stakeholders in the international education landscape.</p>
           </section> 
           <div class="flex items-center justify-center">
                <img src={student1} alt="student" class="hidden sm:block sm:h-[100vh] sm:mt-20">
                <img src={student2} alt="student" class="block sm:hidden" >
           </div>
       </div>
     </div>