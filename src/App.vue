<template>
  <div id="app">
    <!--<keep-alive>-->
    <router-view key="key"></router-view>
    <!--</keep-alive>-->
    <main-tab-bar></main-tab-bar>

  </div>
</template>

<script>
  import MainTabBar from "components/content/mainTabbar/MainTabBar"
  export default {
    name:"App",
    components:{
      MainTabBar
    },
  created () {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    } 

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
  }

  }
</script>

<style>
@import "assets/css/base.css";

  #app{
    height: 100%;
  }
</style>
