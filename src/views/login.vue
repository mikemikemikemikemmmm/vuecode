<template>
  <div>
  <!--login start-->
  <div class="container">
    <div class="row d-md-none">
      <div class="col-12 px-0 px-md-2">
        <div class="w-100 bg-primary text-center text-secondary py-6">
          <h1>會員登入</h1>
        </div>
      </div>
    </div>
    <div class="row flex-md-row-reverse mb-md-10 flex-center ">
      <div class="col-md-5 bg-secondary text-center px-0 py-6 px-md-6 py-md-8">
        <div class="mb-7 text-fourth d-none d-md-block">
          <h4>--連結社群帳號--</h4>
        </div>
        <div class="d-md-block d-flex justify-content-center text-fourth ">
          <a href="#" class="d-block bg-white p-sm-3 mb-md-2 p-2 border border-secondary">
            <img class="community-img" src="@/assets/image/login/ic-facebook-logotype.svg" alt="">
          </a>
          <a href="#" class="d-block bg-white p-sm-3 p-2 mb-md-2 border border-secondary">
            <img class="community-img" src="@/assets/image/login/ic-google.svg" alt="">
          </a>
          <a href="#" class="d-block bg-white p-sm-3 p-2  border border-secondary">
            <img class="community-img" src="@/assets/image/login/ic-yahoo.svg" alt="">
          </a>
        </div>
      </div>
      <div class="col-md-5 bg-primary  px-0 px-md-2">
        <div class="text-secondary py-8 d-none d-md-block py-6 text-center">
          <h2>會員登入</h2>
        </div>
        <div class="login-input-group mx-auto position-relative p-6 p-md-0 mb-md-4">
          <div class="bg-secondary mb-3 d-flex align-items-center">
            <div class="text-primary">
              <i class="material-icons m-3">
                account_circle
              </i>
            </div>
            <input class="bg-secondary w-75" type="text" placeholder="電子信箱/手機號碼">
          </div>
          <div class="bg-secondary mb-3 d-flex align-items-center">
            <div class="text-primary">
              <i class="material-icons m-3">
                vpn_key
              </i>
            </div>
            <input class="bg-secondary w-75" type="text" placeholder="請輸入使用者密碼">
          </div>
          <div class="remember-me d-flex align-items-center">
            <input type="checkbox">
            <h6 class="d-inline-block text-secondary">記住我</h6>
          </div>
        </div>
        <div class="px-6 px-md-9">
          <a class="w-100 text-center bg-third d-block mb-3 py-3">
            <h6>登入帳號</h6>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!--login end-->
  </div>
</template>
