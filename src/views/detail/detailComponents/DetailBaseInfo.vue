<template>
   <div v-if="Object.keys(goodsInfo).length !== 0">
     <div class="title">{{goodsInfo.title}}</div>
     <div class="price">
       <span class="newPrice">{{goodsInfo.newPrice}}</span>
       <span class="oldPrice">{{goodsInfo.oldPrice}}</span>
       <span class="discount" v-if="goodsInfo.discount">{{goodsInfo.discount}}</span>
     </div>
     <div class="other-info">
      <span>{{goodsInfo.columns[0]}}</span>
      <span>{{goodsInfo.columns[1]}}</span>
      <span>{{goodsInfo.services[goodsInfo.services.length-1].name}}</span>
     </div>
     <div class="info-service">
       <span class="info-service-item" v-for="index in goodsInfo.services.length-1">
         <img :src="goodsInfo.services[index-1].icon" alt="">
         {{goodsInfo.services[index-1].name}}
       </span>
     </div>
   </div>
</template>

<script>
export default {
   data () {
       return {

       }
   },
   props: {
     goodsInfo: {
       type: Object,
       default() {
         return {}
       }
     }
   },
   created() {
     console.log(this.goodsInfo);
   }
}
</script>

<style scoped>
.title {
  padding: 10px;
  color: #000;
  font-size: 16px;
}
.price {
  padding: 0px 10px;
}
.price .newPrice {
  color: var(--color-tint); 
  font-size: 18px;
  margin-right: 4px; 
}
.price .oldPrice {
  margin-right: 4px;
  font-size: 14px;
  text-decoration: line-through;
}
.price .discount {
  position: relative;
  top: -7px;
  background-color: var(--color-tint);
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 5px;
}
.other-info {
  display: flex;
  padding: 20px 10px 20px 10px;
  justify-content: space-between;
  color: rgb(167, 164, 164);
  font-size: 12px;
}
.info-service {
  display: flex;
  padding: 15px 10px;
  justify-content: space-between;
  box-shadow: 0px 1px 5px rgb(226, 223, 223);
  flex-wrap: wrap;
}
.info-service .info-service-item {
  padding: 3px;
  font-size: 12px;
  color: #333;
}
.info-service .info-service-item img {
  position: relative;
  top: 2px;
  width: 14px;
  height: 14px;
}
</style>
