<template>
  <input type="button" class="btn" :value="text" @click="handleGetForm"/>
</template>

<script>
export default {
  props:['text'],
  methods:{
    handleGetForm(){
      this.$emit('getform');
    }
  }
}
</script>

<style scoped lang="less">
    .btn{
        display: block;
        border:none;
        background: rgb(204, 51, 0);
        color:#fff;
        padding:15/360*100vw 0;
        text-align: center;
        width:100%;
        font-size:18/360*100vw;
        border-radius: 50/360*100vw;
        margin-top:21/360*100vw;
    }
</style>