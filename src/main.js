import Vue from 'vue'
import App from './App.vue'
import Slider from './components/Slider.vue'
import Header from './components/Header.vue'
import Contents from './components/Contents.vue'
import Footer from './components/Footer.vue'



import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


Vue.component('app-header', Header);
Vue.component('app-slider', Slider);
Vue.component('app-content', Contents,{});
Vue.component('app-footer',Footer);




Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
