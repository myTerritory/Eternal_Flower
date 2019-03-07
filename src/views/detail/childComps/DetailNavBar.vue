<template>
  <nav-bar class="nav-bar">
      <div slot="left" class="left">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
    <div slot="center" class="center">
      <div v-for="(item,index) in titles"
           class="item-text"
           :class="{isActive:currentIndex === index}" @click="itemClick(index)">
        {{item}}
      </div>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  export default {
    name: "DetailNavBar",
    components:{
      NavBar
    },
    data(){
      return {
        isActive:false,
        currentIndex:0,
        titles:['商品','参数','评论','推荐']
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 4;
  }
  .left img {
    margin-top: 10px;
  }
  .center {
    display: flex;
  }
  .item-text{
    flex: 1;
  }
  .isActive {
    color: var(--color-tint);
  }
</style>