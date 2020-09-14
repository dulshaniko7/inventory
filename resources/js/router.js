import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from "./components/Index"
import login from "./components/auth/login"
import register from "./components/auth/register"
import forget from "./components/auth/forget"

const routes = [
    {
        path: '/',
        component: Index,
        name: 'Index'
    },
    {
        path: '/login',
        component: login,
        name: 'login'
    },
    {
        path: '/register',
        component: register,
        name: 'register'
    },
    {
        path: '/forget',
        component: forget,
        name: 'forget'
    },
];

export default new Router({
    mode: 'history',
    routes
})
