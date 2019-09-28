<template>
  <div class="container">
    <ProfileHead text="我的关注" />
    <div class="follow-item" :key="index" v-for="(item,index) in users">
      <img :src="$axios.defaults.baseURL+item.head_img" />
      <div class="news">
        <p>{{item.nickname}}</p>
        <span>2019-09-26</span>
      </div>
      <div class="cancel-follow" @click="handleCancelFollow(index)">取消关注</div>
    </div>
  </div>
</template>  

<script>
import ProfileHead from "@/components/ProfileHead";
export default {
  data() {
    return {
      users: []
    };
  },
  components: {
    ProfileHead
  },
  mounted() {
    this.$axios({
      url: "/user_follows",
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(res => {
      let { data } = res.data;
      this.users = data;
    });
  },
  methods: {
    handleCancelFollow(index) {
      this.$axios({
        url: "/user_unfollow/" + this.users[index].id,
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }).then(res=>{
          console.log(res.data);
          let message=res.data;
          this.$toast.success(message);
          this.users.splice(index,1);
      });
    }
  }
};
</script>

<style scoped lang="less">
.container {
  height: 100vh;
  background: rgb(242, 242, 242);
  font-size: 16/360 * 100vw;
  .follow-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20/360 * 100vw 20/360 * 100vw;
    border-bottom: 1px solid rgb(215, 215, 215);
    img {
      display: block;
      width: 60/360 * 100vw;
      border-radius: 50%;
      margin-right: 20/360 * 100vw;
    }
    .news {
      flex: 1;
      span {
        font-size: 14/360 * 100vw;
        color: rgb(179, 112, 154);
      }
    }
    .cancel-follow {
      background: rgb(225, 225, 225);
      padding: 8/360 * 100vw 10/360 * 100vw;
      color: rgb(54, 54, 54);
      font-size: 14/360 * 100vw;
      border-radius: 22/360 * 100vw;
    }
  }
}
</style>