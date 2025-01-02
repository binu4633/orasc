<script>
  import worker1 from '$lib/images/workers1.jpg';
  import worker2 from '$lib/images/workers2.jpg';
  import student5 from '$lib/images/student5.jpg';
  import student4 from '$lib/images/student4.jpg';
</script>
<div class="bg-primary">
   <h4 class="text-center text-2xl sm:text-4xl sm:py-8">Gallery Showcase</h4>
   <div class="w-full flex justify-center">
      <p class="w-[90%] text-sm text-center sm:text-2xl sm:py-3">Explore our achievements in overseas recruitment and education initiatives.</p>
   </div>

   <!-- gallery -->

   <div class="grid grid-cols-2 gap-2 pb-4 sm:grid-cols-4">
      <img src={worker1} alt="" class="object-cover p-2">
      <img src={worker2} alt="" class="object-cover p-2">
      <img src={student4} alt="" class="object-cover p-2 ">
      <img src={student5} alt="" class="object-cover p-2">
   </div>
   
</div>