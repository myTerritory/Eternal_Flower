<template>
  <div class="recommends">
    <div v-for="item in recommends" class="recommends-item">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
.recommends {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}
  .recommends-item{
     flex: 1;
  }
  .recommends-item img {
    width: 90%;
    margin-bottom: 10px;
  }
</style>