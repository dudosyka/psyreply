<template>
<!--<div class="container-fluid">-->
<!--  <h3>Частые вопросы и ответы на них</h3>-->
<!--  <div class="slider">-->
<!--  <Carousel ref="carousel" v-model="currentSlide">-->
<!--    <Slide :key="1">-->
<!--      <div class="carousel__item">-->
<!--        <FaqChat />-->
<!--      </div>-->
<!--    </Slide>-->
<!--    <Slide :key="2">-->
<!--      <div class="carousel__item">-->
<!--        <FaqChat2 />-->
<!--      </div>-->
<!--    </Slide>-->
<!--    <Slide :key="3">-->
<!--      <div class="carousel__item">-->
<!--        <FaqChat3 />-->
<!--      </div>-->
<!--    </Slide>-->
<!--    <Slide :key="4">-->
<!--      <div class="carousel__item">-->
<!--        <FaqChat4 />-->
<!--      </div>-->
<!--    </Slide>-->
<!--    <Slide :key="5">-->
<!--      <div class="carousel__item">-->
<!--        <FaqChat5 />-->
<!--      </div>-->
<!--    </Slide>-->
<!--    <Slide :key="6">-->
<!--      <div class="carousel__item">-->
<!--        <FaqChat6 />-->
<!--      </div>-->
<!--    </Slide>-->
<!--    <Slide :key="7">-->
<!--      <div class="carousel__item">-->
<!--        <FaqChat7 />-->
<!--      </div>-->
<!--    </Slide>-->
<!--    <Slide :key="8">-->
<!--      <div class="carousel__item">-->
<!--        <FaqChat8 />-->
<!--      </div>-->
<!--    </Slide>-->

<!--    <template #addons>-->
<!--      <Navigation />-->
<!--      <Pagination />-->
<!--    </template>-->
<!--  </Carousel>-->
<!--</div>-->
<!--</div>-->
  <div class="container-fluid">
    <h3>Подробнее о сервисе</h3>
    <div class="container"><MDBAccordion v-model="activeItem" style="text-align: left;">
      <MDBAccordionItem
          headerTitle="Как это работает?"
          collapseId="collapseOne"
      >
        Всё просто! Мы работаем на базе мессенджера телеграмм. Студенты получают ссылку на свой персональный чат с психологом и промо-код, присвоенный вашей Онлайн-школе для идентификации.<br><br>

        Дальше к общению подключается психолог, который отслеживает состояние Студента и отвечает на его входящие запросы.<br><br>

        Психологи нашего сервиса - живые люди и могут сам инициировать диалог, например, когда видят результаты или динамику обязательного еженедельного опроса.<br><br>

        Обращаться в поддержку можно каждый день, даже в выходные, из любого часового пояса и точки мира. Наши базовые языки — русский и английский, но мы готовы работать и на другом языке.<br><br>
      </MDBAccordionItem>
      <MDBAccordionItem
          headerTitle="Психолог по подписке - это эффективно?"
          collapseId="collapseTwo"
      >
        Да, <a href="https://psyreply.com/docs/research2.pdf">исследование</a>, в котором участвуют 15 849 человек, доказывает, что текстовая терапия помогает справляться с симптомами депрессии, тревоги и улучшать производительность труда так же хорошо, как и традиционная терапия. <br><br>
        Наша методология основана на методах, которые применяли психологи в этом исследовании и адаптированная под русскоязычных пользователей.<br><br>
        А учитывая, что ваши Клиенты будут общаться в нашем Сервисе с Реальными психологами, каждый клиент может отправлять сообщения в любой удобной форме: текст, голосовое или видео-сообщения.<br><br>
        Вариативность формы сообщений дополнительно повышает эффективность нашего Сервиса для ваших Клиентов.<br><br>

      </MDBAccordionItem>
      <MDBAccordionItem
          headerTitle="Вашим психологам можно доверять?"
          collapseId="collapseThree"
      >
        Все психологи чата прошли строгий отбор. Первый этап 3-х этапного отбора психологов вы можете пройти самостоятельно <a href="https://t.me/eva_stuff_bot">здесь</a>
      </MDBAccordionItem>
      <MDBAccordionItem
          headerTitle="Я могу попросить психолога решить проблему?"
          collapseId="collapseFour"
      >
        Да, например, если вы предупредите нас о произошедшем техническом сбое или задержке в проверке домашних заданий и других трудностях. Мы сгладим негативный фон без дополнительных затрат и поможем им справиться со стрессом.<br><br>
        Так же мы будем рады, если вы поделитесь с нами своими предположениями о возможных сложностях, а о опыте прошлых потоков мы вас обязательно расспросим сами
      </MDBAccordionItem>
      <MDBAccordionItem
          headerTitle="Какие данные вы будете получать и как часто?"
          collapseId="collapseEight"
      >
        Еженедельно, в независимости от продолжительности курса, мы собираем и анализируем опросы, регулярные тестирования и сообщения, которые сотрудники оставляют в своих индивидуальных чатах.<br><br>
        Благодаря этому, у вас на руках будет дашборд, на который будет выводиться и регулярно обновляться динамика развития психологического благополучия, общее состояние группы, зоны риска, точки роста и другие данные по Студентам.
      </MDBAccordionItem>
    </MDBAccordion></div>
  </div>
</template>

<script>
// import FaqChat from "@/components/FaqChat";
// import FaqChat2 from "@/components/FaqChat2";
// import FaqChat3 from "@/components/FaqChat3";
// import FaqChat4 from "@/components/FaqChat4";
// import FaqChat5 from "@/components/FaqChat5";
// import FaqChat6 from "@/components/FaqChat6";
// import FaqChat7 from "@/components/FaqChat7";
// import FaqChat8 from "@/components/FaqChat8";
import { MDBAccordion, MDBAccordionItem } from "mdb-vue-ui-kit";
import { ref } from "vue";
import { defineComponent } from 'vue'
// import { Carousel, Pagination, Navigation, Slide } from 'vue3-carousel/dist/carousel.es'
// import 'vue3-carousel/dist/carousel.css'
export default defineComponent( {
  name: "BlockFaq",
  components: {
    // FaqChat,
    // FaqChat2,
    // FaqChat3,
    // FaqChat4,
    // FaqChat5,
    // FaqChat6,
    // FaqChat7,
    // FaqChat8,
    // Carousel,
    MDBAccordion,
    MDBAccordionItem,
    // Slide,
    // Pagination,
    // Navigation
  },
  setup(){
    const activeItem = ref('collapseOne');
    return {
      activeItem
    }
  }
})

</script>

<style scoped>
@media only screen and (max-width: 414px) {
  h3 {
    padding-top: 50px!important;
    text-align: left!important;
    margin-bottom: 40px!important;
    padding-right: 35px!important;
  }
  .container {
    width: 95vw!important;
    padding-bottom: 50px!important;
  }
  .container-fluid {
    background: transparent!important;
  }
}
.accordion-body {
  text-align: left;
}
.carousel__prev, .carousel__next {
  background-color: #2a91fb!important;
}
.slider {
  width: 55vw;
}
.container-fluid {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #212121;
  box-shadow: 0px 0px 34px #00000073, 0px -14px 30px #00000094;
  position: relative;
}
h3 {
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 53px;
  padding-top: 90px;
  color: #f3f3f3;
}
b {
  font-weight: 700;
}
.accordion-body {
  font-weight: 300!important;
}
.container {
  width: 73vw;
  padding-bottom: 110px;
}
a {
  color: white;
}
a:hover {
  color: white;
}
</style>