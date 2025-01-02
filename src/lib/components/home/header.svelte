<script>
      import { fly } from 'svelte/transition';
     
      import { goto } from '$app/navigation';
      import logo from '$lib/images/logo.png';
      let menuLargePortHover =false;
      let mobileMenuOn=false;
      let mobileMenuPortalOn= false;
      function menuLargerPortalEnter(){
            console.log('mouse etering')
            menuLargePortHover= true;
            console.log(menuLargePortHover)
      }
      function menuLargerPortalLeave(){
            menuLargePortHover= false;
            console.log(menuLargePortHover)
      }

      function mobileMenuClickHandler(){
       
        mobileMenuOn = !mobileMenuOn;
        console.log('moble menu clicked', mobileMenuOn)
      }

      function mobileMenuPortalHandler(){
            mobileMenuPortalOn = !mobileMenuPortalOn;
            console.log('mobile menu portal', mobileMenuPortalOn)
      }

      function onHomeHandler(){
          goto('/')
          mobileMenuOn=false
      }
      function onAboutHandler(){
          goto('/about');
          mobileMenuOn=false
      }
      function onServicesHandler(){
          goto('/services');
          mobileMenuOn=false
      }
      function onContactHandler(){
          goto('/contact');
          mobileMenuOn=false
      }


</script>
<header class="flex bg-primary w-full h-20 items-center p-2 ">

      <div class="w-24">
         <img src={logo} alt="">
      </div>
       <a href="/test">test</a>
       <a href="/admin">admin</a>
      <div class="ml-auto mr-10 hidden sm:block">
            <nav class="flex">
                  <div class="menu-l-d"><button class="menu-btn">
                        <a href="/">home</a>
                  </button></div>
                  <div class="menu-l-d"><button class="menu-btn"><a href="/about">about</a></button></div>
                  <div class="menu-l-d"><button class="menu-btn"><a href="/services">services</a></button></div>

                  
                  <div class="menu-l-d " 
                 ><button class="menu-btn w-32 " on:mouseover={menuLargerPortalEnter}
                  on:mouseleave={menuLargerPortalLeave}
                  on:focus={()=>{}}
                  >register
                   <span class="text-[12px] font-extrabold">v</span>    </button>
                  <div class={`absolute w-48 bg-primary flex-col ${menuLargePortHover?'block':'hidden'}` } on:mouseover={menuLargerPortalEnter}
                  
                  on:mouseleave={menuLargerPortalLeave} 
                  
                  >
                        <button class="block mx-2 my-1 menu-btn">edu portal</button>
                        <button class="block mx-2 my-1 menu-btn">job portal</button>
                  
                        <button class="block mx-2 my-1 menu-btn">migration portal</button>
                  </div>
                  </div>
                  <div class="menu-l-d"><button class="menu-btn"><a href="/contact">contact</a></button></div>
                  <div class="menu-l-d"><button class="menu-btn">signin</button></div>
            </nav>
      </div>

      <div  class="sm:hidden ml-auto relative">
            <button on:click={mobileMenuClickHandler}>
                  <div class=" w-7 h-[3px] m-1 bg-black">.</div>
                  <div class={`w-7 h-[3px] m-1 bg-black ${mobileMenuOn?'translate-x-[-10px]':'translate-x-0'}`}>.</div>
                  <div class="w-7 h-[3px] m-1 bg-black">.</div>
            </button>
      </div>

 </header>

 
  <div  class={`w-full h-[300px] bg-primary fixed top-20 z-10 ease-in duration-500 sm:hidden  ${mobileMenuOn?'block translate-x-[0%]':'hidden translate-x-[100%]'}`} >
      <div class="relative">
            <nav class="flex-col absolute right-0">
                  <div class="menu-m-d"><button on:click={onHomeHandler}>home</button></div>
                  <div class="menu-m-d" ><button on:click={onAboutHandler}>about</button></div>
                  <div class="menu-m-d"><button on:click={onServicesHandler}>services</button></div>
                  <div class="menu-m-d w-20" 
                 ><button on:click={mobileMenuPortalHandler}>register
                   <span class="text-[12px] font-extrabold">v</span>    </button>
                  
                   {#if mobileMenuPortalOn}
                   <div class={`relative ml-[-20px] w-36 bg-primary flex-col ` } 
                   >
                   
                         <button class="block mx-2 my-1">edu port</button>
                         <button class="block mx-2 my-1">job port</button>
                         <button class="block mx-2 my-1">migration port</button>
                   
                        
                   </div>
                   {/if}

                  
                  </div>
                  <div class="menu-m-d"><button on:click={onContactHandler}>contact</button></div>
                  <div class="menu-m-d"><button>signin</button></div>
            </nav>
      </div>
      
     </div> 