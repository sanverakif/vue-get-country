import Vue from 'vue'
import VueRouter from 'vue-router'
import countryDetail from '../components/countryDetail'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [{
    name: "HomePage",
    path: "/",
    component: Home
}, {
    name: "countryDetail",
    path: "/countryDetail/:countryDetail",
    component: countryDetail
}, ]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router