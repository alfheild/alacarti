import VueRouter from 'vue-router';
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: require('./views/Home')
        },
    ],
});
export { router, VueRouter };
export default router;