<script lang="ts">
    import type { PageData, ActionData } from "./$types";
    import eyeOpen from "$lib/images/eye-open.svg";
    import eyeClosed from "$lib/images/eye-closed.svg";
    // let { data }: { data: PageData } = $props();
    export let form: ActionData;
  
    console.log("form", form);
    let loginPasswordInput: HTMLInputElement;
    let loginPasswordImg: HTMLImageElement;
    let loginConfirmPasswordInput: HTMLInputElement;
    let loginConfirmPasswordImg: HTMLImageElement;
  
    function passwordShowHandler() {
      if (loginPasswordInput.type === "password") {
        loginPasswordInput.type = "text";
        loginPasswordImg.src = eyeOpen;
      } else {
        loginPasswordInput.type = "password";
        loginPasswordImg.src = eyeClosed;
      }
    }
    function confirmPasswordShowHandler() {
      if (loginConfirmPasswordInput.type === "password") {
        loginConfirmPasswordInput.type = "text";
        loginConfirmPasswordImg.src = eyeOpen;
      } else {
        loginConfirmPasswordInput.type = "password";
        loginConfirmPasswordImg.src = eyeClosed;
      }
    }
  </script>
  
  <section class="w-full min-h-screen bg-primary center-col">
    <form method="post">
      <div class="input-div">
        <label for="password" class="input-label">password:</label><br />
        <div class="flex items-center">
          <input
            type="password"
            id="password"
            name="password"
            class="input-form w-[90%] border-none"
            value={""}
            bind:this={loginPasswordInput}
          />
          <button
            type="button"
            class="w-20 h-10 bg-white border-2"
            onclick={passwordShowHandler}
          >
            <img
              src={eyeClosed}
              alt=""
              bind:this={loginPasswordImg}
              class="w-full h-full object-contain"
            />
          </button>
        </div>
        {#if form?.errors?.password}
          <p class="text-white-400">{form.errors.password}</p>
        {/if}
      </div>
      <div class="input-div">
        <label for="confirmPassword" class="input-label">confirm password:</label
        ><br />
        <div class="flex items-center">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            class="input-form w-[90%] border-none"
            value={""}
            bind:this={loginConfirmPasswordInput}
          />
          <button
            type="button"
            class="w-20 h-10 bg-white border-2"
            onclick={confirmPasswordShowHandler}
          >
            <img
              src={eyeClosed}
              alt=""
              bind:this={loginConfirmPasswordImg}
              class="w-full h-full object-contain"
            />
          </button>
        </div>
        {#if form?.errors?.confirmPassword}
          <p class="text-white-400">{form.errors.confirmPassword}</p>
        {/if}
      </div>
  
      {#if form?.errors?.passwordMismatch
      }
        <p class="text-white-400">{form.errors.passwordMismatch}</p>
      {/if}
      {#if form?.success}
        <p class="text-white-400">{form.success}</p>
      {/if}
  
      {#if form?.errors?.error}
         <p class="text-white-400">{form.errors.error}</p>
      {/if}
      <button class="btn-second">submit</button>
    </form>
  </section>
  