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
        path: '/Irina',
        name: 'Irina',
        component: () => import('../views/Irina.vue')
    },
    {
        path: '/Tokenizer',
        name: 'Tokenizer',
        component: () => import('../views/Tokenizer.vue')
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