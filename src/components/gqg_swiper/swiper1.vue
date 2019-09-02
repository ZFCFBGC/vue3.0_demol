<template>
  <div class="gqg_swipers">
    <div class="swiper1" style="height: 500px">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,idx) in arr" :key="item.id">
          <img :src="item.url" class="images" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      arr: [
        {
          id: 1,
          url:
            "https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-8.jpg"
        },
        {
          id: 2,
          url:
            "https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-6.jpg"
        },
        {
          id: 3,
          url:
            "https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-9.jpg"
        },
        {
          id: 4,
          url:
            "https://surmon-china.github.io/vue-awesome-swiper/static/images/surmon-10.jpg"
        }
      ],
      swiperOption: {
        speed: 1000,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>
<style lang="less" scoped>
.gqg_swipers {
  .swiper1 {
    width: 100%;
    .images{
      width: 100%;
      height:300px;
    }
  }
}
</style>