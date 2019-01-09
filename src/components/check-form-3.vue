<template>
  <div class="bg-primary text-secondary px-8 py-6">
    <!--step group start-->
    <div class="row pb-6">
      <h2 class="col-6">發票</h2>
      <div class="col-6 flex-center">
        <div class="check-step border bg-secondary rounded-circle text-primary flex-center">
          <i class="material-icons">
            done
          </i>
        </div>
        <div class="flex-grow-1 border border-top"></div>
        <div class="check-step border bg-secondary rounded-circle text-primary flex-center">
          <i class="material-icons">
            done
          </i>
        </div>
        <div class="flex-grow-1 border border-top"></div>
        <div class="check-step-doing check-step form-active border rounded-circle"></div>
      </div>
    </div>
    <!--step group end-->
    <!--form input start-->
    <div class="row">
      <div class="col-12 pb-2">電子郵件信箱</div>
      <div class="col-12 pb-3">
        <input type="text">
      </div>
      <div class="col-12 pb-2">統一編號(選填)</div>
      <div class="col-12 pb-3">
        <input type="text">
      </div>
    </div>
    <router-link class="d-block bg-third text-primary text-center py-3" to="/success">完成結帳</router-link>
   <!--form input end-->
  </div>
</template>
