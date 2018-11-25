import Vue from 'vue'
import Button from './button'

Vue.component('g-button', Button)

new Vue({
    el: '#app',
    data() {
        return {
            msg: '还是好了'
        }
    }
})