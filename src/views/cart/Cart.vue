<template>
  <div class="cart">
    <!-- 1.导航栏-->
     <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>

    <!--2.购物车列表-->
    <cart-list/>

    <!--3.汇总底部工具栏-->
    <cart-bottom-bar @allCount="allCount" />
    <cart-count :class="isCount?'isActive':'noActive'" :orderList="orderList"></cart-count>  
  </div>
</template>

<script>
  // map -> 映射
  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar'

  import NavBar from 'components/common/navbar/NavBar'
  import CartCount from "./childComps/CartCount"
  import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
    components: {
      CartList,
      CartBottomBar,
      NavBar,
      CartCount
    },
    data(){
      return {
        isCount:false,
        orderList:[]
      }
    },
    computed: {
      // ...mapGetters(['cartLength'])
      ...mapGetters({
        'length': 'cartLength'
      })
    },
    methods:{
      allCount(){
        alert(1)
          this.isCount = true
          for (let item of this.cartList) {
          if (item.checked) {
            orderList.push(item)
          }
        }
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
  .isActive {
    display: block;
    height: 400px
  }
  .noActive {
     display: none;
  }
</style>
