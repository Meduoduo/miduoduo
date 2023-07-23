import {
    createRouter,
    createWebHistory,
    RouteRecordRaw
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/Kasumi',
        name: 'Kasumi',
        component: () => import('../views/Kasumi.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router