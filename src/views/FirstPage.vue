<script setup>
import { ref } from 'vue';
const title = ref("")
const tone = ref("")
 const destiny = ref("")
  const status = ref(false)
  const isload = ref(false)
  const storyx = ref("");
 const pixone = ref("");
 const pixtwo = ref("");

import tones from '../components/tone.json'
import keyword from '../components/density.json'

const handletone = (event)=>{
    tone.value = event.target.value
}

const handlerange =(event)=>{
    destiny.value = event.target.value   
}

const apiClient = axios.create({
        baseURL: "http://127.0.0.1:8000/",
        withCredentials: true
      });

const handlegen =()=>{

    if(title.value != "" || tone.value != "" || destiny.value != ""){
        isload.value = true

      
            let formData = new FormData()
            formData.append('prompt',  title.value)
            formData.append('destiny',  destiny.value)
            formData.append('tone',  tone.value)
              apiClient.get('/sanctum/csrf-cookie').then(()=>{
                  let headers = new Headers();
                  headers.append('Content-Type', 'application/json')
                  let urlxw = '/api/chatgpt';
                  apiClient.post(urlxw, formData, headers).then(res=>{
                    
                      if(res.data.success){
                          let story = JSON.parse(res.data.success)
                          let imageone = JSON.parse(res.data.imgone)
                          let imagetwo = JSON.parse(res.data.imgtwo)
                          status.value = true
                          isload.value = false

                        //   console.log("story:", story, "imageone", imageone, "imagetwo", imagetwo)
                          if(story.choices.length > 0){
                            story.choices.map((item)=>{
                            storyx.value =  item.text

                          })
                          }else{
                            storyx.value = story.choices.text
                          }

                          pixone.value = imageone.image

                          if(imagetwo.output.length > 0){
                            imagetwo.output.map((item)=>{
                                pixtwo.value = item
                            })    
                          }
                          
                         
                      }
      
                  }).catch(err=>{
                      let error = err.response.data.errors
      
                      if(error.prompt){
                        isload.value = false

                        //   setMessage(error.email)
                        //   setEmail("")
                      }
                  })
                   })

    }else{
        isload.value = false

    }
}

const handleclose =()=>{
    status.value = false 
}
</script>
<template>
  <div class="w-full">
      <section class="w-3/4 m-auto mt-20 rounded-sm shadow-sm border py-2">
      <div class="w-full flex flex-col items-center justify-center">
        <section class="w-10/12 flex flex-col items-center">
          <span class="w-full text-left capitalize text-lg">Title</span>
          <input type="text" v-model="title" placeholder="please enter the title of your story and how long your story is" class="w-full p-2 py-2 rounded-sm outline-none border"/>
        </section>

        <section class="w-10/12 flex flex-col items-center">
          <span class="w-full text-left capitalize text-lg">tone</span>
          <select type="text" @change="handletone($event)" class="w-full py-2 rounded-sm outline-none border">
          <option v-for="tone  in tones.tones"  :key="index">{{ tone.tone }}</option>
          </select>
        </section>

        <section class="w-10/12 flex flex-col items-center">
          <span class="w-full text-left capitalize text-lg">Keyword density range</span>
          <select type="text" @change="handlerange($event)" class="w-full py-2 rounded-sm outline-none border">
          <option v-for="keyz in keyword.keyword" :key="keyz.id" >{{ keyz.word }}</option>
          </select>
        </section>


          <div class="w-full">
            <section class="w-1/6 float-right px-2 mt-2">
               <button class="w-full bg-blue-700 text-white rounded-sm text-sm text-center py-2 capitalize" @click="handlegen"> {{ isload?"Please wait":"generate story" }}  </button>
            </section>
          </div>
          
      </div>
      </section>

     <div :class="{ 'w-full bg-cover h-screen fixed bg-opacity-15 bg-black top-0 left-0 right-0 bottom-0 flex flex-row items-center': status, 'hidden': !status }">
            <section class="w-3/4 rounded-sm bg-white m-auto">
                <article class="w-full">
                  <span class="w-20 text-center font-bold float-right px-4" @click="handleclose">x</span>
                </article>
            <div class="w-full h-screen  flex flex-col overflow-y-scroll">
                <div class="w-4/6 m-auto rounded-sm    h-56">
                    <img class="w-full h-full" :src="'data:image/png;base64,' + pixone" />
                </div>

                <article class="w-4/6 m-auto rounded-sm   h-48  overflow-y-scroll">
                  {{ storyx }}
                
                </article>

                <div class="w-4/6 m-auto rounded-sm h-56">
                <img class="w-full h-full"  :src="pixtwo" />
                </div>
            
            </div>
            
            </section>
         
         </div>
  </div>
</template>
<style scoped>

</style>