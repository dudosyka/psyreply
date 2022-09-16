<template>
  <div class="container-fluid main">
    <h1 class="h1">Привет, Иван!</h1>
    <h2 class="h2">Твоя статистика состояния</h2>
    <chartComp />
    <h4 class="h4">Фильтры статистики</h4>
    <button class="btn" id="btn2">Усталость</button>
    <button class="btn" id="btn3">Депрессия</button>
    <button class="btn" id="btn4">Выгорание</button>
    <button class="btn" id="btn1">Тревога</button>
    <h2 class="h2" id="comment">Что с этим делать?</h2>
    <commentComp />
  </div>
</template>

<script lang="ts">
import CommentComp from "@/components/Components/CommentComp.vue";
import ChartComp from "@/components/Components/ChartComp";
import {defineComponent} from "vue";

export default defineComponent({
  name: "BlockBody",
  components: {
    "commentComp": CommentComp,
    "chartComp": ChartComp
  }
});
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
