<template>
<div class="container-fluid animate__animated animate__fadeIn" :class="{'container--active':active}">
  <div class="modalka animate__animated animate__fadeInUp">
    <i class="fa-solid fa-handshake fa-shake handshake"></i>
    <h1 class="heading">Спасибо за обращение!</h1>
    <p class="description">Мы свяжемся с Вами в ближайшее время!</p>
    <button class="btn btn-primary btn-lg" >Вернуться к сайту</button>
  </div>
</div>
</template>

<script>
export default {
  name: "PopUp",
  props: ['active']
}
</script>

<style scoped>
div.container-fluid {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999999999;
  backdrop-filter: blur(10px);
  display: none;
  animation-duration: 0.3s;
}
div.container--active {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.modalka {
  background: #1e1e1e;
  color: white;
  padding: 30px;
  border-radius: 16px;
  animation-duration: 0.8s;

}
.btn {
  text-transform: none;
  border-radius: 16px;
  background-image: linear-gradient(120deg, #3a68bd 0%, #366d9d 100%);
  color: white;
  font-size: 18px;
  box-shadow: 0px 3px 13px rgb(0 122 227 / 91%);
  font-weight: 600;
  font-family: 'Rubik', sans-serif;
  margin-left: 10px;
  border: 2px solid #cce5ff;
}
.heading {
  font-size: 30px;
  font-weight: 700;
}
.handshake {
  font-size: 50px;
  color: white;
  padding-bottom: 10px;
}
.description {
  padding-top: 5px;
  padding-bottom: 20px;
}
</style>