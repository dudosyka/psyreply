<template>
  <div class="container-fluid d-flex">
      <div class="row">
      <div class="col hero-col-1 animate__animated animate__fadeInLeft">
        <div class="nav">
          <div class="col">
          <a class="navbar-brand" href="https://psyreply.com">
            <img src="../assets/logo.png" alt="" width="50" height="50" class="d-inline-block align-text-top">
            PsyReply
          </a>
          </div>
          <div class="col navi">
          <a class="edtech" href="https://edtech.psyreply.com"><b>EdTech</b></a>
          <p class="separator"> | </p>
          <a class="b2b" href="https://b2b.psyreply.com">B2B</a>
          </div>
        </div>
        <NavBar class="mobilenav" />
        <h1 class="headingmain ">Персональный чат <br>с психологом</h1>
        <h2>Сервис поддержки клентов EdTech:</h2>
        <ul class="heroul">
          <li class="listitem1 animate__animated animate__fadeInUp"><i class="fa-solid fa-circle-check" style="font-size: 16px; padding-right: 5px; color: #669cff;"></i>Повышает доходимость в онлайн-обучении</li>
          <li class="listitem2 animate__animated animate__fadeInUp"><i class="fa-solid fa-circle-check" style="font-size: 16px; padding-right: 5px; color: #669cff;"></i>Увеличивает колличество лояльных клиентов</li>
          <li class="listitem3 animate__animated animate__fadeInUp"><i class="fa-solid fa-circle-check" style="font-size: 16px; padding-right: 5px; color: #669cff;"></i>Прибавит число трудоустройств после обучения</li>
<!--          <li class="listitem4 animate__animated animate__fadeInUp">Помогает сотрудникам справляться со стрессом</li>-->
<!--      <li class="listitem5 animate__animated animate__fadeInUp">Налаживает связь между сотрудником и профессиональным психологом</li>-->
<!--          <li class="listitem6 animate__animated animate__fadeInUp">Выявляет скрытый потенциал подчиненных</li>-->
<!--      <li class="listitem7 animate__animated animate__fadeInUp">Поддерживает благоприятную атмосферу в коллективе</li>-->
        </ul>
        <div class="button">
          <a type="button" class="btn btn-primary btn-lg" href="https://app.jetbot24.ru/w/cuQ">Попробовать бесплатно</a>
        <p class="button-disc">Опробуйте функционал в демо-версии!</p>
        </div>
      </div>
      <div class="col-md-auto hero-col-2 animate__animated animate__fadeInRight">
        <PhoneChat />
      </div>
    </div>
  </div>

</template>

<script>
import PhoneChat from "@/components/PhoneChat";
import NavBar from "@/components/NavBar"
export default {
  name: "MainHero",
  components: {PhoneChat, NavBar}
}
</script>

<style scoped>
.container {
  display: flex;
}
.row {
  width: 70vw;
}
@import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
@media only screen and (min-width: 414px) {
  .mobilenav {
    display: none!important;
  }
}
@media only screen and (max-width: 414px) {
  .headingmain {
    text-align: left!important;
    font-size: 32px!important;
    line-height: 34px!important;
    padding-top: 0px!important;
  }
  .navbar-brand {
    display: none;
  }

  .heroul {
    text-align: center !important;
    list-style-type: none!important;
  }

  .hero-col-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center !important;
    paddin-left: 0px!important;
  }

  container-fluid {
    width: 100%;
    display: flex !important;
    height: 50vh!important;
    position: relative;
    right: 0;
    left: 0;
    top: 0;
    align-items: center;
    align-content: center;
    padding-bottom: 100px;
    box-shadow: 0px 13px 16px #0000000f;
    border-radius: 0px 0px 40px 40px;
    flex-direction: column;
  }
}
@media only screen and (max-width: 414px) {
  .btn {
    margin-top: 47px!important;
  }
  .row {
    width: 90vw!important;
  }
  h2 {
    font-weight: 500;
    text-align: left!important;
    font-size: 24px!important;
  }
  .headingmain {
    text-align: left !important;
    font-size: 32px!important;
    line-height: 34px!important;

  }
  .btn {
    margin-left: 0px!important;
    width: 85vw!important;
  }
.button-disc {
  padding-left: 0px!important;
  margin-left: 0px!important;
}
  .heroul {
    text-align: left !important;
    list-style-type: none!important;
  }

  .hero-col-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center !important;
    padding-left: 0px!important;
    width: 90vw!important;
  }
  .hero-col-2 {
    padding-right: 0px!important;
    display: none!important;
  }

  .container-fluid {
    width: 100%;
    display: flex !important;
    height: 580px!important;
    position: relative;
    right: 0;
    left: 0;
    top: 0;
    align-items: center;
    align-content: center;
    padding-bottom: 40px!important;
    box-shadow: 0px 0px 0px #0000000f;
    border-radius: 0px 0px 40px 40px;
    flex-direction: column;
  }
}

.navbar-brand {
  color: #f3f3f3;
  font-weight: 600;
}
.container-fluid {
  width: 100%;
  background-image: url("../assets/bg2.jpg")!important;
  background-size: cover;
  height: 100vh;
  position: relative;
  right: 0;
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-bottom: 100px;
}

.headingmain {
  font-size: 50px;
  font-weight: 700;
  line-height: 45px;
  text-align: left;
  padding-bottom: 47px;
  margin-top: 27px;
  width: 100%;
  color: #f3f3f3;
}
.accent {
  background: #86b7fe4a;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 33px;
  white-space: nowrap;
  margin-left: -10px;
}
.heroul {
  text-align: left;
  list-style-type: disc;
  padding-top: 10px;
  list-style-type: none;
}
.hero-col-1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 53px;
}
.hero-col-2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 53px;
}

.btn {
  margin-top: 70px;
  text-transform: none;
  border-radius: 27px;
  background-image: linear-gradient(120deg, #3a68bd 0%, #366d9d 100%);
  color: white;
  font-size: 18px;
  box-shadow: 0px 3px 13px rgb(0 122 227 / 91%);
  font-weight: 600;
  font-family: 'Rubik', sans-serif;
  margin-left: 10px;
  border: 2px solid #cce5ff;
}
.button-disc {
  font-size: 11px;
  padding-top: 8px;
  padding-left: 10px;
  color: #67a0ff;
  font-weight: 500;
}
li {
  padding-bottom: 10px;
  font-size: 20px;
  color: #f3f3f3;
}
.listitem2 {
  animation-delay: 1s;
}
.listitem3 {
  animation-delay: 2s;
}
.listitem4 {
  animation-delay: 3s;
}
/*.listitem5 {*/
/*  animation-delay: 4s;*/
/*}*/
.listitem6 {
  animation-delay: 4s;
}
/*.listitem7 {*/
/*  animation-delay: 6s;*/
/*}*/
h2 {
  font-size: 30px;
  text-align: left;
  font-weight: 500;
  color: #f3f3f3;
}
.nav {
  display: flex;
  width: 536px;
  margin-bottom: 40px;
}
.col.navi {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
b {
  font-weight: 600;
}
.separator {
  margin-left: 10px;
  margin-right: 10px;
  color: rgba(255, 255, 255, 0.49);
}
a {
  font-weight: 300;
}
a:hover {
  color: white;
}
.edtech {
  color: white;
  font-weight: 600;
  text-decoration: none;
}
.b2b {
  color: rgba(255, 255, 255, 0.53);
  font-weight: 400;
  text-decoration: none;
}
.navbar-brand:hover {
  color: white;
}
</style>