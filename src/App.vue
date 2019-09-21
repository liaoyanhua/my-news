<template>
  <div>这是我的第一个单文件组件
      <p class="box">hello world</p>
      <img src="../images/cat.png" alt="">
      <router-link to="/login">去登陆</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .box{
        color:red;
    }
</style>