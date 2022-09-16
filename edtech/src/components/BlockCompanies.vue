<template>
  <div class="container-fluid">
    <div class="container">
    <h3>Кому подойдет сервис?</h3>
     <div class="row">
      <div class="col-sm">
        <div class="card card1" style="width: 21.6rem;">
          <div class="card-body">
            <div class="icon">
              <i class="fa-solid fa-user-graduate" style="margin-right: 10px;"></i><h1 class="card-h">Онлайн-Университетам</h1>
            </div>
            <hr />
            <p class="card-text">Дающим возможность своим студентам получить новую профессию, пройдя обучения от 6 до 24 месяцев </p>
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="card card3 animate__animated animate__fadeInUp" style="width: 21.6rem;">
        <div class="card-body">
          <div class="icon">
            <i class="fa-solid fa-chalkboard-user" style="margin-right: 10px;"></i><h1 class="card-h">Онлайн-школам</h1>
          </div>
          <hr />
          <p class="card-text">Проводящим обучение для взрослых, длительностью от 3-х недель</p>
        </div>
      </div>
      </div>
      <div class="col-sm">
        <div class="card card2" style="width: 21.6rem;">
          <div class="card-body">
            <div class="icon">
              <i class="fa-brands fa-youtube" style="margin-right: 10px;"></i><h1 class="card-h">Экспертам</h1>
            </div>
            <hr />
            <p class="card-text">Запускающим онлайн-курсы с проверкой домашнего задания кураторами</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockMore"
}
</script>

<style scoped>
@media only screen and (max-width: 414px) {
  h3 {
    padding-top: 50px!important;
    text-align: left!important;
    padding-left: 12px!important;
    font-size: 29px!important;
  }
  .row {
    position: relative;
    width: 100vw!important;
  }
  .card-h {
    text-align: left;
  }
  .card-text {
    text-align: left;
  }
  .icon {
    justify-content: flex-start!important;
  }
  .col-sm {
    padding-top: 35px!important;
    padding-bottom: 0px!important;
  }
  .container-fluid {
    padding-bottom: 60px!important;
  }
  .card {
    width: 22.7rem!important;
  }
}
.fa-user-graduate:before {
  font-size: 27px;
  margin-bottom: 11px;
  bottom: 12px;
}
.fa-chalkboard-user:before {
  font-size: 25px;
}
.fa-youtube:before {
  font-size: 25px;
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
  margin-bottom: 13px;
  color: #f3f3f3;
}
.container-fluid {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-image: url("../assets/bg3.jpg");
  background-size: cover;
}
.card {
  background: transparent;
  border-radius: 20px;
  font-weight: 400;
  border: 0px solid #0000000f;
  -o-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  z-index: 1;
  width: 18rem;

}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.col-sm {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  justify-content: flex-start;
  padding-top: 40px;
  padding-bottom: 110px;
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
  width: 71rem;
  display: flex;
  align-content: center;
  flex-direction: row;
  align-items: center;
}
.card-text {
  font-size: 16px;
  text-align: left;
}
.card-body {
  text-align: center;
  background-image: linear-gradient(120deg, #3a68bd 0%, #366d9d 100%);
  color: white;
  padding: 30px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  border: 2px solid #edecec96;
  min-height: 189px;
  box-shadow: 0px 10px 30px rgb(0 122 227 / 75%);
  align-content: flex-start;
  align-items: flex-start;
}
.card-h {
  font-size: 18px;
  font-weight: 700;
  text-align: left;
}
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 2px solid rgb(255 255 255);
  width: 50px;
  width: 285px;
  align-self: flex-start;
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