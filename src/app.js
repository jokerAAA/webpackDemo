import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from './router'

console.log('startWorking');
Vue.use(VueRouter);
const router = new VueRouter({
    routes
})
new Vue({
    router
}).$mount("#app");