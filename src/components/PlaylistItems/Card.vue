<template>
   <div @click="openPlaylist" class="card">
      <div class="card-img">
         <img :src="play.images?.[0].url" alt="">
         <!-- <img src="https://i.scdn.co/image/ab67706c0000bebb8066d9a1fc6aafea69e00d1f" alt=""> -->
      </div>
      <div class="title">
         {{ play.name }}
      </div>
      <p class="description">
         {{ play.description.split("İletişim")[0] }}
      </p>
   </div>
</template>

<script>
   export default {
      name: 'Card',
      props: {
         play: {
            type: Object,
            default: () => {}
         }
      },
      methods: {
         openPlaylist(){
            this.$store.commit('setActiveClass', null);
            this.$store.commit('setShowInput', false);
            this.$store.commit('setPlaylist', this.play);
            this.$router.push({ name: 'PlaylistPage', params: { type: this.play.name.replace(/\s/g, '-') } });
         }
      },
   }
</script>

<style scoped>
   
 
</style>