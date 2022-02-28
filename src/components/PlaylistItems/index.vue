<template>
   <section class="playlist-card">
      <h1 class="playlist-title">
         {{ title }}
      </h1>

      <p v-if="title == 'Tavsiye Edilenler'" class="inner-title">
         Sevdiğin her şeyden biraz dinle
      </p>
      
      <div v-if="playlist.length > 0" class="cards">
         <Card v-for="(play, index) in playlist" :key="index" :play="play" />
      </div>
      <div v-else class="warning">
         Sonuç bulunamadı...
      </div>
   </section>
</template>

<script>
   import Card from './Card.vue'

   export default {
      name: 'index',
      props: {
         playlist: {
            type: Array,
            default: () => []
         },
         title: {
            type: String,
            default: () => ''
         }
      },
      components: {
         Card,
      },
      created(){
         console.log(this.playlist, ' playlsit')
      }
   }
</script>

<style scoped>
   
</style>