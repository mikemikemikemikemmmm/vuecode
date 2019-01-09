<template>
  <div id="app">
    <div id="loading" class="w-100 h-100 position-fixed flex-center" v-if='isLoading'>
      <div class="black-loading w-100 h-100 position-absolute"></div>
      <Loading/>
    </div>
    <noscript>
      <strong>We're sorry but myapp doesn't work properly without JavaScript
        enabled. Please enable it to continue.</strong>
    </noscript>
    <Headersection/>
    <router-view/>
    <Footersection/>
  </div>
</template>
<script>
import Headersection from './components/Header.vue';
import Footersection from './components/Footer.vue';
import Loading from './components/Loading.vue';

export default {
  name: 'index',
  components: {
    Headersection,
    Footersection,
    Loading,
  },
  data() {
    return {
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  beforeCreate() {
    this.$store.commit('LOADING', true)
  },
  mounted() {
    setTimeout(()=>{
      this.$store.commit('LOADING', false)
    }, 1000)
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import "./assets/css/all.scss";
.black-loading{
  background-color: #000000;
  opacity: 0.2;
  left: 0;
  top: 0;
}
#loading{
  z-index: 100;
  left: 0;
  top: 0;
}
</style>
