import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: { name: 'home' },
    },
    {
        path: '/vue-link-shortener',
        name: 'home',
        component:() => import('@/views/HomeView.vue'),

    },
    {
        path: '/:slug',
        name: 'redirectLink',
        component: () => import('@/views/RedirectView.vue'),
    }

]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.path === 'vue-link-shortener') next({ name: 'home' })
    next()
})
export default router
