<template>
<div>
  <!--cart start-->
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="px-3 px-md-0">
          <div class=" bg-secondary text-center py-3">
          您的購物車
          </div>
        <div v-if="tempCart.productList.length === 0">你還沒選購商品喔</div>
        </div>
        <div v-if="tempCart.productList !== 0">
        <!--single cart item-->
        <div v-for="(item,index) in tempCart.productList" :key="index" class="cart-group py-md-4 p-6 px-md-0 border-bottom border-secondary d-flex justify-content-between flex-column flex-md-row">
          <div class="d-flex flex-grow-1 flex-md-grow-0 mb-2 mb-md-0">
            <div class="bg-center flex-grow-1 flex-md-grow-0 cart-img mr-2 mr-md-1" v-bgimg="`product-img/${item['productData']['imgName']}`"></div>
            <div class="d-flex flex-column flex-md-row mx-md-2">
              <div class="text-primary d-flex align-items-center mr-2 mb-2 mb-md-0">
                <div>
                <h6 class="mb-2">{{item['productData']['title']}}</h6>
                <h6>NT${{item['productData']['unitPrice']}}</h6>
                </div>
              </div>
              <div class="flex-center">
                <button class="cart-num-item bg-white border border-secondary" @click="qtyMinus(index)">-</button>
                <div class="cart-num-item text-center border border-secondary">{{item.qty}}</div>
                <button class="cart-num-item bg-white border border-secondary" @click="qtyPlus(index)">+</button>
              </div>
            </div>
          </div>
          <h5 class="text-primary text-right py-md-0 py-2">NT${{computePrice(item['productData']['unitPrice'], item.qty)}}</h5>
          <div class="d-none d-md-block" @click="delCartItem(index)">
            <i class="material-icons">
              restore_from_trash
            </i>
          </div>
        </div>
        <!---->
      </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="cart-pay-group text-center p-3">
          <h4 class="cart-pay-summary mb-0 py-3">
            訂單摘要
          </h4>
          <div class="pt-2">
            <div class="d-flex py-1"><h6>小計</h6><h6 class="ml-auto">{{tempCart.totalPrice}}</h6></div>
            <div class="d-flex py-1"><h6>運費</h6><h6 class="ml-auto">NT$20</h6></div>
            <div class="d-flex py-1"><h5>總計</h5><h5 class="ml-auto">{{tempCart.totalPrice + 20}}</h5></div>
          </div>
        </div>
        <router-link class="d-block bg-third text-primary text-center py-3" to="/check" @click="check">
          結帳
        </router-link>
      </div>
    </div>
  </div>
  <!--cart end-->
</div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'cart',
  data() {
    return{
      tempCart: {
        productList: [{
          productData:{},
          qty:0,
        }
      ],
      totalPrice:0,
      },
    }
  },
  computed:{
    products(){
      return this.$store.state.products
    },
  },
  methods: {
    check() {
      this.$store.commit('CARTCHECK', this.tempCart)
    },
    computeTotal() {
      let temp = 0;
      this.tempCart.productList.forEach((item)=>{
        temp += item.productData.unitPrice*item.qty
      })
      this.tempCart.totalPrice = temp
    },
    delCartItem(index){
      const vm = this
      this.$delete(vm.tempCart.productList, index)
      this.computeTotal()
    },
    qtyPlus(index) {
      this.tempCart.productList[index]['qty'] +=1
      this.computeTotal()
    },
    qtyMinus(index) {
      if(this.tempCart.productList[index]['qty'] !== 1){
        this.tempCart.productList[index]['qty'] -=1
        this.computeTotal()
      }
    },
    computePrice(unitPrice, qty) {
      return unitPrice * qty
    }
  },
  created() {
    this.tempCart = this.$store.state.cart;
    this.computeTotal()
  },
};
</script>
