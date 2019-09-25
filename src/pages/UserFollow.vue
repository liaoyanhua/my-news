<template>
  <div class="container">
        <ProfileHead text="我的关注"/>
  </div>
</template>  

<script>
import ProfileHead from "@/components/ProfileHead";
export default {
    components:{
        ProfileHead
    }
}
</script>

<style scoped lang="less">
    .container{
        height:100vh;
        background: rgb(242, 242, 242);
    }
</style>