<template>
  <div>
    <!--banner strat-->
    <div
      class="banner container bg-center position-relative mb-2 mb-md-10" 
      v-bgimg="'product/banner_product.jpg'"
    >
      <img
        class="position-absolute banner-title"
        src="@/assets/image/product/lg-想吃甜點是不需要理由的.svg"
        alt
      >
    </div>
    <!--banner end-->
    <!--product start-->
    <div class="container mb-2">
      <div class="row">
        <div class="col-md-4 text-center">
          <h4 class="bg-primary text-secondary w-100 py-4">甜點類別</h4>
          <a class="d-block category-item-hover border border-secondary py-4 w-100" href="#">
            <h4>甜點類別</h4>
          </a>
          <a class="d-block category-item-hover border border-secondary py-4 w-100" href="#">
            <h4>甜點類別</h4>
          </a>
          <a class="d-block category-item-hover border border-secondary py-4 w-100" href="#">
            <h4>甜點類別</h4>
          </a>
        </div>
        <div class="col-md-8">
          <div class="row">
            <!--single card start-->
            <div v-for="(item,index) in products" :key="item.title" class="pb-3 py-md-0 col-md-6 mb-4">
              <div class="card-img bg-center position-relative" v-bgimg="`product-img/${item.imgName}`">
                <div class="card-img-today flex-center position-absolute bg-primary text-secondary">
                  <h5>本日精選</h5>
                </div>
                <a class="d-block position-absolute card-img-love text-primary">
                  <i class="material-icons">favorite_border</i>
                </a>
              </div>
              <div class="text-primary d-flex">
                <h5 class="flex-grow-1 text-center py-3 border border-secondary">{{item.title}}</h5>
                <h5 class="flex-grow-1 text-center py-3 border border-secondary">{{item.unitPrice}}</h5>
              </div>
              <a class="d-block add-cart text-primary bg-secondary">
                <h4 class="text-center py-4" @click="addToCart(index)">加入購物車</h4>
              </a>
            </div>
            <!--single card end-->
          </div>
        </div>
      </div>
    </div>
    <!--product end-->
    <!--pagination start-->
    <div class="container d-flex pagination-group mb-10">
      <div class="flex-center pagination-item border border-secondary">&lt;</div>
      <div class="flex-center pagination-item border border-secondary">1</div>
      <div class="flex-center pagination-item border border-secondary">2</div>
      <div class="flex-center pagination-item border border-secondary">3</div>
      <div class="flex-center pagination-item border border-secondary">&gt;</div>
    </div>
    <!--pagination end-->
  </div>
</template>
  
<script>
export default {
  name: "products",
  computed: {
    products(){
      return this.$store.state.products;
    },
  },
  methods: {
    addToCart(index, qty= 1) {
      this.$store.commit('ADDTOCART', { index, qty })
    },
  },
};
</script>