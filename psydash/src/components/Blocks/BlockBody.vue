<template>
  <div class="container-fluid main">
    <h1 class="h1">Привет, {{ name }}</h1>
    <h2 class="h2">Твоя статистика состояния</h2>
    <template v-if="loaded">
      <nav>
        <div class="nav nav-tabs navbar-bottom" id="nav-tab" role="tablist">
          <button class="nav-link active" id="nav-burnout-tab" data-bs-toggle="tab" data-bs-target="#nav-burnout" type="button" role="tab" aria-controls="nav-burnout" aria-selected="true" @click="changeTo('burnout')">Выгорание</button>
          <button class="nav-link" id="nav-activity-tab" data-bs-toggle="tab" data-bs-target="#nav-activity" type="button" role="tab" aria-controls="nav-activity" aria-selected="false" @click="changeTo('activity')">Активность</button>
          <button class="nav-link" id="nav-motivation-tab" data-bs-toggle="tab" data-bs-target="#nav-motivation" type="button" role="tab" aria-controls="nav-motivation" aria-selected="false" @click="changeTo('motivation')">Мотивация</button>
          <button class="nav-link" id="nav-fatigue-tab" data-bs-toggle="tab" data-bs-target="#nav-fatigue" type="button" role="tab" aria-controls="nav-fatigue" aria-selected="false" @click="changeTo('fatigue')">Усталость</button>
          <button class="nav-link" id="nav-anxiety-tab" data-bs-toggle="tab" data-bs-target="#nav-anxiety" type="button" role="tab" aria-controls="nav-anxiety" aria-selected="false" @click="changeTo('anxiety')">Тревога</button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-burnout" role="tabpanel" aria-labelledby="nav-burnout-tab"><chartComp id="burnout" :chartData="charts[0].chartData" /></div>
        <div class="tab-pane fade" id="nav-activity" role="tabpanel" aria-labelledby="nav-activity-tab"><chartComp id="activity" :chartData="charts[1].chartData" /></div>
        <div class="tab-pane fade" id="nav-motivation" role="tabpanel" aria-labelledby="nav-motivation-tab"><chartComp id="motivation" :chartData="charts[2].chartData" /></div>
        <div class="tab-pane fade" id="nav-fatigue" role="tabpanel" aria-labelledby="nav-fatigue-tab"><chartComp id="fatigue" :chartData="charts[3].chartData" /></div>
        <div class="tab-pane fade" id="nav-anxiety" role="tabpanel" aria-labelledby="nav-anxiety-tab"><chartComp id="anxiety" :chartData="charts[4].chartData" /></div>
      </div>
    </template>
    <template v-else>
      <h1>Идите нахер!</h1>
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
      ],
      name: "",
      loaded: false
    }
  },
  components: {
    "commentComp": CommentComp,
    "chartComp": ChartComp
  },
  methods: {
    changeTo(id) {
      document.getElementById(id).style.height = '300px';
      var resizeEvent = window.document.createEvent('UIEvents');
      resizeEvent.initUIEvent('resize', true, false, window, 0);
      window.dispatchEvent(resizeEvent);
    }
  },
  async created() {
    this.charts = [];
    axios.get('https://mailer.psyreply.com/name/'+ localStorage.getItem('uid')).then(res => {
      this.name = res.data.name.name;
    })
    await axios.get('https://mailer.psyreply.com/uid/'+localStorage.getItem('uid')).then(res => {
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
      this.loaded = true;
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
