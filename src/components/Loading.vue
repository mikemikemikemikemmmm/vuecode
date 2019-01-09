<template>
  <div class="lds-css ng-scope">
    <div class="lds-blocks" style="100%;height:100%">
      <div style="left:38px;top:38px;animation-delay:0s"></div>
      <div style="left:80px;top:38px;animation-delay:0.15s"></div>
      <div style="left:122px;top:38px;animation-delay:0.3s"></div>
      <div style="left:38px;top:80px;animation-delay:1.05s"></div>
      <div style="left:122px;top:80px;animation-delay:0.44999999999999996s"></div>
      <div style="left:38px;top:122px;animation-delay:0.8999999999999999s"></div>
      <div style="left:80px;top:122px;animation-delay:0.75s"></div>
      <div style="left:122px;top:122px;animation-delay:0.6s"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@keyframes lds-blocks {
  0% {
    background: #ffe180;
  }
  12.5% {
    background: #ffe180;
  }
  12.625% {
    background: rgba(
      24.70588235294118%,
      36.47058823529412%,
      27.058823529411768%,
      0.801
    );
  }
  100% {
    background: rgba(
      24.70588235294118%,
      36.47058823529412%,
      27.058823529411768%,
      0.801
    );
  }
}
@-webkit-keyframes lds-blocks {
  0% {
    background: #ffe180;
  }
  12.5% {
    background: #ffe180;
  }
  12.625% {
    background: rgba(
      24.70588235294118%,
      36.47058823529412%,
      27.058823529411768%,
      0.801
    );
  }
  100% {
    background: rgba(
      24.70588235294118%,
      36.47058823529412%,
      27.058823529411768%,
      0.801
    );
  }
}
.lds-blocks {
  position: relative;
}
.lds-blocks div {
  position: absolute;
  width: 40px;
  height: 40px;
  background: rgba(
    24.70588235294118%,
    36.47058823529412%,
    27.058823529411768%,
    0.801
  );
  -webkit-animation: lds-blocks 1.2s linear infinite;
  animation: lds-blocks 1.2s linear infinite;
}
.lds-blocks {
  width: 200px !important;
  height: 200px !important;
  -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
  transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
}
</style>
