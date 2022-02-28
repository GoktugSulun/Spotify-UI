<template>
   <div class="container">
      <section class="side-bar">
         <sideBar/>
      </section>

      <main class="home-page">
         <Header @filteredList="filterData" @keyword="setKeyword" :showInput="showInput"/>

         <PlaylistItems v-if="!isSearching" :playlist="allData.recentlyPlayed" title="Yakında Çalanlar" />
         <PlaylistItems v-if="!isSearching" :playlist="allData.recommended" title="Tavsiye Edilenler" />
         <PlaylistItems v-if="isSearching" :playlist="filteredList" title="Sonuçlar" />
      </main>

      <section class="footer">
         <Footer />
      </section>
   </div>
</template>

<script>
   import axios from 'axios';
   import Header from '@/components/Header.vue'
   import Footer from '@/components/Footer.vue'
   import { mapGetters } from "vuex";

   export default {
      name: 'Home',
      components: {
         Header, 
         Footer
      },
      data(){
         return {
            allData: [],
            filteredList: [],
            keyword: '',
            showInput: false,
         }
      },
      methods: {
         filterData(filteredList){
            this.filteredList = [],
            this.allData.allPlaylists.forEach(playlist => {
               filteredList.forEach(listEl => {
                  (listEl == playlist.name) && this.filteredList.push(playlist);
               });
            });
         },
         setKeyword(keyword){
            this.keyword = keyword;
         },
      },
      computed: {
         ...mapGetters(["_getShowInput"]),
         isSearching(){
            return this._getShowInput && this.keyword != '';
         }
      },
      async created(){
         await axios.get('http://zmdp.cloud/iseAlim/spotify.json')
            .then(response => {
               console.log(response);
               this.allData = response?.data || [];
            });
      }
   }
</script>

<style scoped>

</style>