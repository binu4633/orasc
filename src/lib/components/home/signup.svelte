<script lang="ts">
      //      import type {HTMLInputElement } from './$types';
          import { page } from '$app/state';
          import eyeOpen from '$lib/images/eye-open.svg';
          import eyeClosed from '$lib/images/eye-closed.svg';
          let loginPasswordInput: HTMLInputElement;
          let loginPasswordImg:HTMLImageElement;
          let loginConfirmPasswordInput: HTMLInputElement;
          let loginConfirmPasswordImg:HTMLImageElement;
         
          
          
          function passwordShowHandler(){
              
              if(loginPasswordInput.type ==='password'){
                loginPasswordInput.type ='text'
                loginPasswordImg.src = eyeOpen
              }else{
                  loginPasswordInput.type ='password';
                  loginPasswordImg.src = eyeClosed
              }
          }
          function confirmPasswordShowHandler(){
              
              if(loginConfirmPasswordInput.type ==='password'){
                loginConfirmPasswordInput.type ='text'
                loginConfirmPasswordImg.src = eyeOpen
              }else{
                  loginConfirmPasswordInput.type ='password';
                  loginConfirmPasswordImg.src = eyeClosed
              }
          }
      </script>
      
      <div class="pt-10">
            <p class="text-center text-2xl">new user registration</p>
        </div>
        <!-- login form -->
        <div class="pt-6 flex justify-center ">
            <form  method="post" action="/signin?/signUp" class="bg-primary-dark mb-10 w-[90vw]  sm:w-[40vw] md:w-[40vw] lg:w-[40vw]  p-5 rounded-lg">
                  <div class="input-div">
                        <label for="firstName" class="input-label">First name:</label><br>
                        <input type="text" id="firstName" name="firstName" class="input-form" value={page.form?.data?.firstName} required/>
                        {#if page?.form?.errors?.firstName}
                          <p class="text-red-600">{page.form.errors.firstName}</p>
                        {/if} 
                      </div>
                      <div class="input-div">
                        <label for="lastName" class="input-label">Last name:</label><br>
                        <input type="text" id="lastName" name="lastName" class="input-form" value={page.form?.data?.lastName} required/>

                      </div>
                <div class="input-div">
                    <label for="email" class="input-label">email:</label><br>
                    <input type="email" id="email" name="email" class="input-form" value={page.form?.data?.email} required/>
                    {#if page.form?.errors?.email}
                   <p class="text-red-600">{page.form.errors.email}</p>
                {/if} 
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
                    {#if page.form?.errors?.password}
                    <p class="text-red-600">{page.form.errors.password}</p>
                 {/if} 
                  </div>
                <div class="input-div">
                    <label for="confirmPassword" class="input-label">confirm password:</label><br>
                    <div class="flex items-center">
                        <input type="password" id="confirmPassword" name="confirmPassword" class="input-form  w-[90%] border-none" value={''} 
                        bind:this={loginConfirmPasswordInput}
                        required/>
                        <button type="button" class="w-20 h-10 bg-white border-2" onclick={confirmPasswordShowHandler}>
                            <img src={eyeClosed} alt=""
                            bind:this={loginConfirmPasswordImg} class="w-full h-full object-contain ">
                        </button>
                    </div>
                    {#if page.form?.errors?.confirmPassword}
                    <p class="text-red-600">{page.form.errors.confirmPassword}</p>
                 {/if} 
                  </div>
                {#if page.form?.errors?.exist}
                   <p class="text-red-600">{page.form.errors.exist}</p>
                {/if}  
                {#if page.form?.errors?.passwordMismatch}
                   <p class="text-red-600">{page.form.errors.passwordMismatch}</p>
                {/if}  
               <div class="flex justify-end">
                  <button class="btn-second">submit</button>
               </div>
            </form>
        </div>