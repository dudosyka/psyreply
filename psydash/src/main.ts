import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import axios from "axios";

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
    // @ts-ignore
    window.location = "/";
} else {
    if (localStorage.getItem('uid')) {
        axios.get('http://localhost:3000/uid/' + localStorage.getItem('uid')).then(res => {
            const labels = res.data.map((el: { timestamp: number }) => {
                const date = new Date(el.timestamp);
                return ((date.getMonth() > 9) ? date.getMonth() : (`0${date.getMonth()}`))+ "." + date.getDate();
            });
            let i = 0;
            console.log(res.data);
            const datasets = [];
            for (let i = 1; i < 5; i++) {
                datasets.push({
                    label: titles[i - 1],
                    data: res.data.map((el: { [key:string]: number }) => {
                        return el["answ" + i];
                    }),
                    backgroundColor: colors[i - 1]
                })
            }
            console.log(datasets);
            localStorage.setItem('labels', JSON.stringify(labels));
            localStorage.setItem('datasets', JSON.stringify(datasets));
            createApp(App).mount('#app')
        });
    } else {
        // @ts-ignore
        window.location = "https://ok.ru/video/1465642519278";
    }
}
