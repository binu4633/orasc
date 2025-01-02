<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

{#snippet formData({name,type,value})}
<div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        {name}
    </label>
    <input type={type}  id="name" name="name" placeholder="Your Name" 
                       class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
</div>
{/snippet}

{@render formData({name:'your name',type:'text',value:'jack'})}




<div class="container mx-auto px-4 py-16">
        <h1 class="text-3xl font-bold text-center mb-8">Contact Us</h1>

        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                    Name
                </label>
                <input type="text" id="name" name="name" placeholder="Your Name" 
                       class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input type="email" id="email" name="email" placeholder="Your Email" 
                       class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                    Phone Number
                </label>
                <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" 
                       class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>

            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
                    Message
                </label>
                <textarea id="message" name="message" placeholder="Your Message" 
                          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none h-24"></textarea>
            </div>

            <div class="flex items-center justify-between">
                <button type="submit" 
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Send Message
                </button>
            </div>
        </form>
    </div>

<div class="flex">

    <div class="w-10 h-10 bg-red-500 m-2 hidden sm:block"></div>
    <div class="w-10 h-10 bg-green-500 m-2 hidden md:block"></div>
    <div class="w-10 h-10 bg-blue-500 m-2 hidden lg:block"></div>
    <div class="w-10 h-10 bg-yellow-500 m-2"></div>

</div>

<ul class="list-disc list-inside">
    <li class="list-disc">something</li>
</ul>



