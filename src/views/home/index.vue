<template>
  <div>
    <Title></Title>
    <div class="con">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../assets/1.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/2.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/1.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/2.jpg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../../components/Title";
import { mapState, mapActions } from "vuex";
import Swiper from "swiper";
export default {
  components: {
    Title
  },
  data() {
    return {
      listData: []
    };
  },
  created() {
    new Swiper(".swiper-container", {});
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 140px;
  .swiper-wrapper,
  .swiper-slide,
  img {
    width: 100%;
    height: 100%;
  }
}
</style>