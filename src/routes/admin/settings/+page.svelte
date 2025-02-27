<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>
<div class="w-full min-h-screen center-col bg-primary py-8">
    
      <div>
        <a href="/admin/settings/countries"> <div class="admin-menu">countries</div></a> 
      </div>
      <div>
          <a href="/admin/settings/fees"><div class="admin-menu">fees</div></a>
      </div>
      <div>
          <a href="/admin/users"> <div class="admin-menu">
             change users
          </div></a>
         </div>
  
</div>