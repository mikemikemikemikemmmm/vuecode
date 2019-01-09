<template>
  <div>
    <!--check_out1 start-->
    <div class="container mb-0 mb-md-10">
      <div class="row justify-content-center">
        <!--form input start-->
        <div class="col-md-6 check-form-group px-0 px-md-2">
          <router-view/>
        </div>
        <!--form input end-->
        <!--order group start-->
        <div class="col-md-4 d-none d-md-block text-fourth">
          <div class="mb-4 border border-secondary">
            <h4 class="bg-secondary py-3 text-center">訂單摘要</h4>
            <div class="px-4 py-3">
              <div class="d-flex w-100 mb-2">
                <h6>小計</h6>
                <h6 class="ml-auto">${{total}}</h6>
              </div>
              <div class="d-flex w-100 mb-4">
                <h6>運費</h6>
                <h6 class="ml-auto">$20</h6>
              </div>
              <div class="d-flex w-100">
                <h5>總計</h5>
                <h5 class="ml-auto">${{total + 20}}</h5>
              </div>
            </div>
          </div>
          <div class="border border-secondary">
            <h4 class="bg-secondary py-3 text-center">購物清單</h4>
            <div class="py-3 px-4" v-for="(item,index) in cart.productList" :key="index">
              <div class="d-flex mb-3">
                <div
                  class="check_cart_img bg-center"
                  v-bgimg="`product-img/${item.productData.imgName}`"
                ></div>
                <div class="ml-auto">
                  <span>
                    <h6>{{item.productData.title}}({{item.qty}})</h6>
                    <h5>NT${{item.productData.unitPrice * item.qty}}</h5>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--order group end-->
      </div>
    </div>
    <!--check_out1 end-->
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'check',
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    total() {
      let temp = 0;
      this.cart.productList.forEach((item)=>{
        temp += item.productData.unitPrice*item.qty
      })
      return temp
    }
  }
};
</script>