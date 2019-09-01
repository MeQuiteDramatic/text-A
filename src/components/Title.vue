<template>
  <div class="box">
    <router-link
      tag="div"
      v-for="(item) in arr"
      :key="item.id"
      :to="{path:item.path }"
    >{{item.name}}</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "首页",
          path: "/home",
          id: 0
        },
        {
          name: "分类",
          path: "/show",
          id: 1
        },
        {
          name: "排行",
          path: "/pah",
          id: 2
        },
        {
          name: "书架",
          path: "/shu",
          id: 3
        }
      ]
    };
  }
};
</script>

<style>
.box{
    display: flex;
    border-bottom: 1px solid #ccc;
}
.box div{
    flex: 1;
    text-align: center;
    line-height: 45px;
}


</style>
