import {createRouter, createWebHistory} from 'vue-router';
import NotFound from '../views/NotFound.vue';
import DefaultLayout from '../views/layouts/DefaultLayout';
import HomeView from '../views/HomeView.vue';
import CurrentPost from '../views/CurrentPost.vue';
import store from "../store";

const routes = [
    {
        path: '/',
        name: 'home',
        component: DefaultLayout,
        beforeEnter: (to, from, next) => {
            store.dispatch("getPosts")
                .then(() => {
                    store.dispatch("getComments");
                    if(to.href === '/') next('posts');
                    next();
                })
                .catch(() => {
                    next('404');
                });
        },
        children: [
            {
                path: 'posts',
                name: 'posts',
                component: HomeView,
            },
            {
                path: 'post/:id',
                name: 'post',
                component: CurrentPost,
            },
        ]
    },
    {
        path: "/404",
        name: "404",
        component: NotFound
    },
    {
        path: "/:catchAll(.*)",
        redirect: '/404'
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
