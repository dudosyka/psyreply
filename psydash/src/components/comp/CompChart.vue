<template>
  <div class="container-fluid">
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'

export default {
  name: "CompChart",
  extends: Bar
}
</script>

<style scoped>
.container-fluid {
  height: 288px;
  background: radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(255, 255, 255, 0.81) 0%, rgba(255, 255, 255, 0.60) 100%);
  filter: drop-shadow(0px 4px 10px rgba(0, 163, 255, 0.07));
  backdrop-filter: blur(16px);
  border-radius: 13px;
  box-shadow: 0px 6px 21px #00000008;
}
</style>