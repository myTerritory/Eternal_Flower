<template>
  <div class="featureview">
    <a href="https://act.mogujie.com/zzlx67">
      <img src="~assets/img/home/recommend_bg.jpg" alt=""  @load="isImageLoad">
    </a>
  </div>
</template>

<script>
  export default {
    name: "FeatureView",
    data(){
      return {
        isLoad:false
      }
    },
    methods:{
      isImageLoad(){
        this.$emit("ImageLoad")
        this.isLoad = true
        //为什么比轮播图加载慢
        // if(!this.isLoad){
        //   this.$emit("swiperImageLoad")
        //   this.isLoad = true
        // }
      }
    },
  }
</script>

<style scoped>
.featureview{
  width: 100%;
}
  .featureview img {
    width: 100%;
  }
</style>