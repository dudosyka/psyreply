<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
  <link rel="stylesheet" href="/src/css/phone.css">
  <div class="iphone-x">
<!--    <i>Speaker</i>-->
<!--    <b>Camera</b>-->
    <div class="apphead">
      <img class="arrowleft" src="../assets/chat/arrow-left-solid.svg">
      <img class="pfp" src="../assets/chat/face.jpg">
      <p class="name">Мой Психолог</p>
      <font-awesome-icon icon="fa-regular fa-ellipsis-vertical" />
      <img class="menu" src="../assets/chat/menu.svg">
    </div>
    <div class="chat">
      <p class="date">14 Августа</p>
      <p class="receive second animate__animated animate__fadeInUp animate__delay-2s">Я могу попросить психолога решить проблему?</p>
      <p class="send thrid animate__animated animate__fadeInUp animate__delay-4s">Да, если вы заранее предупредите нас о возможном увольнении, реорганизации, задержке выплат и других трудностях, мы подготовим ваших сотрудников к переменам и поможем команде справиться со стрессом.</p>
      </div>
    <div class="appbottom">
      <img class="emoji" src="../assets/chat/emoji.svg">
      <p class="message">Сообщение</p>
      <img class="attach" src="../assets/chat/attach.svg">
      <img class="voice" src="../assets/chat/mic.svg">
    </div>
  </div>
</template>

<script>
import 'animate.css';
export default {
  name: "FaqChat4"
}
</script>

<style scoped>
@charset "UTF-8";
body {
  background: #f4f6fc;
}
body:after {
  content: "Made with ❤️ by Adiel Hercules";
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  background-color: #3F436B;
  color: #fff;
  opacity: 0.6;
}

.iphone-x {
  position: relative;
  margin: 40px auto;
  width: 600px;
  height: 500px;
  background-color: #7371ee;
  background-image: url("../assets/chat/bg.jpg");
  background-size: cover;
  border-radius: 40px;
  box-shadow: 0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111;
}
.iphone-x:before, .iphone-x:after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.iphone-x:after {
  bottom: 7px;
  width: 140px;
  height: 4px;
  background-color: #f2f2f2;
  border-radius: 10px;
}
/*.iphone-x:before {*/
/*  top: -1px;*/
/*  width: 56%;*/
/*  height: 30px;*/
/*  background-color: #1f1f1f;*/
/*  border-radius: 0px 0px 40px 40px;*/
/*}*/
.iphone-x i,
.iphone-x b,
.iphone-x s,
.iphone-x span {
  position: absolute;
  display: block;
  color: transparent;
}
.iphone-x i {
  top: 0px;
  left: 50%;
  transform: translate(-50%, 6px);
  height: 8px;
  width: 15%;
  background-color: #101010;
  border-radius: 8px;
  box-shadow: inset 0px -3px 3px 0px rgba(255, 255, 255, 0.2);
}
.iphone-x b {
  left: -15%;
  top: 0px;
  transform: translate(180px, 4px);
  width: 12px;
  height: 12px;
  background-color: #101010;
  border-radius: 12px;
  box-shadow: inset 0px -3px 2px 0px rgba(255, 255, 255, 0.2);
}
.iphone-x b:after {
  content: "";
  position: absolute;
  background-color: #2d4d76;
  width: 6px;
  height: 6px;
  top: 2px;
  left: 2px;
  top: 3px;
  left: 3px;
  display: block;
  border-radius: 4px;
  box-shadow: inset 0px -2px 2px rgba(0, 0, 0, 0.5);
}
.iphone-x s {
  top: 50px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  width: 100%;
  font-size: 70px;
  font-weight: 100;
  padding-top: 60px;
}
.iphone-x span {
  bottom: 50px;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  left: 30px;
}
.iphone-x span + span {
  left: auto;
  right: 30px;
}
.chat {
  padding-top: 8px;
  display: flex;
  flex-direction: column;
}
.send {
  background-image: linear-gradient(120deg, #66a6ff 0%, #89f7fe 100%);
  width: 354px;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  color: white;
  text-align: left;
  font-size: 12px;
  font-weight: 500;
}
.receive {
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
  width: 354px;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  color: black;
  text-align: left;
  align-items: right;
  align-self: flex-end;
  font-size: 12px;
  font-weight: 400;
}
.apphead {
  background: rgb(14%, 16%, 19%, 1);
  padding-top: 41px;
  padding-bottom: 7px;
  border-radius: 40px 40px 0px 0px;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.arrowleft{
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(81deg) brightness(101%) contrast(102%);
  width: 25px;
  padding-right: 10px;
  margin-left: 19px;
}
.menu {
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(81deg) brightness(101%) contrast(102%);
  width: 25px;
}
.pfp {
  width: 27px;
  border-radius: 150px;
  margin-right: 10px;
}
.name {
  padding-right: 48px;
  font-size: 11px;
  width: 178px;
}
.date {
  background-color: rgb(14%, 16%, 19%, .8);
  width: 60px;
  align-self: center;
  font-size: 8px;
  font-weight: 700;
  color: white;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.6);
}
.appbottom {
  background: rgb(14%, 16%, 19%, 1);
  padding-top: 8px;
  padding-bottom: 26px;
  border-radius: 0px 0px 40px 40px;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 185px;
}
.emoji {
  width: 34px;
  filter: invert(94%) sepia(0%) saturate(1%) hue-rotate(287deg) brightness(86%) contrast(91%);
  padding-right: 0px;
  padding-left: 10px;
}
.voice {
  width: 22px;
  filter: invert(94%) sepia(0%) saturate(1%) hue-rotate(287deg) brightness(86%) contrast(91%);
}
.attach {
  width: 28px;
  filter: invert(94%) sepia(0%) saturate(1%) hue-rotate(287deg) brightness(86%) contrast(91%);
}
.message {
  font-style: italic;
  font-weight: 100;
  color: #ffffff59;
  padding-right: 89px;
  font-size: 12px;
}
</style>