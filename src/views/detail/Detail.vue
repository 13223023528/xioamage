<template>
   <div>
     <detail-nav-bar></detail-nav-bar>
     <detail-swiper :swiperImages="topImages"></detail-swiper>
   </div>
</template>

<script>
import DetailNavBar from "./detailComponents/DetailNavBar"
import DetailSwiper from "./detailComponents/DetailSwiper"

import { getDetailData } from "network/detail"
export default {
   name: 'Detail',
   data () {
       return {
         iid: null,
         topImages: []
       }
   },
   created() {
     this.iid = this.$route.params.iid;
      // 根据商品 iid 获取商品数据
     getDetailData(this.$route.params.iid).then(res => {
       console.log(res);
       this.topImages = res.result.itemInfo.topImages;
     })
   },
   components: {
     DetailNavBar,
     DetailSwiper
   }
}
</script>

<style scoped>

</style>
