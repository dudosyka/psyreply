import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const query = window.location.href.split("?");
if (query.length > 1) {
    const uid = query[1].split('=')[1];
    localStorage.setItem('uid', uid);
    // @ts-ignore
    window.location = "/";
} else {
    if (localStorage.getItem('uid')) {
        createApp(App).mount('#app')
    } else {
        // @ts-ignore
        window.location = "https://ok.ru/video/1465642519278";
    }
}
