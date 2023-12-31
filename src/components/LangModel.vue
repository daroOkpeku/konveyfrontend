<script setup>

</script>
<template>
<section class="w-[98%]  capitalize flex flex-col items-center  m-auto  py-3 mt-10">
<div class="w-full">
<span class="w-1/3 float-left text-left">Language Model</span>
</div>

<section class="w-full flex flex-row items-center space-x-2">
<div class="w-2/5 flex flex-col items-center mt-2">
<section class="w-full text-left capitalize">
Quality Type
</section>
<span class="w-full mt-2">
 <input type="text" class="w-full p-3 rounded-md outline-none border" />
 </span>
</div>
<section class="w-1/2 text-sm font-thin capitalize mt-2 grid place-content-center">
    For optimal results, we use a mix of different models includes GPT 3.5,
Turbo 16k and GPT48k ensiring the best quality
</section>
</section>

<section class="w-full flex flex-row items-center space-x-2">
<div class="w-2/5 flex flex-col items-center mt-2">
<section class="w-full text-left capitalize">
Open Ai Key
</section>
<span class="w-full mt-2">
    <select class="w-full py-2 border-2 outline-none">
<option class="capitalize font-medium">No</option>
</select> 
</span>
</div>
<section class="w-1/2 text-sm font-thin capitalize mt-2 grid place-content-center">
    You can connect you api key if you have used up our word and still have unspent Generation limits
</section>
</section>

<div class="w-full">
 <article class="w-1/12 float-right">
 <button class="w-full flex flex-row items-center justify-center space-x-3 bg-blue-500 py-3 rounded-md">
    <i class="fa fa-pencil" aria-hidden="true"></i>
  <a class="text-sm">write</a> 
 </button>
 </article>
</div>

</section>
</template>
<style scoped>
</style>


