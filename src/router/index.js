import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
   {
      name: 'HomePage',
      path: '/',
      component: () => import('@/views/Home')
   },
   {
      name: 'SearchPage',
      path: '/search',
      component: () =>  import('@/views/Home')
   },
   {
      name: 'PlaylistPage',
      path: '/playlist/:type',
      component: () =>  import('@/views/Playlist')
   }
]

const router = createRouter({
   routes,
   history: createWebHashHistory(),
});

export default router;