<template>
 <div class="login1">
   <Login @btnClick="btnClick" v-show="!isLogin" @btnClickRes="btnClickRes"></Login>
   <HasLogin v-show="isLogin"></HasLogin>
 </div>
</template>

<script>
  import axios from "axios"
  import Login from "components/common/login/Login"
  import HasLogin from "components/common/hasLogin/HasLogin"
  import {getHome} from "network/profile";
  import {request1} from "network/request";

  export default {
    name: "Profile",
    components:{
      Login,
      HasLogin
    },
    data(){
      return {
          isLogin:false
      }
    },
    methods:{
      //登录
      btnClick(log,res){
        // console.log(log)
        // console.log(res)
      axios.get("/v1/my-project/public/login.php",{
        params:{name:log, pwd:res}
      })
          .then((res) => {
            console.log(res);
            if(res.data.status == "1"){
              alert("登录成功")
              this.isLogin = true
            }else if(res.data.status == "0") {
              alert("用户名或密码错误!")
            }else {
              alert("用户密码不能为空!")
            }
          }).catch(err => {

      })

      },
      //注册
      btnClickRes(log,res){

        axios.get("/v1/my-project/public/register.php",{
          params:{name:log, pwd:res}
        })
            .then((result) => {
              console.log(result)
              if(log==null||res==null){
                alert("用户名或密码不能为空");
              }else{
                if(result.data.msg == "suc"){
                  alert("注册成功!")
                }else{
                  console.log(log)
                  alert("注册失败!")
                }
              }
            }).catch(err => {
          console.log(err);
        })


      }
    }
  }
</script>

<style scoped>
.login1 {
height: 100%;
background: rgba(204, 255, 207, 0.45);
}
</style>