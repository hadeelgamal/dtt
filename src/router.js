import Vue from 'vue'
import VueRouter from 'vue-router'

import LandingPage from '@/components/LandingPage.vue'
import RandomPage from '@/components/RandomPage.vue'
import EntryPage from '@/components/EntryPage.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: LandingPage },
  { path: '/random', component: RandomPage },
  { path: '/entry/:id', component: EntryPage }
];

const router = new VueRouter({
  routes
});

export default router;
