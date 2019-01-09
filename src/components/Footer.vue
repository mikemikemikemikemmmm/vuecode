<template>
<div>
  <div class="container px-0 px-md-2">
    <div class="bg-primary px-2 px-md-0">
      <div class="row flex-center h-100 py-6">
        <div class="col-12 col-md-5 d-flex email-text-group mb-4 mb-md-0">
          <img class="mr-4" src="@/assets/image/footer/logo-light.svg" height="40px" alt="">
          <h4 class="text-secondary d-flex align-items-center">
            訂閱你我的甜蜜郵件
          </h4>
        </div>
        <div class="col-12 col-md-5 d-flex justify-content-center px-3">
          <div class="py-4 px-4 bg-secondary">
            <img src="@/assets/image/footer/baseline-email-24px.svg" width="24px" alt="">
          </div>
          <input class="w-50 bg-secondary" type="text">
          <a class=" flex-center email-input-arrow bg-third px-4">
            <img src="@/assets/image/footer/baseline-shopping_cart-24px.svg" width="24px" alt="">
          </a>
        </div>
      </div>
    </div>
    <div class="py-6 px-6 px-md-0 bg-secondary">
      <div class="row justify-content-center">
        <div class="col-md-5 col-12">
          <div class="footer-left-logo">
            <img src="@/assets/image/footer/logotype-lg-dark.svg" height="27px" alt="">
          </div>
          <p class="footer-left-p mb-6 text-primary">
            07-1234-5678<br>
            sweetaste@email.com<br>
            800 高雄市新興區幸福路 520 號
          </p>
        </div>
        <div class="col-md-5 d-none d-md-flex justify-content-end">
          <img src="@/assets/image/footer/sm-今天是個吃甜點的好日子.svg" height="218.69px" alt="">
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-5 col-12">
          <div class="footer-left-share">
            <img src="@/assets/image/footer/ic-line@.svg" height="32px" alt="">
            <img src="@/assets/image/footer/ic-facebook.svg" height="32px" alt="">
          </div>
        </div>
        <div class="col-md-5 col-12 d-flex">
          <p class="footer-rights text-primary">
            © 2018 Sweetaste* All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'footerSection',
};
</script>
<style lang="scss" scoped>
</style>
