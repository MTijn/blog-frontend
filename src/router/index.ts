import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from "@/views/DetailView.vue";
import ArchiveView from "@/views/ArchiveView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            title: 'MartijnKlene.nl | Home'
        }
    },
    {
        path: '/archive',
        name: 'archive',
        component: ArchiveView,
        meta: {
            title: 'MartijnKlene.nl | Archive'
        }
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: DetailView,
        meta: {
            title: 'MartijnKlene.nl | Detail'
        }
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    // Get the page title from the route meta data that we have defined
    // See further down below for how we setup this data
    const title = to.meta.title
    if (title) {
         
        // @ts-ignore
        document.title = title
    }
    next()
})

export default router
