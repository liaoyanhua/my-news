<template>
  <div class="container">
 <ProfileHead text="个人主页"/>
    <router-link to="user-edit">
    <div class="userProfile">
      <img :src="profile.head_img" />
      <div class="user">
        <div>
          <span class=" iconfont" :class="profile.gender===1?'sex1 iconxingbienan':'sex0 iconxingbienv'"></span>
          {{profile.nickname}}
        </div>
        <div class="time">2019-09-24</div>
      </div>
      <span class="iconfont iconjiantou1"></span>
    </div>
    </router-link>
    <UserNav nav_text="我的关注" text="关注的用户" @click="$router.push('/user-follow')" />
    <UserNav nav_text="我的跟帖" text="跟帖/回复" @click="handleGen" />
    <UserNav nav_text="我的收藏" text="文章/视频" @click="handleFavorite" />
    <UserNav nav_text="设置" @click="$router.push('/user-edit')" />
    <UserNav nav_text="退出" @click="handleLogout" />
  </div>
</template>

<script>
import ProfileHead from '@/components/ProfileHead'
import UserNav from "@/components/UserNav";
export default {
  components: {
    UserNav,
    ProfileHead
  },
  data() {
    return {
      profile: {}
    };
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
      }
    });
  },
  methods: {
    handleLogout(value) {
      //退出事件
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
      this.$router.replace("/login");
    }
  }
};
</script>

<style scoped lang='less'>
.container {
  background: rgb(242, 242, 242);
  height: 100vh;
  .userProfile {
    display: flex;
    padding: 20/360 * 100vw;
    justify-content: space-between;
    align-items: center;
    border-bottom: 5px solid rgb(228, 228, 228);
    img {
      width: 70/360 * 100vw;
      display: block;
      border-radius: 50%;
    }
    .user {
      padding: 0 10px;
      flex: 1;
      .sex0 {
        color: rgb(255, 62, 201);
        margin-right: 10/360 * 100vw;
      }
      .sex1 {
        color: rgb(129, 191, 236);
        margin-right: 10/360 * 100vw;
      }
      .time {
        color: rgb(161, 161, 161);
        font-size: 14/360 * 100vw;
        margin-top: 10px;
      }
    }
  }
}
</style>