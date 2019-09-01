<template>
  <div>
    <Title></Title>
    <div class="con">
      <div>home</div>
    </div>
  </div>
</template>

<script>
import Title from "../../components/Title";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    Title
  },
  data() {
    return {
      listData:[]
    };
  },
  methods: {
    ...mapActions(["FetacList"])
  },
  created() {
     
  }
};
</script>

<style lang="scss">
.con{

  div{
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }
}

</style>