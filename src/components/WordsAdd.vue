
<template>
<section class="w-[98%]   capitalize flex flex-col items-center justify-between m-auto rounded-md py-3">
<div class="w-full flex flex-row items-center mt-4">
<section class="w-3/4 flex flex-col items-center">
<span class="w-full px-3 font-semibold capitalize text-lg text-left">Keywords includes in the test</span>
<span class="font-thin text-sm text-left">if you do not provide the Keyword we will generate relevant keyword from the main keyword for each section and use them to generate the article</span>
</section>

<div class="w-1/4 grid place-content-center">
<button class="w-full px-2 bg-blue-200 text-white capitalize py-3 rounded-md text-base">
NLP Keyword Generator
</button>
</div>
</div>


<article class="w-full rounded-md bg-white mt-2 flex flex-col ">
 <div class="w-full grid grid-cols-5 place-content-center gap-2 space-x-2 py-2 px-3 mt-2">

   <span v-for="all in allinput" :key="all.id" class="py-1 flex flex-row justify-between items-center px-2 bg-blue-400 text-white rounded-sm"><a class="text-sm">{{ all.word }}</a> <a class="text-sm" @click="handleClick(all.id)">x</a></span>

 </div>
<div class="w-full mt-4 py-2">
<input type="text" v-model="word" @keyup.enter="handleEnterKey" placeholder="Please Enter Keywords or Phase" class="w-full py-2 p-1 outline-none border"/>

</div>
</article>



</section>
</template>
<script setup>
 import { ref } from "vue";

 const allinput = ref([])

 const word = ref("")





const handleEnterKey =()=>{

     if(allinput.value.length == 0){
            allinput.value.push({id:1, word:word.value}) 
            word.value = ""
        }else{
            let answer = allinput.value.length + 1;
            allinput.value.push({id:answer, word:word.value})  
            word.value = ""
        }
    
}

const handleClick =(id)=>{
 let ans = allinput.value.filter((item)=>item.id != id)
 allinput.value = ans
}

console.log(allinput.value)
</script>
<style scoped>

</style>


