<template>
    <div class="hotItem" @click="ItemClick">
      <div class="img"><slot name="img"></slot></div>
      <div class="text">
        <div><slot name="title"></slot></div>
        <div>
          <slot name="price"></slot>
          <slot name="oldprice"></slot>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "HotItem",
    props: {
      hots: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods:{
      ItemClick(){
        this.$router.push('/detail/' + this.hots.cid)
      }
    }
  }
</script>

<style scoped>
.hotItem {
  /*float: left;*/
  display: inline-block;
  width: 50%;
  background: white;
  border-bottom: 2px solid rgba(204, 255, 207, 0.6);
  padding: 0 10px;
}
.hotItem:nth-of-type(odd){
  border-right: 2px solid rgba(204, 255, 207, 0.6);
}
.img {
  width: 100%;
  height: 150px;
  text-align: center;
  padding: 15px 0;
}
  .img img {
    width: 85%;
    height: 120px;
  }
  .text {
    padding: 0 0 10px 0;
  }
</style>