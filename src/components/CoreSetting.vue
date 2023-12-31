
<template>
<section class="w-[98%]  bg-white capitalize flex flex-col items-center mt-10  m-auto rounded-md py-3">
<div class="w-3/4  float-left">
<section class="w-full flex flex-row justify-between">
  
  <div class="w-2/5">
  <section class="w-full flex flex-col items-center">
     <div class="w-full flex flex-col">
       <span class="w-full text-left font-semibold text-base">Language</span>
        <v-select multiple :options="optiondata" label="country">
        <template v-slot:selection="{ item }">
            <span><img :src="item.image" />{{ item.country }}</span>
        </template>
        </v-select>
     </div>

   
     <div class="w-full flex flex-col">
       <span class="w-full text-left font-semibold text-base"> tone</span>
       <v-select :options="tones" label="tone">
       </v-select>
     </div>

     <div class="w-full flex flex-col">
       <span class="w-full text-left font-semibold text-base">Point of View</span>
        <select class="w-full py-1 rounded-sm border-2 outline-none">
        <option value="none">None</option>
        </select>
     </div>

     <div class="w-full flex flex-col">
       <span class="w-full text-left font-semibold text-base">Target Country</span>
       <select class="w-full py-1 rounded-sm border-2 outline-none">
      <option value="none">None</option> 
      </select>
     </div>

  </section>
  </div>

  <section class="w-1/2 flex flex-col">

  <div class="w-full flex flex-row items-center space-x-2 ">
  <section class="w-2/5">
    <div class="w-full flex flex-col items-center">
       <span class="w-full text-left font-semibold text-base">Article Size</span>
       <select class="w-full py-1 rounded-sm border-2 outline-none">
      <option value="none">X-small</option> 
      </select>
     </div>
  </section>

  <section class="w-1/2 ">
    <div class="w-full flex flex-col items-center">
        <button class=" mt-6 text-xs  rounded-md bg-blue-200 py-1 text-black">2400-3600 words 9-12 H2 heading</button>
    </div>
  </section>
  </div>

  <section class="px-2 text-sm  font-thin mt-2 py-1 w-full">
    The X-Small article offer short articles or news, ideal for quick update
    and capturing immediate interest, ensuring your content remains fresh and
    timely in eye of your audiences
  </section>

  <div class="w-full flex flex-row items-center justify-between mt-2">
  <span class="flex flex-row space-x-2"><a class="text-xs font-medium">Details to Includes</a><a class="fa fa-ban w-2 h-2"></a></span>
  <span class="text-sm text-blue-400">sample 1 | Simple 2 | Simple 3</span>
  </div>

  <section class="w-full flex flex-row items-center space-x-1"><a><input type="checkbox"/></a> <a class="text-sm capitalize">Intense moode to each section beyond just the entire article</a> </section>

  <article class="w-full">
  <textarea class="w-full h-16 border-2 outline-none rounded-sm" placeholder="eg 03776e56547">
  </textarea >


  
  </article>

  </section>

</section>
</div>
</section>
</template>
<script>

import * as dat from "./data.json"
import * as tones from "./tone.json"
const {tofumi} = dat

export default {
  data() {
    return {
      optiondata:tofumi,
      tones:tones.tones
    };
  },
//   mounted() {
//     console.log(this.tones.tones);
//   },
};


</script>
<style scoped>

</style>


