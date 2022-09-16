<template>
  <div class="container-fluid">
    <div class="containerbg">
      <h3>Сколько это стоит?</h3>
     <div class="row">
       <div class="col-sm">
           <div class="card card2" style="width: 18rem;">
             <div class="card-body">
               <div class="header">
                 <h1 class="card-h">Активная сеть</h1>
               </div>
               <div class="card-text">
                 <span><i class="fa-solid fa-calendar-days"></i>1 месяц поддержки<br></span>
                 <hr />
                 <span><i class="fa-solid fa-chart-simple"></i>Постоянный контроль динамики усталости и выгорания<br></span>
                 <hr />
                 <div class="counterbg">
<!--                   <span class="price-tag-old">300 000 ₽</span>-->
                   <span class="price-tag">от 1500 ₽</span><br><span class="month">за одного студента</span>
                 </div>
               </div>
             </div>
           </div>
       </div>
<!--       <div class="col-sm card-active">-->
<!--         <div class="card card2 card-active" style="width: 18rem;">-->
<!--           <div class="card-body">-->
<!--             <div class="header">-->
<!--               <h1 class="card-h">Активная сеть</h1>-->
<!--             </div>-->
<!--             <div class="card-text">-->
<!--               <span><i class="fa-solid fa-user-group"></i> До 300 человек</span>-->
<!--               <hr />-->
<!--               <span><i class="fa-solid fa-calendar-days"></i> 2 месяца поддержки<br></span>-->
<!--               <hr />-->
<!--               <span><i class="fa-solid fa-chart-simple"></i> Еженедельный контроль динамики усталости и выгорания<br></span>-->
<!--               <hr />-->
<!--               <span><i class="fa-solid fa-circle-plus"></i>  2 <a href="#research">исследования</a> на выбор, адаптированное под запрос вашей компании</span>-->
<!--               <div class="counterbg">-->
<!--                 &lt;!&ndash; <span class="price-tag-old">300 000 ₽</span>&ndash;&gt;-->
<!--                 <span class="price-tag">От 250 000 ₽</span><br><span class="month">за 2 месяца</span>-->
<!--               </div>-->
<!--             </div>-->
<!--           </div>-->
<!--         </div>-->
<!--       </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockPrice"
}
</script>

<style scoped>
@media only screen and (max-width: 414px) {
  h3 {
    padding-left: 12px!important;
    text-align: left!important;
    margin-bottom: 0px!important;
    padding-top: 0px!important;
  }
  .card {
    width: 23rem!important;
  }
  .container-fluid {
    background-color: #f6fafb!important;
    padding-top: 50px!important;
    padding-bottom: 65px!important;
  }
  .card-active {
    display: none!important;
  }
}

.price-tag-old {
  margin-bottom: 20px;
  text-decoration: line-through;
  color: #e70000;
  margin-top: 7px;
}
.span {
  text-align: left;
  font-size: 16px;
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
  margin-bottom: 17px;
  color: #000000;
  padding-top: 90px;
}
.price-tag {
  font-size: 25px;
  font-weight: 500;
  color: #3a3a3a;
}
.month {
  font-size: 17px;
  font-weight: 500;
  color: #3a3a3a;
}
.container-fluid {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 110px;
  background-color: #f6fafb;
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

}

.col-sm {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  justify-content: flex-start;
  padding-top: 40px;
}
.header {
  background-image: linear-gradient(120deg, #669cff 0%, #6cb9fb 100%);
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 16px 16px 0px 0px;
}

.counterbg {
  font-size: 30px;
  padding-top: 28px;
  position: relative;
  z-index: 0;
  font-weight: 700;
  width: 191px;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 10px;

}
.card-img-top {
  position: relative;
}
hr {
  width: 100%!important;
  background: white;
  border: 1px solid #dfdfdf!important;
}
.row {
  position: relative;
}
.card-text {
  font-size: 17px;
  text-align: left;
  color: #303030;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
}
.card-body {
  text-align: center;
  /*background-image: linear-gradient(120deg, #66a6ff 0%, #89d8fe 100%);*/
  background-color: white;
  color: white;
  padding: 0px;
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
  color: #2a2a2a;
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
a {
  text-decoration: underline;
  font-weight: 400;
  color: #0095ff;
}
span {
  text-align: left;
}
h1 {
  color: white!important;
}
</style>