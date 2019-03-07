<template>
 <div id="home">
   <nav-bar class="home-nav"><div slot="center">花店首页</div></nav-bar>
  <scroll class="content"
          @scroll="contentScroll"
          :probe-type="3"
          :pull-up-load="true"
          ref="scroll">
    <home-swiper :banners="banners"></home-swiper>
    <nav-bar class="hot"><div slot="left">最近热卖</div></nav-bar>
    <div  class="hott">
      <HotItem v-for="item in hots" :hots="item">
        <img class="hot-img" slot="img" :src="item.image" alt="">
        <p class="hot-p" slot="title">{{item.title}}</p>
        <span class="price" slot="price">¥{{item.price}}</span>
        <span class="oldprice" slot="oldprice">¥{{item.oldprice}}</span>
      </HotItem>
    </div>
    <nav-bar class="hot"><div slot="left">新品上线</div></nav-bar>
    <div  class="hott">
      <HotItem v-for="item in news" :news="item">
        <img slot="img" class="hot-img" :src="item.image" alt="">
        <p class="hot-p" slot="title">{{item.title}}</p>
        <span class="price" slot="price">¥{{item.price}}</span>
        <span class="oldprice" slot="oldprice">¥{{item.oldprice}}</span>
      </HotItem>
    </div>
    <nav-bar class="hot"><div slot="center">-- 为你推荐 --</div></nav-bar>
    <Recommend v-for="item in recommends" class="rec" :recommends="item">
   <img slot="rec-img" class="rec-img" :src="item.image" alt="">
      <p class="rec-p" slot="rec-p">{{item.title}}</p>
      <span class="price" slot="price">¥{{item.price}}</span>
      <span class="oldprice" slot="oldprice">¥{{item.oldprice}}</span>
    </Recommend>
</scroll>
   <back-top v-show="isShowBackTop" @click.native="backTopClick"></back-top>
 </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import HomeSwiper from "./childComps/HomeSwiper"
  import HotItem from "components/content/hotItem/HotItem"
  import BackTop from "components/content/backTop/BackTop"
  import Scroll from "components/common/scroll/Scroll"
  import {debounce} from "common/utils";
  import axios from "axios"
  import Recommend from "components/content/recommend/Recommend"

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      BackTop,
      Scroll,
      HotItem,
      Recommend
    },
    data() {
      return {
        result: null,
        isShowBackTop: false,
        isTabFixed: false,
        banners: [],
        tabOffsetTop: 0,
        hots:[],
        news:[],
        recommends:[],
      }
    },
    methods: {
      getHomebanner() {
        axios.get("/v1/my-project/public/home.php")
            .then((res) => {
              // console.log(res);
              for(let i = 0; i<res.data.data.length; i++){
                  let list = res.data.data[i];
                 if(list.type==="banners"){
                   this.banners.push(list.image)
                 }else if(list.type==="hots"){
                   this.hots.push(list)
                 }else if(list.type==="news"){
                   this.news.push(list)
                 }else if(list.type ==="recommends"){
                   this.recommends.push(list)
                 }
                // console.log(this.hots);
              }
            }).catch(err => {
          console.log(err);
        })
      },
      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 500
      },
      //  点击返回顶部
      backTopClick() {
        this.$refs.scroll.scrollTo(0, 0, 100)
      },
    },
    computed: {

    },
    created() {
      // 1.请求多个数据
      this.getHomebanner();
    },
    mounted() {
      // console.log(this.$refs.scroll);
      // 1.图片加载完成的事件监听
      const refresh = debounce(this.$refs.scroll.refresh, 50)
      //相当于将debounce函数绑定在home这个组件实例中
      this.$bus.$on('itemImageLoad', () => {
        refresh()
      })
    }
  }

</script>

<style scoped>
  .hott {
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
  }
  #home {
    height: 100vh;
    position: relative;
   background-color: var(--color-tint);;
  }
  .home-nav{
    position: relative;
    background: rgba(204, 255, 207, 0.6);
    color: gray;
  }
  .content {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 49px;
    top: 44px;
  }
  .tab-control1 {
    position: relative;
    z-index: 9;
  }
  .hot {
    margin-top: 10px;
    background: white;
    border-bottom: 2px solid rgba(204, 255, 207, 0.6);
  }
  .price{
    color: #ff692d;
    font-size: 23px;
  }
  .oldprice  {
    text-decoration: line-through;
    font-size: 14px;
    margin-left: 10px;
  }
  .hot-p {
    margin-bottom: 10px;
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分省略号显示*/
  }

  .rec-img {
    height: 100px;
  }
  .rec-p {
    /*overflow: hidden;!*超出部分隐藏*!*/
    /*white-space: nowrap;!*不换行*!*/
    /*text-overflow:ellipsis;!*超出部分省略号显示*!*/
  }
</style>