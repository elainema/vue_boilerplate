import Vue from 'vue'
import VueRouter from 'vue-router'





/*this use vue router async load component*/
const About = r => require.ensure([], () => r(require('./modules/About.vue')), 'About')
const Index = r => require.ensure([], () => r(require('./modules/Index.vue')), 'Index')
const Home = r => require.ensure([], () => r(require('./modules/Home.vue')), 'Home')





Vue.use(VueRouter)



const router = new VueRouter({
    base: __dirname,
    mode: 'hash',
    routes: [
        { path: '/', component: Index },
        { path: '/about', component: About },
        { path: '/home', component: Home },
        { path: '/*', component: Index }
    ]
})
router.beforeEach((to, from, next) => {
    console.log("from: " + from.fullPath)
    console.log("to path: " + to.fullPath)
    window.scrollTo(0, 0)
    next() 
})

export default router
