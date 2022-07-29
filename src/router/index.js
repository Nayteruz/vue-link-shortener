import { createRouter, createWebHistory } from 'vue-router'
import App from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: App
    },
    {
        path: '/:slug',
        name: 'recipe',
        component: () => import('@/views/RedirectView.vue'),
    }

]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router
