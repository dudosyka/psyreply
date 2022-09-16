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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
