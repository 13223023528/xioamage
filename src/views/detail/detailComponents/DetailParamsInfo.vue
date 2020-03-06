<template>
   <div id="params-info-container">
    <table class="size-info" v-for="(table, index) in paramsInfo.sizeInfo" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="other-info">
      <tr v-for="(item, index) in paramsInfo.otherInfo" :key="index">
        <td class="other-info-key">{{item.key}}</td>
        <td class="other-info-value">{{item.value}}</td>
      </tr>
    </table>
    <div class="img-info">
      <img :src="paramsInfo.image" alt="">
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
     paramsInfo: {
       type: Object,
       default() {
         return {}
       }
     }
   }
}
</script>

<style scoped>
#params-info-container {
  padding: 20px 10px;
  font-size: 12px;
  color: #333;
  box-shadow: 0px 2px 3px rgb(226, 223, 223);
}
#params-info-container table {
  width: 100%;
  border-collapse: collapse;
}
#params-info-container table tr {
  height: 42px;
}
#params-info-container table td {
  height: 40px;
  border-bottom: 1px solid #e6e1e1;
}
.size-info tr > td {
  width: 40px;
}
.other-info .other-info-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
  }
.other-info .other-info-value {
  color: var(--color-tint);
}
.img-info img {
  width: 100%;
}
</style>
