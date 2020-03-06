<template>
  <div v-if="Object.keys(goodsDesc).length !== 0" class="goodsDesc">
    <div class="descText">{{goodsDesc.desc}}</div>
    <div class="desc-key">{{goodsDesc.detailImage[0].key}}</div>
    <img :src="item" alt="" v-for="(item, index) in goodsDesc.detailImage[0].list" :key="index" @load="imgLoad" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      imagesLength: 0
    };
  },
  props: {
    goodsDesc: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imgLoad() {
        this.$emit("imgLoad");
    }
  }
};
</script>

<style scoped>
.goodsDesc {
  padding: 20px 0 30px;
  box-shadow: 0px 2px 2px rgb(226, 223, 223);
}
.goodsDesc img {
  width: 100%;
}
.goodsDesc .descText {
  padding: 0 10px 20px;
  font-size: 12px;
}
.goodsDesc .desc-key {
  padding: 0 10px;
  font-size: 13px;
  color: #333;
}
</style>
