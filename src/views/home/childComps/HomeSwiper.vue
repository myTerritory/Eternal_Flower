<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item">
        <img :src="item" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  //v-on 语法糖@监听事件函数.函数名不加括号
  //v-bind 语法糖:监听普通函数.函数名要加括号
  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },

    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
a {
  display: inline-block;
  width: 100%;
  height: 170px;
  /*background-color: green;*/
}
  a img {
    height: 100%;
    width: 100%;
  }
</style>
