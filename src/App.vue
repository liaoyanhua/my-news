<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* 这里原型图大小是360px,故换算成vw需要把 当前px单位的数值/360*100vw */
@import url('../node_modules/vant/lib/index.css');
@import url("http://at.alicdn.com/t/font_1426139_h6vn3jbl5q.css");
html,body{
  background: #f2f2f2;
}
* {
  margin: 0;
  padding: 0;
}
ul,
li,
dl {
  list-style: none;
}
input {
  outline: none;
  border: none;
}
a {
  color: rgb(148, 148, 148);
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
i,
em {
  font-style: normal;
}
</style>