// 新
import Vue from 'vue';
import Router from 'vue-router';

//router
const signUp = () => import("./components/signUp.vue");
const userLogin = () => import("./components/userLogin.vue");
const getUser = () => import("./components/getUser.vue");
const timeline = () => import("./components/timeline.vue");
const timelineEdit = () => import("./components/timelineEdit.vue");
const timelineAll = () => import("./components/timelineAll.vue");
const edit = () => import("./components/edit.vue");

Vue.use(Router);

export default new Router({
    mode: "history",

    routes: [
        {
            path: '/',
            component: signUp
        },
        {
            path: '*',
            redirect: '/'
        },
        {
            path: '/login',
            component: userLogin
        },
        {
            path: '/users',
            component: getUser
        },
        {
            path: '/me/edit',
            component: edit
        },
        {
            path: '/me/timeline',
            component: timeline,
        },
        {
            path: '/timeline/edit',
            component: timelineEdit
        },
        {
            path: '/timeline/all',
            component: timelineAll
        }
    ]
});