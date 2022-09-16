<template>
  <nav class="navbar mobile navbar-light bg-light animate__animated animate__fadeInDown">
    <div class="container-fluid">
      <div class="col-8">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top">PsyReply
        </a>
      </div>
      <div class="col">
        <a class="social" href="https://t.me/romanbonch"><i class="fa-brands fa-telegram"></i></a>
        <a class="social" href="wa.me/79215945811"><i class="fa-brands fa-whatsapp"></i></a>
      </div>
    </div>

  </nav>
</template>
<script>

</script>
<style scoped>
@media only screen and (min-width: 414px) {
  .navbar.navbar-light.bg-light {
    background: transparent!important;
  }
  .navbar {
    background: white!important;
  }
}
@media only screen and (max-width: 414px) {
  .navbar.navbar-light.bg-light {
    box-shadow: 0px 0px 0px;
    background: transparent!important;
    padding-left: 0vw!important;
    padding-right: 4vw!important;
    display: block!important;
  }
  .navbar-light .navbar-brand {
    color: #2c3e50 !important;
  }
}
img {
  width:40px;
  height: 40px;
}
.navbar.navbar-light.bg-light {
  box-shadow: 0px 0px 0px;
  padding-left: 15vw;
  padding-right: 6vw;
  position: relative;
  z-index: 99999999;
}
.col {
  display: flex;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.row {
  display: flex!important;
  justify-content: space-between!important;
  align-content: center!important;
  align-items: center!important;
  flex-direction: row!important;
}
.navbar-brand {
  padding-left: 10px;
}
.navbar.navbar-light.bg-light {
  background: transparent!important;
}
.fa-facebook:before {
  font-size: 30px;
  color: black;
}
.fa-facebook:hover {
  color: #d7d7d7;
}
.fa-linkedin:before {
  font-size: 30px;
  color: black;
}
.fa-whatsapp:before {
  font-size: 27px;
  color: #7eff66;
}
.fa-telegram:before {
  font-size: 25px;
  color: black;
  padding-right: 10px;
  margin-left: 20px;
  color: #669cff;
}
.container-fluid {
  padding-left: 26px;
  width: 100vw;
}
</style>