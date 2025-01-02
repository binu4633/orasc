<script>
      import { onMount } from 'svelte';
      
      import globe from '$lib/images/globe.mp4';
      import globe2 from '$lib/images/globe2.mp4';
      import map from '$lib/images/map.mp4';
    //   let  videoBox ;
    //   onMount(()=>{

    //       console.log('video element', videoBox)
    //       videoBox.play()
    //   })
</script>

<div class="bg-primary">

 <!-- video bg -->
  <div class="relative w-full h-60 sm:h-[100vh]">
      <video bind:this={videoBox} src={map} autoplay="autoplay" muted loop type="video/mp4" track kind="captions" class="w-full h-full absolute object-cover"></video>
      <div class="absolute top-0 left-0 w-full h-60 sm:h-[100vh] flex items-center justify-center">
        <div class="text-black px-3 sm:px-32 bg-white-400 bg-opacity-5">
        <p class="text-xl sm:text-4xl">A Gateway to Overseas Opportunities</p>
        <p class="text-xs sm:text-2xl"><span class="font-bold"> ORASC - Overseas Recruitment And Studies Council - India</span> National Level Special Legal Council - Apex Federation, Governed by Autonomous Body, A Section 8 ISO Certified Public Limited Company Incorporated under Ministry of Corporate Affairs, Government of India, And Recognised by NITI Ayog ,</p>
        <div class="flex justify-center">
          <div class="bg-primary-dark max-w-fit px-2 mt-1 rounded-full sm:px-8 sm:py-4">
            <a href="/about" class="sm:text-2xl">Learn more</a>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>