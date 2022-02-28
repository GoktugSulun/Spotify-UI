import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/style.css"

import router from './router'
import store from './store'

import sideBar from './components/sideBar.vue'
import PlaylistItems from './components/PlaylistItems'

const app = createApp(App)
app.use(router);
app.use(store);
app.component('sideBar', sideBar);
app.component('PlaylistItems', PlaylistItems);
app.mount('#app')
