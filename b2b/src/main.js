import 'mdb-vue-ui-kit/css/mdb.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import VStickyElement from 'vue-sticky-element';
import Vue3Autocounter from 'vue3-autocounter';
import AosVue from "aos-vue";
import 'mdb-vue-ui-kit/css/mdb.min.css';
import VueApexCharts from "vue3-apexcharts";


createApp(App).use(VueApexCharts).use(AosVue).use(Vue3Autocounter).use(VStickyElement).mount('#app')
