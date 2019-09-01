<template>
  <div>
    <router-link tag="dl" :to="{path:'/xq',query:{id:item.bookId}}">
      <dt>
        <img :src="item.coverUrl" alt />
      </dt>
      <dd>
        <h4>{{item.bookName}}</h4>
        <div>
          <span>作者：{{item.authorName}}</span>
          <span>{{item.subCateName}}</span>
        </div>
        <div class="itemIndex">更新至：{{item.updteChapterName}}</div>
        <div class="itemIndex">简介：{{item.description}}</div>
      </dd>
    </router-link>
  </div>
</template>

<script>

export default {
  props: ["item"]
};
</script>

<style lang="scss" scoped>
dl {
  display: flex;
  border-bottom: 1px solid #ccc;
  dt {
    width: 80px;
    height: 100px;
    padding: 7px 5px;
    box-sizing: border-box;
    img {
      width: 100%;
      height: 100%;
    }
  }
  dd {
    flex: 1;
    div {
      width: 230px;
    }
  }
}
.itemIndex {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>