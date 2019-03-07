<template>
  <div class="outside">
     <div class="cart-count">
         <div class="title">
        <div>商品名称</div>
        <div>商品价格</div>
        <div>商品数量</div>
      </div>
      <div class="pro" v-for="(item,index) in orderList" :key="index">
        <div>{{item.title}}</div>
        <div>{{item.price}}</div>
        <div>{{item.count}}</div>
      </div>
     </div>
  </div>
</template>

<script>
  export default {
    name: "CartCount",
    components: {
  
    },
    props:{
        orderList:{
            value:Array,
            default(){
                return []
            }
        }
    },
    computed: {
     
    },
    
  }
</script>

<style scoped>
.outside {
    height: 300px;
    width: 100%;
    background: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.cart-count{
    width: 300px;
    background: #ccc;
    border-radius: 10px;
    display: flex
}
.title,.pro{
    display: flex;
    flex-direction: row;
    height: 30px;
    background: #ccc
}
.title div,.pro div{
     flex:1;
     display: flex;
     justify-content: center;
     align-items: center;
}
</style>
