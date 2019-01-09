<template>
  <div class="bg-primary text-secondary px-8 py-6">
     <div class="row pb-6">
      <h2 class="col-6" ref="step-title">運送</h2>
      <div class="col-6 flex-center">
        <div class="check-step border rounded-circle check-step-doing">
        </div>
        <div class="flex-grow-1 border border-top"></div>
        <div class="check-step border rounded-circle" >
        </div>
        <div class="flex-grow-1 border border-top"></div>
        <div class="check-step border rounded-circle">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 pb-2">姓氏</div>
      <div class="col-6 pb-2">名字</div>
      <div class="col-6 pb-3">
        <input type="text">
      </div>
      <div class="col-6 pb-3">
        <input type="text">
      </div>
      <div class="col-12 pb-2">電話</div>
      <div class="col-12 pb-3">
        <input type="text">
      </div>
      <div class="col-12 pb-2">地址</div>
      <div class="col-6 pb-3">
        <input type="text">
      </div>
      <div class="col-6 pb-3">
        <input type="text">
      </div>
      <div class="col-12 pb-3">
        <input type="text">
      </div>    
    </div>
    <router-link class="d-block bg-third text-primary text-center py-3" to="/check/form2">下一步</router-link>
  </div>
  <!--form input end-->
</template>
