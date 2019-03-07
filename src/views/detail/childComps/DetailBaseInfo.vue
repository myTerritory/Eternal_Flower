<template>
  <div class="detail-base-info" v-if="Object.keys(goods).length !== 0">
    <div class="title">{{goods.title}}</div>
    <div class="price">
      <span class="new-price">{{goods.price}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="dec">{{goods.desc}}</span>
    </div>
    <div class="sell">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="desc">
      <span v-for="index in goods.services.length-1">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-base-info{
    padding: 15px 10px;
  }
  .title {
    color: #000;
    font-size: 18px;
  }
  .price {
    margin: 15px 0;
  }
  .new-price {
    color: var(--color-high-text);
    font-size: 30px;
  }
  .old-price {
    text-decoration: line-through;
    margin: 0 5px;
  }
  .dec {
    background-color: var(--color-tint);
    color: #fff;
    border-radius: 10px;
    padding: 3px 5px;
    font-size: 14px;
    position: relative;
    top: -8px;
  }
  .sell{
    display: flex;
    margin: 10px 0;
  }
  .sell span{
    flex: 1;
    font-size: 13px;
  }
</style>