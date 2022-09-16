<template>
<div class="container-fluid">
  <div class="researches container-fluid">
     <div class="heading">
       <h3 style="text-align: left;">Что исследует сервис</h3>
        <p class="descriptionone">Чтобы помогать вашим сотрудникам работать эффективнее, мы изучаем:</p>
     </div>
    <div class="research1">
      <span class="number one">1</span>
      <div class="row">
        <div class="col-md">
          <p class="title">Динамику усталости и выгорания</p>
        </div>
        <div class="row">
        <p class="description">Это исследование лежит в основе нашего сервиса. Мы изучаем состояние сотрудника, проводя регулярные опросы и тесты, анализируем запросы к психологу</p>
        </div>
      </div>
    </div>
    <div class="research1">
      <span class="number">2</span>
      <div class="row">
        <div class="col-md">
          <p class="title">Точки мотивации каждого сотрудника</p>
        </div>
        <div class="row">
          <p class="description">Мы анализируем, что помогает вашим подчиненным работать лучше, предоставляем вам результаты и отвечаем на вопросы о мотивации сотрудников на очной сессии</p>
        </div>
      </div>
    </div>
    <div class="research1">
      <span class="number">3</span>
      <div class="row">
        <div class="col-md">
          <p class="title">Совместимость сотрудников</p>
        </div>
        <div class="row">
          <p class="description">Двухэтапное исследование социального интеллекта поможет понять, как собирать проектные команды из имеющихся сотрудников</p>
        </div>
      </div>
    </div>
    <div class="research1">
      <span class="number">4</span>
      <div class="row">
        <div class="col-md">
          <p class="title">Cкрытый потенциал</p>
        </div>
        <div class="row">
          <p class="description">Работа с малыми группами и тестирование выявляют скрытый творческий потенциал подчиненных, который можно применить в новых проектах</p>
        </div>
      </div>
    </div>
    <p class="small-text">*Каждое исследование адаптируется под запросы компании</p>
    <div data-aos="fade-up">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "BlockResearch"
}
</script>

<style scoped>
@media only screen and (max-width: 414px) {
  .descriptionone {
    text-align: left;
    font-size: 24px!important;
    padding-top: 10px;
    font-weight: 500;
    padding-left: 0px;
  }
  .title {
    font-size: 16px!important;
    padding-left: 21px!important;
  }
  .description {
    font-size: 14px!important;
    margin-left: 20px!important;
    padding-left: 11px!important;
  }
  .researches.container-fluid {
    padding-top: 50px!important;
    padding-bottom: 50px!important;
    width: 100%!important;
    border-radius: 0px!important;
    box-shadow: 0px 0px 0px!important;
    margin-left: 0px!important;
    padding: 32px!important;
    padding-bottom: 65px!important;
    padding-top: 65px!important;
  }
  .container-fluid {
    padding-left: 0px!important;
    padding-right: 0px!important;
    padding-bottom: 0!important;
  }
  h3 {
    text-align: left!important;
  }
  .number {
    background-color: transparent!important;
    background-image: none!important;
    box-shadow: 0px 0px 0px!important;
    color: #669cff!important;
    padding: 0px!important;
    flex-direction: column!important;
    justify-content: flex-start!important;
    margin-right: 20px!important;
  }
  .one {
    margin-right: 30px!important;
  }
  .title {
    padding-top: 8px!important;
    padding-left: 0px!important;
    margin-left: 0px!important;
  }
  .description {
    padding-left: 11px!important;
    margin-left: 0px!important;
  }
  .research1 {
    display: flex;
    flex-direction: row!important;
    justify-content: center!important;
    align-items: flex-start!important;
    align-content: flex-start!important;
    flex-wrap: nowrap!important;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  h3 {
    font-size: 29px!important;
  }
}
.small-text {
  font-size: 15px;
  padding-top: 25px;
  font-weight: 500;
  text-align: left;
  width: 100%;
  color: #363636;
}
.number {
  font-size: 55px;
  font-weight: 700;
  display: flex;
  color: white;
  width: 74px;
  height: 74px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(120deg, #669cff 0%, #6cb9fb 100%);
  border-radius: 10px;
  margin-right: 10px;
  border: 2px solid white;
  box-shadow: 0px 0px 25px #0089ff4a;
  padding: 32px;

}
.title {
  text-align: left;
  font-size: 22px;
  font-weight: 700;
  align-self: center;
  padding-left: 40px;
  margin-bottom: 10px;
}
.description {
  text-align: left;
  font-size: 16px;
  margin-left: 40px;
  align-self: center;
}
.researches.container-fluid {
  display: flex!important;
  flex-direction: column;
  width: 70vw;
  align-self: center;
  background-color: #fff;
  padding: 53px;
  border-radius: 40px;
  box-shadow: 0 12px 43px #0000002b;
  align-content: center;
  align-items: center;
  justify-content: center;
}
.research1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: nowrap;
  margin-bottom: 10px;
  margin-top: 10px;
}
h3 {
  font-size: 30px;
  font-weight: 700;
  text-align: left;

}
.container-fluid {
  padding-top: 50px;
  background: #f6fafb;
  padding-bottom: 110px;
}
.row {}
.btn {
  margin-top: 30px;
  text-transform: none;
  border-radius: 27px;
  background-image: linear-gradient(120deg, #89c8fe 0%, #66a6ff 60%);
  color: white;
  font-size: 20px;
  box-shadow: 0px 0px 12px rgb(137 210 255 / 47%);
  font-weight: 600;
  font-family: 'Rubik', sans-serif;
  border: 2px solid #cce5ff;
}
.buttonresearch {
  flex-direction: column;
  align-items: center;
  position: relative;
}
.heading {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: nowrap;
  padding-bottom: 36px;
}
.descriptionone {
  text-align: left;
  font-size: 22px;
  padding-top: 10px;
  font-weight: 500;
  padding-left: 0px;
}
</style>