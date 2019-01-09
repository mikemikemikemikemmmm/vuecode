<template>
  <div class="bg-primary text-secondary px-8 py-6">
    <!--step group start-->
    <div class="row pb-6">
      <h2 class="col-6">付款</h2>
      <div class="col-6 flex-center">
        <div class="check-step border bg-secondary rounded-circle text-primary flex-center">
          <i class="material-icons">
            done
          </i>
        </div>
        <div class="flex-grow-1 border border-top"></div>
        <div class="check-step check-step-doing border rounded-circle"></div>
        <div class="flex-grow-1 border border-top"></div>
        <div class="check-step border rounded-circle"></div>
      </div>
    </div>
    <!--step group end-->
    <!--form input start-->
    <div class="row">
      <h5 class="col-12 pb-2">信用卡卡號</h5>
      <div class="col-12 pb-3">
        <input type="text" placeholder="123456789">
      </div>
      <h5 class="col-12 pb-2">持卡人姓名</h5>
      <div class="col-6 pb-3"> <input type="text" placeholder="王"></div>
      <div class="col-6 pb-3"><input type="text" placeholder="小明"></div>
      <h5 class="col-12 pb-2">有效期限</h5>
      <div class="col-6 pb-3">
        <input type="number" id="" placeholder="月">
      </div>
      <div class="col-6 pb-3">
        <input type="number" id="" placeholder="年">
      </div>
      <h5 class="col-12 pb-2">背面末三碼</h5>
      <div class="col-6 pb-3"><input type="text" placeholder="123"></div>    
    </div>
    <router-link class="d-block bg-third text-primary text-center py-3" to="/check/form3">下一步</router-link>
    <!--form input end-->
  </div>
</template>
