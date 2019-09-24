<template>
  <div class="container">
    <div class="userProfile">
      <img src="../../static/images/pink.jpg" />
      <div class="user">
        <div>
          <span class="sex iconfont iconxingbienan"></span>火星网友
        </div>
        <div class="time">2019-09-24</div>
      </div>
      <span class="iconfont iconjiantou1"></span>
    </div>
    <UserNav nav_text="我的关注" text="关注的用户" @click="handleMe" />
    <UserNav nav_text="我的跟帖" text="跟帖/回复" @click="handleGen" />
    <UserNav nav_text="我的收藏" text="文章/视频" @click="handleFavorite" />
    <UserNav nav_text="设置"  @click="handleSet" />
    <UserNav nav_text="退出"  @click="handleLogout" />
  </div>
</template>

<script>
import UserNav from "@/components/UserNav";
export default {
  components: {
    UserNav
  },
  methods: {
    handleMe(value) {//我的关注事件
      console.log(value);
    },
    handleGen(value){//跟帖事件

    },
    handleFavorite(value){//我的收藏事件

    },
    handleSet(value){//设置事件

    },
    handleLogout(value){//退出事件

    }
  }
};
</script>

<style scoped lang='less'>
.container {
  background: rgb(242, 242, 242);
  height:100vh;
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
      .sex {
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