<script setup>
import { onMounted, ref } from 'vue';
import HeadersTop from "../components/HeadersTop.vue"
import SecondTop from '../components/SecondTop.vue'
import HeaderSetting from '../components/HeaderSetting.vue'
import CoreSetting from '../components/CoreSetting.vue'
import MediaHub from "../components/MediaHub.vue"
import SeoFields from "../components/SeoFields.vue"
import WordsAdd from '../components/WordsAdd.vue'
import StructureCon from '../components/StructureCon.vue'
import InternalLink from '../components/InternalLink.vue'
import WordPress from "../components/WordPress.vue"
import LangModel from "../components/LangModel.vue"
const status = ref(false)
const handleScroll = () => {
  var height = window.pageYOffset;
  // Handle scroll logic here
  if(height > 50){
    // dhdghgh
    status.value = true
  }else{
// hdjhdh
status.value = false
  }
};

// Add the scroll event listener
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// // Remove the event listener when the component is unmounted
// onBeforeUnmount(() => {
//   window.removeEventListener("scroll", handleScroll);
// });
</script>
<template>
    <div class="w-full flex flex-row ">

    <article class="w-1/5 bg-blue-950 h-screen z-20 top-0  sticky">
    <section class="w-full bg-blue-950">
    <span class="text-2xl text-center grid place-content-center m-auto mt-20 text-white w-full">work poilt</span>

    <div class="w-11/12 m-auto flex flex-col items-center">
     <section class="w-full">
     
     <ul class="w-11/12 float-right mt-4 gap-2 ">
     <li class="w-full py-2 flex flex-row items-center space-x-1  text-blue-400 hover:bg-blue-400 hover:text-white hover:px-2 hover:py-2 hover:rounded-sm">
        <i class="fa fa-th-large" aria-hidden="true"></i><span class="text-left px-2 capitalize">DashBoard</span>
     </li>

     <li class="w-full py-2 flex flex-row items-center space-x-1  text-blue-400 hover:bg-blue-400 hover:text-white hover:px-2 hover:py-2 hover:rounded-sm">
        <i class="fa fa-cog" aria-hidden="true"></i><span class="text-left px-2 capitalize">Project</span>
     </li>

     <li class="w-full py-2 flex flex-row items-center space-x-1  text-blue-400 hover:bg-blue-400 hover:text-white hover:px-2 hover:py-2 hover:rounded-sm">
        <i class="fa fa-file-text" aria-hidden="true"></i><span class="text-left px-2 capitalize">Schedule</span>
     </li>

     <li class="w-full py-2 flex flex-row items-center space-x-1  text-blue-400 hover:bg-blue-400 hover:text-white hover:px-2 hover:py-2 hover:rounded-sm">
        <i class="fa fa-briefcase" aria-hidden="true"></i><span class="text-left px-2 capitalize">Content Wizard</span>
     </li>

     <li class="w-full py-2 flex flex-row items-center space-x-1  text-blue-400 hover:bg-blue-400 hover:text-white hover:px-2 hover:py-2 hover:rounded-sm">
        <i class="fa fa-book" aria-hidden="true"></i><span class="text-left px-2 capitalize">Document</span>
     </li>

     <li class="w-full py-2 flex flex-row items-center space-x-1  text-blue-400 hover:bg-blue-400 hover:text-white hover:px-2 hover:py-2 hover:rounded-sm">
        <i class="fa fa-sign-out" aria-hidden="true"></i><span class="text-left px-2 capitalize">Logout</span>
     </li>
     </ul>
     </section>
    </div>
    
    </section>
    </article>
<section class="w-10/12 h-full bg-blue-100 py-2">
   
   <div :class="{ 'w-full': true, 'fixed': status, 'bg-blue-100':status, 'flex':status, 'flex-col':status, 'items-center':status, 'top-0': status, 'z-20': status }">
    <HeadersTop/>
  <SecondTop/>
   </div>
  <HeaderSetting/>
 <CoreSetting/>
 <MediaHub/>
 <SeoFields/>
 <WordsAdd/>
<StructureCon/>
<InternalLink/>
<WordPress/>
<LangModel/>
</section>
    
    </div>

</template>
<style scoped>
</style>


