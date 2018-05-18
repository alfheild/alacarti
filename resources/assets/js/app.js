import Vue from 'vue';
import BootrapVue from 'bootstrap-vue';
import Granim from 'granim';
import VBar from 'vuebar';

require('particles.js');

Vue.use(BootrapVue);
Vue.use(VBar);

/* axios config
let token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
*/

new Vue({
    el: '#app'
});

new Granim({
    element: '#granim-canvas',
    name: 'granim',
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#EE7752', '#E73C7E'],
                ['#C95924', '#CE8A04'],
                ['#E73C7E', '#EE7752'],
            ],
            transitionSpeed: 20000,
        }
    },
});

particlesJS.load('particles', '/particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
});
