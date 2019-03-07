<template>
  <div class="detail">
    <nav-bar class="home-nav">
      <div slot="left" @click="backClick">
        &lt;  返回
      </div>
      <div slot="center">商品详情页</div>
      </nav-bar>
    <scroll class="content">
      <div class="image">
        <img class="detail-img" :src="hots.image" alt="">
      </div>
      <div>{{hots.title}}</div>
    </scroll>
    <div class="cart">
      <div class="img"><img src="~assets/img/detail/car_icon_nor.png" alt=""></div>
      <div class="add-cart" @click="addToCart"><span>加入购物车</span></div>
      <div class="buy-now"><span>立即购买</span></div>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import axios from "axios"
  import Scroll from "components/common/scroll/Scroll"
  export default {
    name: "Detail",
    data(){
      return {
        cid:null,
        topImages:[],
        hots:{}
      }
    },
    components:{
      NavBar,
      Scroll
    },
    created(){
      
    },
    mounted(){
this.cid = this.$route.params.id;
      axios.get("/v1/my-project/public/home.php")
          .then((res) => {
            for(let i = 0; i<res.data.data.length; i++){
              let list = res.data.data[i];
              if(parseInt(list.cid)==this.cid){
                this.hots = list;
              }
            }
            console.log(this.hots);
           
          }).catch(err => {
        console.log(err);
      })
    },
    methods:{


      addToCart(){
        console.log(this.hots.id)
          // 1.1.获取当前需要放入到Vuex中的商品对象
        const obj = {}
        obj.iid = this.hots.cid;
        obj.title = this.hots.title;
        // obj.desc = this.goods.desc;
        obj.price = this.hots.price;
        obj.image = this.hots.image;
 // console.log(this.topImages); 
        // 1.2.将obj对象存放到store中的state中的cartList中
        // 任何修改state中的属性必须通过mutations
        // this.$store.commit('addCart', obj)
        console.log(obj)
        this.$store.dispatch('addCart', obj).then(res => {
          this.$toast(res)
          sessionStorage.setItem('state', JSON.stringify(this.$store.state))
        })
        // this.addCart(obj).then(res => {

        //   this.$toast(res)
        // })
      },
       backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .detail {
    position: relative;
    height: 100vh;
  }
  .content {
     position: absolute;
     left: 0;
     right: 0;
     top: 44px;
     bottom: 0;
   }
  .home-nav {
    background: rgba(204, 255, 207, 0.6);
  }
  .image {
    width: 100%;
    text-align: center;
  }
  .detail-img {
    width: 85%;
    height: 280px;
  }
  .cart {
    /*border-top: 1px solid #98ff9b;*/
    box-shadow: 0 1px 1px 2px #dfdfdf;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 9999;
    background: white;
    height: 70px;
    width: 100%;
    flex-direction: row;
    display: flex;
    /*align-items: center;*/
    font-size: 20px;
    color: white;
  }
  .cart .img {
    height: 100%;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img img {
    width: 60%;

  }
  .add-cart {
    background: rgba(255, 105, 45, 0.53);
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .buy-now {
    background: #a0ffc1;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>