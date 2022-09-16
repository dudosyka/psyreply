<template>
<div class="container-fluid">
  <h2 class="h2"><i class="fa-solid fa-circle-info"></i>Заголовок</h2>
  <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
</div>
</template>

<script>
export default {
  name: "CompComment"
}
</script>

<style scoped>
.container-fluid {
  background: radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(237, 253, 236, 0.81) 0%, rgba(228, 250, 234, 0.77) 100%);
  filter: drop-shadow(0px 4px 10px #37FF003D);
  backdrop-filter: blur(16px);
  border-radius: 13px;
  box-shadow: 0px 6px 21px #00000008;
  padding: 30px;
  margin-top: 20px;
}
.h2 {
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  font-weight: 700;
}
.text {
  font-family: 'Rubik', sans-serif;
  margin-bottom: 0;
}
</style>