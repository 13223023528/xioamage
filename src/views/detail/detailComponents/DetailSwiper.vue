<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in swiperImages">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  data() {
    return {};
  },
  props: {
     swiperImages: {
        type: Array,
        default() {
           return []
        }
     }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped>
.detail-swiper {
   height: 240px; 
}
</style>
