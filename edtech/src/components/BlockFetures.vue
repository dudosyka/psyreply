<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm">
        <div class="card card1 animate__animated animate__fadeInUp">
          <div class="card-body">
            <div class="counterbg">
              <span>COR</span>
            </div>
            <h1 class="card-h">Процент доходимости</h1>
            <hr />
            <p class="card-text">Повысим за счет контроля динамики вовлеченности</p>
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="card card2 animate__animated animate__fadeInUp">
          <div class="card-body">
            <div class="counterbg">
              <span>NPS</span>
            </div>
            <h1 class="card-h">Уровень лояльности</h1>
            <hr />
            <p class="card-text">Повысим вероятность рекомендаций и вторичных покупок</p>
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="card card3 animate__animated animate__fadeInUp">
          <div class="card-body">
            <div class="counterbg">
            <span>CSI</span>
            </div>
            <h1 class="card-h">Уровень удовлетворенности</h1>
            <hr />
            <p class="card-text">Снизим влияние технических сбоев и задержки обратной связи</p>
          </div>
        </div>
      </div>
<!--      <div class="container-fluid feature">-->
<!--      <div class="col-sm">-->
<!--        <div class="card card4 animate__animated animate__fadeInUp" style="width: 73rem; min-height: 175px;">-->
<!--          <div class="card-body-big">-->
<!--            <h2 class="card-h" style="padding-top: 14px;">+ ∞ к бренду</h2>-->
<!--            <hr />-->
<!--            <p class="card-text">Передовые компании понимают, как сделать работу команды эффективной, поэтому психологическая поддержка для них — стандарт и норма. Соискатели знают об этом и интересуются не только зарплатой на новом месте, но и отношениями в команде, заботой руководителя о сотрудниках. Возможность оказать каждому сотруднику поддержку — преимущество вашей компании на рынке труда, которое привлечет к вам более квалифицированных специалистов<br><a href="https://pubmed.ncbi.nlm.nih.gov/28267095/">Ознакомиться с исследованием</a></p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      </div>-->
<!--      <div class="col-sm">-->
<!--        <div class="counterbg">-->
<!--        <p>+ ∞ к бренду</p>-->
<!--        </div>-->
<!--        <div class="card" style="width: 18rem;">-->
<!--          <div class="card-body">-->
<!--            <p class="card-text">Передовые компании понимают, как сделать работу команды эффективной, поэтому применение психологической поддержки для них - стандарт и норма. Соискатели знают об этом и интересуются не только зарплатой на новом месте, но и отношениями в команде, благоприятным психологическим климатом, заботой руководителя. Возможность оказать каждому сотруднику поддержку - преимущество вашей компании на рынке труда, которое привлечет к вам более квалифицированных специалистов.</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
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
  .row {
    bottom: 0!important;
  }
  .card {
    width: 22rem!important;
    margin-top: 28px!important;
    box-shadow: 0px 0px 0px!important;
    text-align: left!important;
    background: transparent!important;
  }
  .card-body {
    background: transparent!important;
  }
  .card-h {
    text-align: left;
  }
  .card-text {
    text-align: left;
  }
  .counterbg {
    box-shadow: 0px 0px 0px!important;
    border: 0px!important;
    margin-left: 0px!important;
    padding-left: 0px!important;
    align-self: flex-start!important;
    width: auto!important;
    background-color: transparent!important;
    color: #669cff;
    margin-bottom: 0px!important;
    font-size: 36px!important;
  }
  hr {
    align-self: flex-start!important;
  }
}
.container-fluid {
  background: #1e1e1e;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card {
  width: 21.6rem;
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
.card4 {
  margin-top: 50px;
  width: 73rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  max-width: 80vw;
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
  color: #f3f3f3;
  font-size: 30px;
  background: rgb(38 38 38 / 72%);
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
  bottom: 60px;
  position: relative;
  -bs-gutter-x: -7.5rem!important;
}
.infinity {
  font-size: 18px;
  padding-top: 0px;
}
.card-text {
  font-size: 16px;
  color: #f3f3f3;
}
.card-body {
  text-align: center;
  background: #1c1c1c;
  padding: 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  border: 2px solid #fafafa4a;
}
.card-body-big {
  text-align: center;
  background: white;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  min-height: 170px;
  border: 2px solid #fafafa;
  padding-bottom: 28px;
  padding-top: 16px;
}
.card-h {
  font-size: 18px;
  font-weight: 700;
  color: #f3f3f3;
}
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgb(255 255 255);
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
h2 {
  font-size: 30px!important;
}
a {
  text-decoration: underline;
  color: white;
}
</style>