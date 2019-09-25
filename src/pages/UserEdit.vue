<template>
  <div class="container">
    <ProfileHead text="编辑资料" />
    <div class="imgs">
      <img :src="profile.head_img" />
      <!-- 引入图片上传组件 -->
      <van-uploader :after-read="afterRead" class="uploads" />
    </div>

    <UserNav nav_text="昵称" :text="profile.nickname" @click="showNickname=!showNickname" />
    <van-dialog v-model="showNickname" @confirm="handleNick" title="修改昵称" show-cancel-button>
      <van-field :value="profile.nickname" ref="names" placeholder="请输入用户名" />
    </van-dialog>

    <UserNav nav_text="密码" :text="profile.password" type="password" @click="showPass=!showPass" />
    <van-dialog v-model="showPass" @confirm="handlePass" title="修改密码" show-cancel-button>
      <van-field :value="profile.password" ref="pass" placeholder="请输入新密码" />
    </van-dialog>

    <UserNav nav_text="性别" :text="profile.gender===1?'男':'女'" @click="showGender=!showGender"  />
    <van-dialog v-model="showGender" @confirm="handleGender" title="修改性别" show-cancel-button>
      <van-radio-group v-model="genderCache">
        <van-cell-group>
          <van-cell title="女" clickable @click="genderCache = '0'">
            <van-radio slot="right-icon" name="0" />
          </van-cell>
          <van-cell title="男" clickable @click="genderCache = '1'">
            <van-radio slot="right-icon" name="1" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </van-dialog>

    <UserNav nav_text="手机号" :text="profile.username" @click="showUserName=!showUserName"/>
    <van-dialog v-model="showUserName" @confirm="handleUser" title="修改手机号" show-cancel-button>
      <van-field :value="profile.username" ref="phone" placeholder="请输入新手机号" />
    </van-dialog>
    <div class="edit-btn" @click="$router.back()">确定</div>
  </div>
</template>

<script>
import ProfileHead from "@/components/ProfileHead";
import UserNav from "@/components/UserNav";
export default {
  data() {
    return {
      profile: {},
      showNickname: false,
      showPass: false,
      showGender:false,
      showUserName:false,
      genderCache:'0'
    };
  },
  components: {
    UserNav,
    ProfileHead
  },
  mounted() {
    this.$axios({
      url: "/user/" + localStorage.getItem("user_id"),
      method: "get",
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(res => {
      if (res.data.message === "获取成功") {
        this.profile = res.data.data;
        if (this.profile.head_img) {
          this.profile.head_img =
            this.$axios.defaults.baseURL + this.profile.head_img;
        } else {
          this.profile.head_img = "../../static/images/pink.jpg";
        }
        //再页面一加载时给性别做判断,使得在修改出现弹窗中有默认值的选中
      this.genderCache=String(res.data.data.gender);
      // console.log(this.genderCache);
      }
    });
  },
  methods: {
    //封装一个编辑个人信息资料修改请求函数
    updataProfileData(dataObj, callback) {
      if (!dataObj) return; //检测一下是否有数据?如果没有则不让函数继续执行,否则就让函数继续执行
      this.$axios({
        method: "POST",
        url: "/user_update/" + localStorage.getItem("user_id"),
        headers: {
          Authorization: localStorage.getItem("token")
        },
        data: dataObj
      }).then(result => {
        let { message, data } = result.data;
        if (message === "修改成功") {
          this.$toast.success(message);
          if (callback) {
            callback();
          }
        }
      });
    },
    //请求图片上传以及头像修改
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      // console.log(file);
      //由于图片上传没有form表单,故这里需要构建一个表单,使用FormData来构建
      let formdata = new FormData();
      formdata.append("file", file.file);
      this.$axios({
        url: "/upload",
        method: "POST",
        data: formdata,
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }).then(res => {
        let { message, data } = res.data;
        let img = data.url;
        if (message === "文件上传成功") {
          this.updataProfileData({ head_img: img }, () => {
            this.profile.head_img = this.$axios.defaults.baseURL + img;
          });
        }
      });
    },
    //请求昵称修改
    handleNick(e) {
      let nameValue = this.$refs.names.$refs.input.value;
      this.updataProfileData({ nickname: nameValue }, () => {
        this.profile.nickname = nameValue;
      });
    },
    //请求密码修改
    handlePass() {
      let pass = this.$refs.pass.$refs.input.value;
      console.log(pass);
      this.updataProfileData({ password: pass }, () => {
        this.profile.password = pass;
      });
    },
    //请求性别修改
    handleGender(){
      let gender=this.genderCache;
       this.updataProfileData({gender}, ()=>{
         this.profile.gender= +gender;
       })
    },
    //请求用户名手机号修改
    handleUser(){
      let username=this.$refs.phone.$refs.input.value;
      console.log(username);
      this.updataProfileData({username}, ()=>{
        this.profile.username=username;
      });
    }
  }
};
</script>

<style scoped lang="less">
.container {
  height: 100vh;
  background: rgb(242, 242, 242);
  .imgs {
    position: relative;
    display: flex;

    justify-content: center;
    align-items: center;
    padding: 25/360 * 100vw 0;
    padding-bottom: 15/360 * 100vw;
    img {
      display: block;
      width: 100/360 * 100vw;
      border-radius: 50%;
    }
    .uploads {
      position: absolute;
      opacity: 0;
    }
    /deep/ .van-uploader__upload {
      width: 110/360 * 100vw;
      height: 110/360 * 100vw;
    }
  }
  .edit-btn {
    height: 45/360 * 100vw;
    background: rgb(129, 191, 236);
    width: 50%;
    border-radius: 22/360 * 100vw;
    margin: 0 auto;
    margin-top: 20/360 * 100vw;
    color: #fff;
    font-size: 25/360 * 100vw;
    text-align: center;
    line-height: 45/360 * 100vw;
  }
}
</style>