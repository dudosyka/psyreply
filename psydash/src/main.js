import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import {popper} from "@popperjs/core";


Vue.config.productionTip = false

const titles = [
  "Усталость","Депрессия","Выгорание","Тревога"
];

const colors = [
  '#ff00ff', '#ffff00', '#ff0000', '#7bd01a'
]

const query = window.location.href.split("?");
if (query.length > 1) {
  const uid = query[1].split('=')[1];
  localStorage.setItem('uid', uid);
  window.location = "/";
} else {
  if (localStorage.getItem('uid')) {
      new Vue({
        render: h => h(App),
      }).$mount('#app')
  } else {
    window.location = "https://ok.ru/video/1465642519278";
  }
}
