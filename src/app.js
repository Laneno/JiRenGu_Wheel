import Vue from 'vue'
import Button from './button'
//引入的目的是为了让app.js认识vue哈

Vue.component('g-button', Button);

new Vue({
    el:'#app'
})