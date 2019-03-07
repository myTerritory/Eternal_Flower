<template>
  <div class="content">
    <NavBar class="top">
      <div slot="center">我的</div>
    </NavBar>
    <div class="top1">
      <div class="left">
        <img src="~assets/img/profile/mien.jpg" alt="">
      </div>
      <div class="right">
        <div>从前有只羊</div>
        <div>13420133147</div>
      </div>
    </div>
    <div class="order">
      <img src="~assets/img/profile/order_icon.png" alt="">
      <span>我的订单</span>
    </div>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  export default {
    name: "HasLogin",
    components:{
      NavBar
    }
  }
</script>

<style scoped>
  .content {
    overflow: hidden;
  }
  .top1{
    height: 100px;
    display: flex;
    flex-direction: row;
    background: #fff;
    margin-top: 60px;
    margin-bottom: 15px;
  }
  .left {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left img {
    width: 75%;
    height: 75%;
  }
  .right {
    flex:3;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .right div:nth-of-type(1) {
    margin-bottom: 15px;
    font-weight: 600;
  }
  .right div:nth-of-type(2){
    font-size: 14px;
  }
  .order {
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #fff;
    padding-left: 10px;
  }
  .order img {
   height: 60%;
    margin-right: 10px;
  }
  .top {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: #98ff9b;
  }
</style>