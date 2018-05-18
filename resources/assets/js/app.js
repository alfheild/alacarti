import Vue from 'vue';
import BootrapVue from 'bootstrap-vue';
import ParticlesJS from 'particles.js';
import Granim from 'granim';
import $ from 'jquery';

Vue.use(BootrapVue);

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

var granimInstance = new Granim({
    element: '#granim-canvas',
    name: 'granim',
    opacity: [1, 1],
    states: {
        "default-state": {
            gradients: [
                ['#EE7752', '#E73C7E'],
                ['#E73C7E', '#EE7752'],
            ]
        }
    }
});

particlesJS.load('home', '/particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
});
