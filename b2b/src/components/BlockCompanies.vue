<template>
  <div class="container-fluid">
    <div class="container">
    <h3>Кому подойдет сервис?</h3>
     <div class="row">
      <div class="col-sm">
        <div class="card card1" style="width: 21.6rem;">
          <div class="card-body">
            <div class="icon">
              <i class="fa-brands fa-apple" style="margin-right: 10px;"></i><h1 class="card-h">Творческим коллективам</h1>
            </div>
            <hr />
            <p class="card-text">Креативность сотрудников зависит от эмоционального состояния.<br><br><br>Возможность выговориться и направить энергию в творчество помогает достигать высоких результатов, там, где требуется нестандартное мышление</p>
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="card card3 animate__animated animate__fadeInUp" style="width: 21.6rem;">
        <div class="card-body">
          <div class="icon">
            <i class="fa-solid fa-chart-pie" style="margin-right: 10px;"></i><h1 class="card-h">Проектным компаниям</h1>
          </div>
          <hr />
          <p class="card-text">Когда успех напрямую связан с работоспособностью и концентрацией внимания, важно выжимать из рабочих часов максимум.<br><br>Сотрудник, вовремя получивший поддержку, легче справляется с интеллектуальной нагрузкой</p>
        </div>
      </div>
      </div>
      <div class="col-sm">
        <div class="card card2" style="width: 21.6rem;">
          <div class="card-body">
            <div class="icon">
              <i class="fa-solid fa-handshake-simple" style="margin-right: 10px;"></i><h1 class="card-h">Сервисным компаниям</h1>
            </div>
            <hr />
            <p class="card-text">Текучка кадров забирает слишком много ресурсов, которые уходят на поиск и обучение новых юнитов, а работают они меньше года.<br><br> Психологическая поддержка поможет удержать таких сотрудников и повысить их рабочую активность</p>
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
.fa-apple:before {
  content: "\f179";
  font-size: 27px;
  margin-bottom: 11px;
  bottom: 12px;
}
.fa-handshake-simple:before {
  font-size: 25px;
}
.fa-chart-pie:before {
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
  justify-content: flex-start;
}
h3 {
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 13px;
  padding-top: 90px;
}
.container-fluid {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
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
}
.card-text {
  font-size: 16px;
  text-align: left;
}
.card-body {
  text-align: center;
  background-image: linear-gradient(120deg, #4587ff 0%, #4bacff 100%);
  color: white;
  padding: 30px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 40px #0095ff2e;
  border: 2px solid #fafafa;
  min-height: 263px;
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