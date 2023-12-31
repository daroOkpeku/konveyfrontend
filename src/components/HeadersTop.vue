<script setup>
// import { FaAlignLeft  BiBellFill, FaAlignLeft} from "oh-vue-icons/icons";


</script>
<template>
<div class="w-[98%]  bg-white capitalize flex flex-row items-center justify-between m-auto rounded-md py-3 px-3">
 <section class="w-1/3 flex flex-row space-x-2 ">
 <span class="w-24 pi pi-align-left">
 </span>
 <article class="w-11/12 ">
   <div class="w-full flex flex-row space-x-1">
    <section class="w-3/4"><input type="text" class="w-full bg-blue-100"/></section>
    <button class="pi pi-angle-down bg-blue-500 text-white w-10"></button>
   </div>
   </article>
 </section>

 <div class="w-1/2  flex flex-row items-center justify-between">
      <article class="w-2/5">
      <section class="w-full flex flex-row items-center">
        <div class="w-11/12">
        <input type="text" class="w-full bg-blue-100 "/>
        </div>
        <button class="text-xs capitalize font-semibold w-24 bg-blue-500 py-1 "><a>search</a> <i class="pi pi-search"></i></button>
      </section>
      </article>


      <article class="w-1/6  grid grid-cols-2 ">
        <section class="">
          <a class="fa fa-bell w-4 h-4" aria-hidden="true"></a>

         </section> 

         <section class="">
          <a class="fa fa-ban w-4 h-4" aria-hidden="true"></a>
         </section>
      </article>

      <section class="w-1/5 flex flex-col items-center">
         <span class="w-full text-sm font-bold capitalize">welcome grace</span>
         <span class="w-full text-sm font-thin">Admin</span>
      </section>


 </div>
</div>
</template>
<style scoped>


</style>