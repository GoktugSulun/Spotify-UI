import { createStore } from 'vuex';

const store = createStore({
   state: {
      currentPlaylist: null,
      showInput: false,
      activeClass: 'Home'
   },
   getters: {
      _getCurrentPlaylist: state => state.currentPlaylist,
      _getShowInput: state => state.showInput,
      _getActiveClass: state => state.activeClass
   },
   mutations: {
      setPlaylist: (state, playlist) => state.currentPlaylist = playlist,
      setShowInput: (state, showInput) => state.showInput = showInput,
      setActiveClass: (state, activeClass) => state.activeClass = activeClass
   },
   actions: {

   }
});

export default store;