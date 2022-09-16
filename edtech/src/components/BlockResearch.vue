<template>
<div class="container-fluid">
  <div class="researches container-fluid">
     <div class="heading">
       <h3 style="text-align: left;">Что изучает сервис?</h3>
        <p class="descriptionone">Чтобы помогать вашим клиентам учиться эффективнее, мы изучаем:</p>
     </div>
    <div class="research1">
      <span class="number one">1</span>
      <div class="row">
        <div class="col-md">
          <p class="title">Динамику усталости и выгорания</p>
        </div>
        <div class="row">
        <p class="description">Это исследование лежит в основе нашего сервиса. Мы изучаем состояние студента, проводя регулярные опросы, и анализируем запросы к психологу</p>
        </div>
      </div>
    </div>
    <div class="research1">
      <span class="number">2</span>
      <div class="row">
        <div class="col-md">
          <p class="title">Динамику мотивации и вовлеченности</p>
        </div>
        <div class="row">
          <p class="description">Проводится двухэтапное исследование не только студентов нового потока, но и прошлого, для того, чтобы найти и проработать точки разочарования в купленном обучении</p></div>
      </div>
    </div>
    <div class="research1">
      <span class="number">3</span>
      <div class="row">
        <div class="col-md">
          <p class="title">Перспективу вторичных покупок</p>
        </div>
        <div class="row">
          <p class="description">Задача этого исследования выявить перспективы и точки мотивации для вторичных продаж. Подойдет для курсов до 6 месяцев</p>
        </div>
      </div>
    </div>
    <div class="research1">
      <span class="number">4</span>
      <div class="row">
        <div class="col-md">
          <p class="title">Оцениваем скрытый потенциал</p>
        </div>
        <div class="row">
          <p class="description">До цели доходят не самые перспективные, а самые целеустремленные. Наша поддержка помогает перспективным студентам остаться в строю. Подойдет для Школ, которые помогают в трудоустройстве или готовят кадры для себя</p>
        </div>
      </div>
    </div>
    <p class="small-text">*Каждое исследование адаптируется под запросы онлайн-школы</p>
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
    border: 0px!important;
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
  color: #f3f3f3;
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
  background-image: linear-gradient(120deg, #3a68bd 0%, #366d9d 100%);
  border-radius: 10px;
  margin-right: 10px;
  border: 2px solid #ffffff94;
  box-shadow: 0px 5px 20px rgb(0 122 227 / 60%);
  padding: 32px;

}
.title {
  text-align: left;
  font-size: 22px;
  font-weight: 700;
  align-self: center;
  padding-left: 40px;
  margin-bottom: 10px;
  color: #f3f3f3;
}
.description {
  text-align: left;
  font-size: 16px;
  margin-left: 40px;
  align-self: center;
  color: #f3f3f3;
}
.researches.container-fluid {
  display: flex!important;
  flex-direction: column;
  width: 70vw;
  align-self: center;
  background-color: #222;
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
  background: #1e1e1e;
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
  color: #f3f3f3;
}
.descriptionone {
  text-align: left;
  font-size: 22px;
  padding-top: 10px;
  font-weight: 500;
  padding-left: 0px;
}
</style>