<template>
  <BlockHeader />
  <BlockBody />
  <BlockFooter />
</template>

<script>
import BlockHeader from "@/components/blocks/BlockHeader";
import BlockBody from "@/components/blocks/BlockBody";
import BlockFooter from "@/components/blocks/BlockFooter";

export default {
  name: 'App',
  components: {
    BlockFooter,
    BlockBody,
    BlockHeader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
html {
  font-family: 'Rubik', sans-serif;
}
body {
  font-family: 'Rubik', sans-serif;
  background-image: url("./assets/bg_light.jpg");
  background-position: center;
  height: 100%;
}
</style>
