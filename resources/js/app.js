
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

import Inertia from 'inertia-vue'
import Vue from 'vue'

let app = document.getElementById('app')

new Vue({
    render: h => h(Inertia, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: (component) => {
                return import(`@/Pages/${component}`).then(module => module.default)
            },
        },
    }),
}).$mount(app)
