<template>
  <div class="container">
      <div class="head"><span class="iconfont iconjiantou2"></span><span class="edit">编辑资料</span></div>
      <div class="imgs"><img :src="profile.head_img"/></div>
    <UserNav nav_text="昵称" :text="profile.nickname"/>
     <UserNav nav_text="密码" text="******"/>
      <UserNav nav_text="性别" text="男"/>
       <UserNav nav_text="手机号" :text="profile.username"/>
       <div class="edit-btn">确定</div>
  </div>
</template>

<script>
import UserNav from '@/components/UserNav'
export default {
    data(){
        return {
            profile:{}
        }
    },
    components:{
        UserNav
    },
    mounted(){
       this.$axios({
      url: "/user/" + localStorage.getItem("user_id"),
      method: "get",
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(res => {
      console.log(res);
      if (res.data.message === "获取成功") {
        this.profile = res.data.data;
        if (this.profile.head_img) {
          this.profile.head_img =
            this.$axios.defaults.baseURL + this.profile.head_img;
        } else {
          this.profile.head_img = "../../static/images/pink.jpg";
        }
        console.log(this.profile);
      }
    });
    }
}
</script>

<style scoped lang="less">
    .container{
        height:100vh;
        background: rgb(242, 242, 242);
        .head{
            padding:20/360*100vw;
            padding-bottom: 0;
            display: flex;
            justify-content: space-between;
            .edit{
                flex:1;
                text-align: center;
            }
        }
        .imgs{
            display: flex;
            justify-content: center;
            align-items: center;
            padding:25/360*100vw 0;
            img{
                display: block;
                width:70/360*100vw;
                border-radius: 50%;
            }
        }
        .edit-btn{
            height:45/360*100vw;
            background: rgb(129, 191, 236);
            width:50%;
            border-radius: 22/360*100vw;
            margin:0 auto;
            margin-top:20/360*100vw;
            color:#fff;
            font-size:25/360*100vw;
            text-align: center;
            line-height: 45/360*100vw;
        }
    }
</style>