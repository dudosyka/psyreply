<template>
  <!-- Footer -->
  <footer class="text-center text-lg-start bg-light text-muted">
    <!-- Section: Social media -->
    <section class="top-bar d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">
              2022, PsyReply
            </h6>
            <p>
              Сервис мониторинга<br> и психологической <br>поддержки сотрудников
            </p> <br>
            <p>
              ООО "ДЖЕТБОТ", <br>
              ИНН: 7810920640
            </p>
            <p class="promo">
              <a href="https://t.me/eva_stuff_bot">Психологам</a>
            </p>
          </div>


          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase contacts fw-bold mb-4" style="margin-bottom: 0px!important;">Контакты</h6>
              <p><br>
              <span><i class="fas fa-envelope me-3"></i>
              <a href="mailto:roman@psyreply.com">roman@psyreply.com</a></span>
            </p><br>
            <p><span><i class="fas fa-phone me-3"></i><a href="tel:+79955977888">+7-(995)-597-78-88</a></span></p><br>
            <div class="container">
            <div class="row social">
              <div class="col-md-auto">
                <a class="social" href="https://t.me/romanbonch"><i class="fa-brands fa-telegram"></i></a>
              </div>
              <div class="col-md-auto">
                <a class="social" href="wa.me/79215945811"><i class="fa-brands fa-whatsapp"></i></a>
              </div>
              <div class="col-md-auto">
                <a class="social" href="https://www.linkedin.com/in/romanbonch/"><i class="fa-brands fa-linkedin"></i></a>
              </div>
              <div class="col-md-auto">
                <a class="social" href="https://www.facebook.com/romanbonch"><i class="fa-brands fa-facebook"></i></a>
              </div>
            </div>
            </div>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">

      <a class="text-reset" href="https://wip.psyreply.com/docs/pp.pdf" target="_blank">Политика конфиденциальности и обработка персональных данных</a>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<script>
export default {
  data: () => ({
    showModal: false
  }),
  name: "BlockFooter"
}
</script>

<style scoped>
@media only screen and (max-width: 414px) {
  .row {
    justify-content: center!important;
    padding-right: 0px!important;
    align-self: center!important;
    justify-content: flex-start!important;
    padding-left: 10px!important;
  }
  .col-md-auto {
    display: flex!important;
    align-self: center!important;
    width: 50px!important;
  }
  .text-uppercase {
    text-align: left;
    padding-left: 25px!important;
  }
  p {
    text-align: left;
    padding-left: 25px!important;
  }
  .contacts {
    padding-top: 20px!important;
  }
}
.col-md-auto {
  width: 42px;
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.social {
  color: gray;
}
.fa-facebook:before {
  font-size: 30px;
  color: white;
}
.fa-facebook:hover {
  color: #d7d7d7;
}
.fa-linkedin:before {
  font-size: 30px;
  color: white;
}
.fa-whatsapp:before {
  font-size: 30px;
  color: white;
}
.fa-telegram {
  font-size: 30px;
  color: white;
}
.social {
  font-size: 20px;
}
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
.v-button {
  color: #00abff;
}
</style>

  <style scoped>
  .promo {
    margin-top: 24px;
  }
  .dark-mode div::v-deep .modal-content {
    border-color: #2d3748;
    background-color: #1a202c;
  }
  .btn {
    margin-top: 30px;
    text-transform: none;
    border-radius: 27px;
    background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 60%);
    color: white;
    font-size: 15px;
    box-shadow: 0px 0px 12px rgba(137, 210, 255, 0.47);
    font-weight: 600;
    font-family: 'Rubik', sans-serif;
    margin-left: 10px;
    border: 2px solid #cce5ff;
  }
  h1 {
    font-size: 20px;
    font-weight: 700;
    padding-top: 20px;
  }
  img {
    width: 100%;
    border-radius: 20px;
  }
  .col-md {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  .text-center {
    background-image: linear-gradient(120deg, #4587ff 0%, #4bacff 100%);
    color: white;
  }
  .top-bar {
    background-color: rgb(246, 250, 251)!important;
    border: rgb(246, 250, 251)!important

  }
  a {
    color: white;
  }
  a:hover {
    color: white;
  }
</style>