<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="img-slot"></slot></div>
    <div v-else><slot name="img-slot-active"></slot></div>
    <div :style="activeStyle"><slot name="text-slot"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    data(){
      return {

      }
    },
    props:{
      path:String,
      activeColor:{
        type:String,
        default: "green"
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive? {color:this.activeColor}:{}
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
  }
</style>