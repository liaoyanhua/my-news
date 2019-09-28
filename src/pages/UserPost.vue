<template>
  <div>
    <ProfileHead text="我的跟帖" />
    <div class="post-item" v-for="(item,index) in comList" :key="index">
      <p class="time">2019-09-28</p>
      <div class="comments" v-if="item.parent">
        <p>@{{item.parent.user.nickname}}：</p>
        <p>{{item.parent.content}}</p>
      </div>
      <div class="nots">{{item.content}}</div>
      <p
        class="title"
      >{{item.post.title}}</p>
    </div>
  </div>
</template>

<script>
import ProfileHead from "@/components/ProfileHead";
export default {
    data(){
        return{
            comList:[]
        }
    },
  components: {
    ProfileHead
  },
  mounted(){
      this.$axios({
          url:'/user_comments',
           headers: {
        Authorization: localStorage.getItem("token")
      }
      }).then(res=>{
          console.log(res);
          this.comList=res.data.data
      })
  }
};
</script>

<style scoped lang="less">
.post-item {
  padding: 20/360 * 100vw;
  padding-bottom: 10/360 * 100vw;
  border-bottom: 1px solid #ccc;
  font-size: 14/360 * 100vw;
  .time {
    color: #a1a1a1;
    margin-bottom: 10/360 * 100vw;
  }
  .comments {
    background: #e4e4e4;
    width: 95%;
    margin-bottom: 20/360 * 100vw;
    padding: 10/360 * 100vw 8/360 * 100vw;
    color: #898989;
    p:nth-child(1) {
      margin-bottom: 10/360 * 100vw;
    }
  }
  .nots {
    font-size: 16/360 * 100vw;
    margin-bottom: 10/360 * 100vw;
  }
  .title {
    color: #898989;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>