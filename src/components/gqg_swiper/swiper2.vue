<template>
  <div class="swiper2">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,idx) in arr" :key="item.id">
          <img :src="item.url" class="images" />
        </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  data(){
    return {
      arr: [
        {
          id: 1,
          url:require("../../assets/imgs/default.jpg")
        },
        {
          id: 2,
          url:require("../../assets/imgs/default.jpg")
        },
        {
          id: 3,
          url:require("../../assets/imgs/default.jpg")
        },
        {
          id: 4,
          url:require("../../assets/imgs/default.jpg")
        }
      ],
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: ".swiper-pagination"
        }
      },
    }
  },
  components: {
    swiper,
    swiperSlide
  },
}
</script>
<style lang="less" scoped>
  .swiper2 {
    width: 100%;
    height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
    .images{
      width:100%;
    }
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }
</style>