<template>
  <div>
    <!--banner strat-->
    <div class="container px-0 px-md-2">
      <div class="banner bg-center" v-bgimg="'index/banner.jpg'">
      </div>
    </div>
    <!--banner end-->
    <!--introduce start-->
    <div class="introduce-group container px-0 px-md-2">
      <div class="row justify-content-center no-gutters">
        <div class="col-md-10 introduce-card-group">
          <div class="row no-gutters">
            <a class="col-4 introduce-cardbox">
              <!--white bg-->
              <div class="bg-white introduce-card-allitem"></div>
              <!--blur bg-->
              <div
                class="bg-center introduce-card-allitem introduce-card-bg" v-bgimg="'index/index-card1.jpg'"
              ></div>
              <!--color change bg-->
              <div class="introduce-card-text-bg introduce-card-allitem"></div>
              <!--text-->
              <span class="flex-center introduce-card-text introduce-card-allitem">本日精選</span>
            </a>
            <a class="col-4 introduce-cardbox">
              <div class="bg-white introduce-card-allitem"></div>
              <div
                class="bg-center introduce-card-allitem introduce-card-bg"
                v-bgimg="'index/index-card2.jpg'"
              ></div>
              <div class="introduce-card-text-bg introduce-card-allitem"></div>
              <span class="flex-center introduce-card-text introduce-card-allitem">本日精選</span>
            </a>
            <a class="col-4 introduce-cardbox">
              <div class="bg-white introduce-card-allitem"></div>
              <div
                class="bg-center introduce-card-allitem introduce-card-bg"
                v-bgimg="'index/index-card3.jpg'"
              ></div>
              <div class="introduce-card-text-bg introduce-card-allitem"></div>
              <span class="flex-center introduce-card-text introduce-card-allitem">本日精選</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!--introduce end-->
    <!--section start-->
    <div class="section-bg-change w-100">
      <div class="container section1">
          <div class="row align-items-center h-100">
            <div class="text-center py-6 d-md-none col-12">
              <img class="section-title" src="@/assets/image/index/sm-橫式-為什麼選擇了做甜點.svg" alt>
            </div>
            <div class="col-md-5 col-lg-6 px-0 px-md-2">
              <div
                class="section-img-box bg-center"
                v-bgimg="'index/index-section1.jpg'"
              ></div>
            </div>
            <div class="col-md-auto mx-auto  px-0 px-md-2">
              <div class="section-article p-6 p-md-0">
                <p>
                  青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
                  是非成敗轉頭空，青山依舊在，幾度夕陽紅。白髮漁樵江渚上，古今多少事，都付笑談中。
                </p>
              </div>
            </div>
            <div class="section-md-title col-md-auto d-none d-md-block  px-0 px-md-2">
              <img src="@/assets/image/index/lg-為什麼選擇了做甜點.svg" height="307.15px" alt>
            </div>
          </div>
      </div>
    </div>
    <div class="section-bg-change w-100">
      <div class="container section2">
        <div class="row align-items-center h-100 flex-row-reverse">
          <div class="text-center py-6 d-md-none col-12">
            <img class="section-title" src="@/assets/image/index/sm-橫式-為什麼選擇了做甜點.svg" alt>
          </div>
          <div class="col-md-5 col-lg-6 px-0 px-md-2">
            <div
              class="section-img-box bg-center"
              v-bgimg="'index/index-section2.jpg'"
            ></div>
          </div>
          <div class="section-md-title col-md-auto mx-auto d-none d-md-block px-0 px-md-2">
            <img src="@/assets/image/index/lg-為什麼選擇了做甜點.svg" height="307.15px" alt>
          </div>
          <div class="col-md-auto px-0 px-md-2">
            <div class="section-article p-6 p-md-0">
              <p>
                青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
                是非成敗轉頭空，青山依舊在，幾度夕陽紅。白髮漁樵江渚上，古今多少事，都付笑談中。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section3 container">
      <div class="row h-100 flex-center">
        <div class="d-md-none py-6 col-12">
          <img class="section-title" src="@/assets/image/index/sm-橫式-想吃甜點是不需要理由的.svg" alt>
        </div>
        <div class="section-md-title d-md-block d-none col-md-auto">
          <img src="@/assets/image/index/lg-想吃甜點是不需要理由的.svg" height="327.79px" alt>
        </div>
      </div>
    </div>
    <div class="buy-card-group container">
      <div class="row">
        <!--single card start-->
        <div class="col-12 col-md-4" v-for="item in products.slice(0,3)" :key="item.title">
          <div class="pb-3 py-md-0">
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
              <h5 class="flex-grow-1 text-center py-3 border border-secondary">NT {{item.unitPrice}}</h5>
            </div>
            <a class="d-block add-cart text-primary bg-secondary">
              <h4 class="text-center py-4" @click="addToCart(item.index)">加入購物車</h4>
            </a>
          </div>
        </div>
        <!--single card end-->
      </div>
    </div>
    <!--setion end-->
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Index',
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    addToCart(index, qty = 1) {
      this.$store.commit('ADDTOCART', { index, qty });
    },
  },
  created(){
  }
};
</script>
