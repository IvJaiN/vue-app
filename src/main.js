import {createApp} from 'vue'
import {createRouter, createWebHistory} from "vue-router";

import App from './App'
import Main from "./components/Main";
import UserPage from "./components/UserPage";


const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/users/:id',
        component: UserPage
    }

]

const router = createRouter({
    routes,
    history: createWebHistory()
})


createApp(App).use(router).mount('#app');







