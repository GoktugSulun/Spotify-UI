<template>
   <div class="container">
      <section class="side-bar">
         <sideBar/>
      </section>
      
      <main class="home-page">
         <Header />
         <div class="playlist-info">
            <div class="playlist-img">
               <img :src="img" alt="">
            </div>
            <div class="info">
               <span> Playlist </span>
               <h1>
                  {{ currentPlaylist.name }}
               </h1>
               <p>
                  {{ currentPlaylist?.description || '' }}
               </p>
            </div>
         </div>
         
         <div class="musics">
            <iframe :src="`https://open.spotify.com/embed/playlist/${id}`" width="100%" height="100%" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
         </div>
      </main>

      <section class="footer">
         <Footer />
      </section>
   </div>
</template>

<script>
   import Header from '../components/Header.vue'
   import Footer from '../components/Footer.vue'
   import { mapGetters } from 'vuex'

   export default {
      name: 'Playlist',
      components: {
         Header,
         Footer
      },
      data(){
         return {
            id: null,
            img: null,
            currentPlaylist: null,
            showInput: false,
         }
      },
      methods: {
         setShowInput(showInput){
            this.showInput = showInput;
         }
      },
      async created(){
         this.id = this._getCurrentPlaylist.id;
         this.img = this._getCurrentPlaylist.images?.[0].url || '#';
         console.log(this.img)
         this.currentPlaylist = this._getCurrentPlaylist
      },
      computed: {
         ...mapGetters(['_getCurrentPlaylist']),
      }
   }
</script>

<style scoped>


   
</style>