<template>
  <div class="recommend">
    <div class="left">
      <slot name="rec-img"></slot>
    </div>
    <div class="right">
      <p>
        <slot name="rec-p"></slot>
      </p>
      <div>
       <slot name="price"></slot>
        <slot name="oldprice"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Recommend"
  }
</script>

<style scoped>
  .recommend{
    height: 120px;
    border-bottom: 2px solid #fff;
    padding: 10px;
    display: flex;
    flex-direction: row;
    background: rgba(204, 255, 207, 0.6);
  }
  .left {
    flex: 1;
    height: 100%;
  }
  .right {
    height: 100%;
    flex:2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fff;
    padding: 10px;
  }
  .right p {
    margin-bottom: 10px;
  }
</style>