<template>
   <div class="head">
        <span class="iconfont iconjiantou2" @click="handleBack"></span><span class="edit">{{text}}</span></div>
</template>

<script>
export default {
    props:['text'],
    methods:{
        handleBack(){
            if(this.$route.fullPath==='/userprofile'){
                localStorage.removeItem('token');
                localStorage.removeItem('user_id');
            }
            this.$router.back();
        }
    }

};
</script>

<style scoped lang="less">
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
</style>