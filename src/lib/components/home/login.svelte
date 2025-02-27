<script lang="ts">
//      import type {HTMLInputElement } from './$types';
    // import { page } from '$app/stores';
    import { page } from '$app/state';
    import eyeOpen from '$lib/images/eye-open.svg';
    import eyeClosed from '$lib/images/eye-closed.svg';
    let loginPasswordInput: HTMLInputElement;
    let loginPasswordImg:HTMLImageElement;
    
 
    function passwordShowHandler(){
       
        if(loginPasswordInput.type ==='password'){
          loginPasswordInput.type ='text'
          loginPasswordImg.src = eyeOpen
        }else{
            loginPasswordInput.type ='password';
            loginPasswordImg.src = eyeClosed
        }
    }
</script>

<div class="pt-10">
      <p class="text-center text-2xl">login</p>
  </div>
  <!-- login form -->
  <div class="pt-6 flex justify-center ">
      <form  method="post" action="/signin?/login" class="bg-primary-dark mb-10 w-[90vw]  sm:w-[40vw] md:w-[40vw] lg:w-[40vw]  p-5 rounded-lg">
          <div class="input-div">
              <label for="email" class="input-label">email:</label><br>
              <input type="email" id="email" name="email" class="input-form" value={'as@lkb'} required/>
              
            </div>
          <div class="input-div">
              <label for="password" class="input-label">password:</label><br>
              <div class="flex items-center">
                  <input type="password" id="password" name="password" class="input-form  w-[90%] border-none" value={''} 
                  bind:this={loginPasswordInput}
                  required/>
                  <button type="button" class="w-20 h-10 bg-white border-2" onclick={passwordShowHandler}>
                      <img src={eyeClosed} alt=""
                      bind:this={loginPasswordImg} class="w-full h-full object-contain ">
                  </button>
              </div>
             
            </div>
           {#if page.form?.loginError}
              <p class="text-red-500">{page?.form?.loginError}</p>
           {/if}

         <div class="flex justify-end">
            <button class="btn-second">submit</button>
         </div>
         <div class="text-white-400">
            <a href="/forgetPassword">forgot password</a>
         </div>
      </form>
  </div>