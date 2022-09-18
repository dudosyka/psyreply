<template>
  <div class="container-fluid footerbg fixed-bottom">
    <p class="copyright">PsyReply <span class="year"> | 2022</span></p>
  </div>
</template>

<script>
export default {
  name: "BlockFooter"
};
</script>

<style scoped>
.footerbg {
  background-color: white;
  height: 70px;
  display: flex;
  align-items: center;
}
.copyright {
  font-family: 'Rubik', sans-serif;
  margin-bottom: 0;
  font-weight: 700;
}
.year {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
}
</style>
