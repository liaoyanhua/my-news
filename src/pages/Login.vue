<template>
  <div class="container">
    <div class="close">
      <i class="iconfont iconicon-test"></i>
    </div>
    <div class="logo">
      <i class="iconfont iconnew"></i>
    </div>
    <div class="form">
      <AuthInput
        placeholder="用户名/手机号码"
        :value="form.username"
        :rule="/^1[3-9][0-9]{9}$/"
        @input="handleGetName"
        err_message="手机号格式不正确"
      />

      <AuthInput
        type="password"
        placeholder="密码"
        v-model="form.password"
        :rule="/^[0-9a-zA-Z]{3,12}$/"
        err_message="密码格式不正确"
      />
    </div>
    <P>没有账号,<router-link to="register">去注册?</router-link></p>
    <div class="btn">
      <AuthBtn text="登录" @getform="handleGetForm" />
    </div>
  </div>
</template>

<script>
//   :rule='/^[0-9a-zA-Z]{6,18}$/'
import AuthInput from "@/components/AuthInput";
import AuthBtn from "@/components/AuthBtn";
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  components: {
    AuthInput,
    AuthBtn
  },
  methods: {
    handleGetName(value) {
      this.form.username = value;
      //  console.log(this.form);
    },
    handleGetForm() {
      this.$axios({
        method:'POST',
        data:this.form,
        url:"/login"
      }).then(res=>{
        if(res.data){
         let {message,data}=res.data;
        if(message==="登录成功"){
          localStorage.setItem('token',data.token);
          localStorage.setItem('user_id',data.user.id)
          this.$router.push('/userprofile');
        }
        }
       
      })
    }
  }
};
</script>

<style scoped lang="less">
.container {
  padding: 20px;
  height: 100vh;
  background: rgb(242, 242, 242);
  //按钮部分样式开始
  .close {
    i {
      font-size: 27/360 * 100vw;
      color: #333;
    }
  }
  //logo部分样式开始
  .logo {
    height: 141/360 * 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      color: rgb(216, 30, 6);
      font-size: 126/360 * 100vw;
      // font-weight: bold;
    }
  }
  p {
    line-height: 60/360*100vw;
    text-align: right;
    font-size:16/360*100vw;
    a{
      color:#00a4f5;
    }
  }
}
</style>