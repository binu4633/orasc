<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>
 <section  class="bg-primary w-full flex flex-wrap p-10  min-h-screen">
    <div>
    <a href="/admin/addCourses">
        <div class="admin-menu">
            add courses
        </div>
    </a>
  </div>
  <div>
    <a href="/admin/addJobs">
        <div class="admin-menu">
            add jobs
        </div></a>
  </div>
   <div>
    <a href="/admin/showCourses"> <div class="admin-menu">
        show courses
    </div></a>
   </div>
    <div>
        <a href="/admin/showJobs"> <div class="admin-menu">
            show jobs
        </div></a>
    </div>
    <div>
        <a href="/admin/eduPort/students"> <div class="admin-menu">
            show students
        </div></a>
    </div>
    <div>
        <a href="/admin/eduPort/universities"> <div class="admin-menu">
            show universities
        </div></a>
    </div>
   <div>
    <a href="/admin/eduPort/studentConsultancies"><div class="admin-menu">
        show student consultancies
    </div></a>
   </div>
    <div>
        <a href="/admin/jobPort/candidate">
            <div class="admin-menu">
                show candidate
            </div></a>
    </div>
    <div>
        <a href="/admin/jobPort/employers">
            <div class="admin-menu">
                show employers
            </div></a>
    </div>
   <div>
    <a href="/admin/jobPort/jobConsultancies"> <div class="admin-menu">
        show job consultancies
    </div></a>
   </div>
   <div>
    <a href="/admin/applications/course"> <div class="admin-menu">
        show course application
    </div></a>
   </div>
   <div>
    <a href="/admin/applications/job"> <div class="admin-menu">
        show job application
    </div></a>
   </div>
  
    <div>
        <a href="/admin/settings"><div class="admin-menu">
            settings
        </div></a>
    </div>
   
 </section>