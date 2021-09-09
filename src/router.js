import {createRouter, createWebHistory} from 'vue-router'
import HomePage from './views/HomePage.vue'
import Reusable from './views/Reusable.vue'
import VuexPage from './views/VuexPage.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage},
        { path: '/reusable', component: Reusable},
        { path: '/vuex', component: VuexPage},
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})