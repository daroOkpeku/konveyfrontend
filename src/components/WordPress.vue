<script setup>

</script>
<template>
<section class="w-[98%]  capitalize flex flex-col items-center  m-auto  py-3 mt-10">
<span class="w-full">
<div class="w-2/3 float-left flex flex-col items-center px-2">
<section class="text-left w-full">Document</section>
<div class="w-full font-thin text-sm mt-2">Save to Directory</div>

<article class="w-full mt-3">
<section class="w-1/2  float-left">
<div class="w-full flex flex-row items-center space-x-4">
<select class="w-1/2 py-2 outline-none border">
<option class=" capitalize text-base">No</option>
</select>

<button class="w-1/3 capitalize text-center bg-blue-500 py-2 outline-none border">
change
</button>
</div>
</section>
</article>

</div>
</span>

<div class="w-full flex flex-col items-center bg-white rounded-md mt-4 py-4">
   <section class="w-full">
    <div class="w-2/3 float-left flex flex-col items-center px-2 ">
      <span class="w-full text-left text-black font-semibold "> Publish to WordPress</span>
    </div>
   </section>

    <section class="w-full flex flex-row items-center px-2 mt-2 space-x-3">
     
      <div class="w-1/5 ">
      <section class="w-full flex flex-col items-center">
      <span class="w-full text-base font-thin text-left">Publication</span>
      <select class="w-full mt-3 rounded-md py-2 outline-none border">
      <option class="capitalize">No</option>
      </select>
      </section>
      </div>

      <div class="w-3/5 flex flex-col items-center">
       <span class="w-full text-left capitalize text-lg px-2 font-semibold">important</span>
       <span class="w-full px-2 capitalize">if you enable this option, all generated documents will be published on the selected site .be carewith setting and publication date.</span>
      </div>

    </section>

</div>


</section>
</template>
<style scoped>
</style>


