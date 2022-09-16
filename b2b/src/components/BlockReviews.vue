<template>
  <div class="container">
    <Carousel :itemsToShow="3.95" :wrapAround="true">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">
        <div class="card card3 animate__animated animate__fadeInUp" style="width: 18rem;">
          <div class="card-body">
            <div class="icon">
              <img class="tick" src="../assets/tick.svg">
              <h1 class="card-h">Проектным компаниям</h1>
            </div>
            <hr />
            <p class="card-text">Когда успех напрямую связан с работоспособностью и концентрацией внимания, важно выжимать из рабочих часов максимум. Сотрудник, вовремя получивший психологическую поддержку, справляется с интеллектуальной нагрузкой и умеет доводить каждый проект до конца.
            </p>
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Navigation, Slide } from 'vue3-carousel/dist/carousel.es'
import 'vue3-carousel/dist/carousel.css'
export default defineComponent({
  name: 'BlockReviews',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
})
</script>

<style scoped>
.carousel {
  height: 700px;
}
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}

.container {
  height: 700px;
}

.tick {
  width: 30px;
  box-shadow: -1px 3px 17px #0095ff8c;
  border-radius: 48px;
}
.icon {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
}
h3 {
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  padding-left: 30px;
  margin-bottom: 30px;
}
.container-fluid {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='500' preserveAspectRatio='none' viewBox='0 0 1440 500'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1066%26quot%3b)' fill='none'%3e%3crect width='1440' height='500' x='0' y='0' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M27 500L527 0L612.5 0L112.5 500z' fill='url(%23SvgjsLinearGradient1067)'%3e%3c/path%3e%3cpath d='M375.8 500L875.8 0L992.8 0L492.8 500z' fill='url(%23SvgjsLinearGradient1067)'%3e%3c/path%3e%3cpath d='M675.6 500L1175.6 0L1475.6 0L975.6 500z' fill='url(%23SvgjsLinearGradient1067)'%3e%3c/path%3e%3cpath d='M1439 500L939 0L832.5 0L1332.5 500z' fill='url(%23SvgjsLinearGradient1068)'%3e%3c/path%3e%3cpath d='M1117.2 500L617.2 0L344.20000000000005 0L844.2 500z' fill='url(%23SvgjsLinearGradient1068)'%3e%3c/path%3e%3cpath d='M751.4 500L251.39999999999998 0L-204.60000000000002 0L295.4 500z' fill='url(%23SvgjsLinearGradient1068)'%3e%3c/path%3e%3cpath d='M1186.3703104228819 500L1440 246.3703104228819L1440 500z' fill='url(%23SvgjsLinearGradient1067)'%3e%3c/path%3e%3cpath d='M0 500L253.6296895771181 500L 0 246.3703104228819z' fill='url(%23SvgjsLinearGradient1068)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1066'%3e%3crect width='1440' height='500' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1067'%3e%3cstop stop-color='rgba(177%2c 221%2c 255%2c 0.28)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(177%2c 221%2c 255%2c 0.28)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1068'%3e%3cstop stop-color='rgba(177%2c 221%2c 255%2c 0.28)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(177%2c 221%2c 255%2c 0.28)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  padding-top: 50px;
}
.card {
  padding: 10px;
  background: transparent;
  border-radius: 20px;
  font-weight: 400;
  border: 0px solid #0000000f;
  -o-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  z-index: 1;

}
.col-sm {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  justify-content: flex-start;
}
.counterbg {
  font-size: 30px;
  background: rgba(255, 255, 255, 0.72);
  border: 2px solid #6cc3ff;
  padding: 9px;
  border-radius: 13px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 24px #0089ff40;
  position: relative;
  z-index: 0;
  font-weight: 700;
  width: 191px;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;

}
.card-img-top {
  position: relative;
}
.row {
  position: relative;
}
.card-text {
  font-size: 14px;
}
.card-body {
  text-align: center;
  background-image: linear-gradient(120deg, #66a6ff 0%, #89d8fe 100%);
  color: white;
  padding: 30px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 40px #0095ff2e;
  border: 2px solid #fafafa;
  min-height: 301px;
}
.card-h {
  font-size: 18px;
  font-weight: 700;
  text-align: center;
}
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 2px solid rgb(255 255 255);
  width: 50px;
  align-self: center;
}
.card1 {
  animation-delay: 0.1s;
}
.card2 {
  animation-delay: 0.2s;
}
.card3 {
  animation-delay: 0.3s;
}
b {
  font-weight: 700;
}
.accent {
  background: #86b7fe4a;
  padding-bottom: 0;
  line-height: 16px;
  /* padding-left: 10px; */
  /* padding-right: 10px; */
  border-radius: 3px;
  white-space: nowrap;
  margin-left: -10px;
}
</style>