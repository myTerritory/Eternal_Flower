<template>
  <div class="login">
    <NavBar class="top">
      <div slot="center">登录</div>
    </NavBar>
    <img class="image" src="~assets/img/profile/mien.jpg" alt="">
    <div class="login-res">
      <input type="text" placeholder="请输入用户名" v-model="login">
      <input type="password" placeholder="请输入用户密码" v-model="register">
      <button class="log" @click="fun">登录</button>
      <button class="res" @click="fun2">注册</button>
    </div>


  </div>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  export default {
    name: "Login",
    components:{
      NavBar
    },
    data(){
      return {
        login:null,
        register:null
      }
    },
    methods:{
      fun(){
        this.$emit("btnClick",this.login,this.register)
      },
      fun2(){
        this.$emit("btnClickRes",this.login,this.register)
      }
    }
  }
</script>

<style scoped>
  .top {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--color-tint);;
  }
.login {
  height: calc(100% - 50px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
  .image {
    width: 120px;
    height: 120px;
    border-radius: 100px;
  }
  .login-res {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
  }
  input{
    width: 100%;
    height: 35px;
    margin-bottom: 10px;
    border-radius: 20px;
    padding: 20px;
  }
  input:nth-of-type(2){
    margin-bottom: 30px;
  }
  button{
    width: 100%;
    height: 35px;
    margin-bottom: 10px;
  }
  .log {
     background-color: pink;
    border-radius: 6px;
  }
</style>