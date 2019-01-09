<template>
  <div>
    <div class="container">
      <nav class="navbar navbar-expand-md navbar-light px-0 py-5">
        <button
          class="navbar-toggler ml-6 border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <router-link class="navbar-brand mx-auto mx-md-0 flex-center" to="/">
          <img class="d-none d-md-inline mr-2" src="@/assets/image/header/logo-dark.svg" height="40px" alt>
          <img class="d-none d-md-inline" src="@/assets/image/header/logotype-lg-dark.svg" height="26.6px" alt>
          <img class="d-md-none" src="@/assets/image/header/logotype-sm-dark.svg" height="17.74px" alt>
        </router-link>
        <router-link class="ml-md-6 ml-0 mr-md-0 mr-6 flex-center order-md-last" to="/cart">
          <i class="material-icons text-primary">shopping_cart</i>
        </router-link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-6">
              <router-link class="nav-link" to="/">首頁
                <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item mx-6">
              <router-link class="nav-link" to="/products">甜點</router-link>
            </li>
            <li class="nav-item mx-6">
              <router-link class="nav-link" to="/login">登入</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: 'headerSection',
};
</script>