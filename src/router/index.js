import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import {useShortStore} from "../stores/shortLinkStore";
const routes = [
    {
        path: '/',
        name: 'home',
        component:HomeView,
    },
    {
        path: '/:slug',
        name: 'redirectLink',
        component: () => import('@/views/RedirectView.vue'),
    }
]

const router = createRouter({
    history: createWebHistory( import.meta.env.BASE_URL),
    routes
})
router.beforeEach(() => {
    const store = useShortStore();
    store.isLoading = false;
})
export default router
