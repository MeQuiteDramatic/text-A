<template>
  <div>
    <Title></Title>
    <div class="cons">
      <div
        v-for="(item,index) in DataList"
        :key="index"
        :class="countIndex===index?'activer':''"
        @click="HeadAdd(index)"
      >{{item}}</div>
    </div>
    <bookList v-for="(item,index) in List" :key="index" :item="item"></bookList>
  </div>
</template>

<script>
import Title from "../../components/Title";
import bookList from "@/components/bookList";
export default {
  components: {
    Title,
    bookList
  },
  data() {
    return {
      DataList: ["热门", "新书", "免费", "完本"],
      countIndex: 0,
      List: [],
      ListDataArr: []
    };
  },
  created() {
    fetch("/list").then(data => {
      data.json().then(res => {
        this.List = res["ranklist" + this.countIndex];
        this.ListDataArr = res;
      });
    });
  },
  methods: {
    HeadAdd(index) {
      this.countIndex = index;
      this.List = this.ListDataArr["ranklist" +index];
    }
  }
};
</script>

<style lang="scss" scoped>
.cons {
  display: flex;
  div {
    flex: 1;
    padding: 4px 10px;
    margin: 5px 4px;
    box-sizing: border-box;
    text-align: center;
    background: #f2f2f2;
    color: #333;
    border-radius: 4px;
  }
  .activer {
    background: red;
    color: white;
  }
}
</style>