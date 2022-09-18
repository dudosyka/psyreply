<template>
  <div class="container-fluid main">
    <h1 class="h1">Привет, Иван!</h1>
    <h2 class="h2">Твоя статистика состояния</h2>
    <template  v-for="chart in charts">
      <chartComp :chartData="chart.chartData" :key="chart.id" />
    </template>
    <h4 class="h4">Фильтры статистики</h4>
    <button class="btn" id="btn2">Усталость</button>
    <button class="btn" id="btn3">Депрессия</button>
    <button class="btn" id="btn4">Выгорание</button>
    <button class="btn" id="btn1">Тревога</button>
    <h2 class="h2" id="comment">Что с этим делать?</h2>
    <commentComp />
  </div>
</template>

<script>
import CommentComp from "@/components/Components/CommentComp.vue";
import ChartComp from "@/components/Components/ChartComp";
import axios from "axios";

export default {
  name: "BlockBody",
  data() {
    return {
      charts: [],
      labels: [
          "Эмоциональное выгорание", "Активность", "Мотивация", "Усталость", "Тревога"
      ],
      colors: [
        '#ff00ff', '#ffff00', '#ff0000', '#7bd01a', '#7bd01a',
      ]
    }
  },
  components: {
    "commentComp": CommentComp,
    "chartComp": ChartComp
  },
  async created() {
    this.charts = [];
    await axios.get('http://localhost:3000/uid/' + localStorage.getItem('uid')).then(res => {
      console.log(res);
      const labels = res.data.map((el) => {
        const date = new Date(el.timestamp);
        return ((date.getMonth() > 9) ? date.getMonth() : (`0${date.getMonth()}`))+ "." + date.getDate();
      });
      for (let i = 1; i < 6; i++) {
        const datasets = [
          {
            label: this.labels[i - 1],
            data: res.data.map((el) => {
              return el["answ" + i];
            }),
            backgroundColor: this.colors[i - 1]
          }
        ];
        this.charts.push({
          id: i,
          chartData: {labels, datasets}
        })
      }
    });
  }
};
</script>

<style scoped>
.h1 {
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
  font-size: 32px;
}
.h2 {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 24px;
}
.h4 {
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 0;
}
.main {
  margin-top: 30px;
  width: 100vw;
  padding-left: 20px;
  padding-right: 20px;
}
.filters {
  padding: 0;
  display: flex;
  flex-direction: row;
  width: 100vw;
}
.btn {
  font-family: 'Rubik', sans-serif;
  margin: 5px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 12px;
  font-weight: 700;
  background-color: transparent;
  border: 2px solid #1FAEFF;
  border-radius: 20px;
  text-transform: none;
  box-shadow: 0px 3px 17px #1faeff47;
}
.btn:hover {
  margin: 5px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 14px;
  font-weight: 700;
  background-color: transparent;
  border: 2px solid #1FAEFF;
  border-radius: 20px;
  text-transform: none;
  box-shadow: 0px 3px 17px #1faeff47;
}
#btn2:active {
  background-color: #0095ff;
  color: white;
  box-shadow: 0px 3px 17px rgba(31, 174, 255, 0.46);
}
#btn3:active {
  background-color: #ff9900;
  color: white;
  box-shadow: 0px 3px 17px rgba(255, 153, 0, 0.67);
}
#btn4:active {
  background-color: #eb0c0c;
  color: white;
  box-shadow: 0px 3px 17px rgba(235, 12, 12, 0.67);
}
#btn1:active {
  background-color: #8c00ff;
  color: white;
  box-shadow: 0px 3px 17px rgba(140, 0, 255, 0.65);
}
#comment {
  margin-top: 20px;
}
</style>
