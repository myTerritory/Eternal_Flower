<template>
  <div class="category">
    <nav-bar class="home-nav"><div slot="center">花店分类</div></nav-bar>
   <div class="cont">
     <ul class="left-c">
       <li v-for="(item,index) in title" @click="ItemClick(index)" :class="{active: currentIndex == index }">{{item}}</li>
     </ul>
     <div class="right-c">
       <scroll class="content"
               ref="scroll">
         <HotItem v-for="item in goods">
           <img slot="img" class="hot-img" :src="item.image" alt="">
           <p class="hot-p" slot="title">{{item.title}}</p>
           <span class="price" slot="price">¥{{item.price}}</span>
           <span class="oldprice" slot="oldprice">¥{{item.oldprice}}</span>
         </HotItem>
       </scroll>
     </div>
   </div>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import Scroll from "components/common/scroll/Scroll"
  import HotItem from "components/content/hotItem/HotItem"
  import axios from "axios"
  export default {
    name: "Category",
    components:{
      NavBar,
      Scroll,
      HotItem,
    },
    data(){
      return {
        title:["爱情鲜花","生日鲜花","友谊鲜花","领导长辈","探病慰问","玫瑰","百合","康乃馨"],
        currentIndex:0,
        goods:[],
      }
    },
    methods:{
      getCategory() {
        axios.get("/v1/my-project/public/home.php")
            .then((res) => {
              console.log(res);
              for(let i = 0; i<res.data.data.length; i++){
                let list = res.data.data[i];
                if(this.currentIndex + 1== list.level - 1){
                  this.goods.push(list)
                }
              }
            }).catch(err => {
          console.log(err);
        })
      },
      ItemClick(index){
        this.currentIndex = index
        this.goods = []
        axios.get("/v1/my-project/public/home.php")
            .then((res) => {
              console.log(res);
              for(let i = 0; i<res.data.data.length; i++){
                let list = res.data.data[i];
                if(this.currentIndex + 1 == list.level - 1){
                  this.goods.push(list)
                }
              }
            }).catch(err => {
          console.log(err);
        })
      }
    },
    created(){
      this.getCategory();
    }
  }
</script>

<style scoped>
  .content {
    overflow: hidden;
    position: absolute;
    left: 100px;
    right: 0;
    bottom: 49px;
    top: 44px;
  }
  .category {
    height: calc(100% - 49px);
    overflow: hidden;
     /* background-color: var(--color-tint); */
  }
.left-c {
  /*position: absolute;*/
  height: 100%;
  background: rgba(204, 255, 207, 0.6);
  overflow: hidden;
}
.home-nav{
  position: relative;
  background: rgba(204, 255, 207, 0.6);
  color: gray;
}
  ul {
    width: 100px;
    height: 100%;
  }
  ul li {
    border-bottom: 2px solid #fff;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 17px;
  }
  .cont {
    display: flex;
    height: 100%;
  }
  .right-c {
    flex: 1;
    /*background: #ff8198;*/

  }
  .active {
    color: #ff5777;
  }
  .hot {
    margin-top: 10px;
    background: white;
    border-bottom: 2px solid rgba(204, 255, 207, 0.6);
  }
  .price{
    color: #ff692d;
    font-size: 16px;
  }
  .oldprice  {
    text-decoration: line-through;
    font-size: 14px;
    margin-left: 8px;
  }
  .hot-p {
    margin-bottom: 10px;
    overflow: hidden;/*超出部分隐藏*/
    white-space: nowrap;/*不换行*/
    text-overflow:ellipsis;/*超出部分省略号显示*/
  }

</style>