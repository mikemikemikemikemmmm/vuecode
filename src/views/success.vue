<template>
  <div class="container px-0 px-md-2">
    <div class="check-success flex-column flex-center bg-center mb-md-10" v-bgimg="'check_success.jpg'">
      <!--step group start-->
      <div class="step-group flex-center pb-6 ">
        <div class="check-out1-form-step bg-primary rounded-circle flex-center">
          <i class="material-icons text-secondary">
            done
          </i>
        </div>
        <div class="flex-grow-1 border-primary border-top"></div>
        <div class="check-out1-form-step  bg-primary rounded-circle flex-center">
          <i class="material-icons text-secondary">
            done
          </i>
        </div>
        <div class="flex-grow-1 border-primary border-top"></div>
        <div class="check-out1-form-step  bg-primary rounded-circle flex-center">
          <i class="material-icons text-secondary">
            done
          </i>
        </div>
      </div>
      <!--step group end-->
      <img class="mb-6" src="@/assets/image/lg-付款成功.svg" height="45.46px" alt="">
      <router-link class="bg-third text-center text-primary d-none d-md-block" to="/">
        <h4 class="py-3 px-10 font-weight-bold">繼續逛逛</h4>
      </router-link>
    </div>
    <div class="container px-0">
      <router-link class="success-lg-btn d-block bg-third text-center text-primary d-block d-md-none" to="/">
        <h4 class="py-3 px-10 font-weight-bold">繼續逛逛</h4>
      </router-link>
    </div>
  </div>
</template>
