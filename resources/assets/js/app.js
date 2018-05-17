import Vue from 'vue';
import BootrapVue from 'bootstrap-vue';
import ParticlesJS from 'particles.js';

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

particlesJS.load('home', '/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });
