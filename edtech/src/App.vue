<template>
<!--  <NavBar />-->
  <MainHero />
  <BlockMore />
  <BlockResearch id="research" />
  <MyPhone />
  <BlockCompanies />
  <!--  <BlockCommentHuge />-->
<!--  <BlockPrice />-->
  <BlockFaq />
  <BlockForm id="call" />
  <BlockFooter />

<!--  <CompChart />-->
<!--  <BlockReviews />-->
</template>

<script>
import MainHero from "@/components/MainHero";

// import NavBar from "@/components/NavBar";
import BlockMore from "@/components/BlockFetures";
// import BlockCommentHuge from "@/components/BlockCommentHuge";
import BlockCompanies from "@/components/BlockCompanies";
import BlockResearch from "@/components/BlockResearch";
import BlockFooter from "@/components/BlockFooter";
// import CompChart from "@/components/CompChart";
// import BlockReviews from "@/components/BlockReviews";
import 'vue3-carousel/dist/carousel.css';
import BlockFaq from "@/components/BlockFaq";
// import BlockPrice from "@/components/BlockPrice";
import BlockForm from "@/components/BlockForm";
import MyPhone from "@/components/MyPhone"
export default {
  name: 'App',
  components: {
    BlockForm,
    // BlockPrice,
    BlockFaq,
    // BlockReviews,
    BlockResearch,
    // BlockCommentHuge,
    BlockMore,
    MainHero,
    // NavBar,
    BlockCompanies,
    BlockFooter,
    // CompChart
    MyPhone
  }
}
</script>

<style>
#phonem {
  display: none!important;
}
.form-outline .form-control~.form-label {
  font-size: 14px;
  font-weight: 200;
}
.accordion-body {
  font-weight: 300!important;
  padding: 30px!important;
  color: #f3f3f3!important;
  background: #363636!important;
  border: 0px!important;
}
.accordion-button {
  font-weight: 500;
  padding: 30px!important;
  color: #f3f3f3!important;
  background: #1e1d1d !important;
}
.accordion-item {
  border: 0px!important;
}
.accordion-button::after {
  display: none;
}
@import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
body {
  background: #1a1a1a !important;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 100%!important;
}
.collapse.show {
  height: auto!important;
}
#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border-radius: 0px 0px 40px 40px;
}
h1 {
  font-size: 18px;
}

</style>
