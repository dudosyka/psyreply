<template>
<div class="container-fluid header-bg">
  <div class="row">
    <div class="col logobox">
      <img src="../../assets/logo.png" class="logoimg">
      <p class="logotext">PsyReply <span class="subtext"> | Stats</span></p>
    </div>
    <div class="col userid">
      <p class="username">Иван</p>
      <img src="../../assets/avatardefault.jpg" class="useravatar">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "BlockHeader"
}
</script>

<style scoped>
.header-bg {
  display: flex;
  margin-top: 10px;
  width: 100vw;
}
.logobox {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  width: 70vw;
}
.logoimg {
  width: 50px;
}
.logotext {
  font-family: 'Rubik', sans-serif;
  margin-bottom: 0;
  font-weight: 700;
  margin-left: 5px;
}
.subtext {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
}
.userid {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: flex-end;
  padding-right: 12px;
  width: 30vw;
}
.username {
  font-family: 'Rubik', sans-serif;
  margin-bottom: 0;
  margin-right: 10px;
}
.useravatar {
  width: 30px;
  border-radius: 50px;
}

</style>