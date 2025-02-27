<script lang="ts">
    import type { PageData } from './$types';
    import { user } from '$src/lib/store';
    import { goto } from '$app/navigation';
    goto
    let { data }: { data: PageData } = $props();

    console.log($user);

    function resetHandler(){
        goto("/resetPassword")
    }

    function editStudentReg(id:any){
    //   console.log('id',id)
    goto(`/edit/student/${id}`)
    }
    function editUniversityReg(id:any){
    //   console.log('id',id)
    goto(`/edit/university/${id}`)
    }
    function editStudentConsultancyReg(id:any){
    //   console.log('id',id)
    goto(`/edit/studentConsultancy/${id}`)
    }
    function editJobCandidateReg(id:any){
    //   console.log('id',id)
    goto(`/edit/jobCandidate/${id}`)
    }
    function editJobEmployerReg(id:any){
    //   console.log('id',id)
    goto(`/edit/jobEmployer/${id}`)
    }
    function editJobConsultancyReg(id:any){
    //   console.log('id',id)
    goto(`/edit/jobConsultancy/${id}`)
    }



</script>

<div class="w-full min-h-screen bg-primary center-col">

     <button onclick={resetHandler} class="profile-btn">
        reset password
     </button>
     {#if $user.studentRegistrationId}
         <button onclick={editStudentReg.bind(null,$user.studentRegistrationId)} class="profile-btn">
            edit student registration
         </button>
     {/if}
     {#if $user.universityRegistrationId}
         <button onclick={editUniversityReg.bind(null,$user.universityRegistrationId)} class="profile-btn">
            edit university registration
         </button>
     {/if}
     {#if $user.studentConsultantRegistrationId}
         <button onclick={editStudentConsultancyReg.bind(null,$user.studentConsultantRegistrationId)} class="profile-btn">
            edit student consultancy registration
         </button>
     {/if}
     {#if $user.jobCandidateRegistrationId}
         <button onclick={editJobCandidateReg.bind(null,$user.jobCandidateRegistrationId)} class="profile-btn">
            edit candidate registration
         </button>
     {/if}
     {#if $user.employerRegistrationId}
         <button onclick={editJobEmployerReg.bind(null,$user.employerRegistrationId)} class="profile-btn">
            edit employer registration
         </button>
     {/if}
     {#if $user.jobConsultantRegistrationId}
         <button onclick={editJobConsultancyReg.bind(null,$user.jobConsultantRegistrationId)} class="profile-btn">
            edit job consultancy registration
         </button>
     {/if}

    <form action="" method="post">
        <input type="hidden" name="">
        <button class="btn-second">logout</button>
    </form>
</div>