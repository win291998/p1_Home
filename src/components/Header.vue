<template>
  <div id="header">
    <b-navbar class="nav" type="dark" variant="dark">
      <b-container fluid="xl">
        <!-- <img class="size" src="~@/assets/icon/phone.png" alt=""> -->
        <div class="infor">
          <div class="items-nav">
            <b-icon-telephone class="icon-phone-nav"></b-icon-telephone>
          </div>
          <div class="items-nav">
            <p class="white font-size12">0332768723</p>
          </div>
          <div class="items-nav">
            <img class="icon-mail-nav" src="../assets/icon/mail.png" alt="" />
          </div>
          <div class="items-nav">
            <p class="white font-size12">win291998@gmail.com</p>
          </div>
        </div>

        <div class="log-in">
          <img class="icon-login" src="../assets/icon/log-in.png" alt="" />

          <a href="">
            <p class="white font-size12">Đăng nhập</p>
          </a>
        </div>
      </b-container>
    </b-navbar>
    <b-navbar>
      <b-container class="nav-bot" fluid="xl">
        <div>
          <img src="../assets/logo/logo 1.png" alt="" class="logo-cls" />
        </div>
        <div id="nav-list">
          <b-navbar-nav>
            <b-nav-item class="items-nav-bot" href="#">TRANG CHỦ</b-nav-item>
            <b-nav-item class="items-nav-bot" href="#">DOANH NGHIỆP</b-nav-item>

            <b-nav-item class="items-nav-bot" href="#"
              >VĂN BẢN PHÁP LÝ</b-nav-item
            >
            <b-nav-item class="items-nav-bot" href="#">TIN TỨC</b-nav-item>
          </b-navbar-nav>
        </div>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import "../assets/css/styles.css";
</style>
