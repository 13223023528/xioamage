<template>
  <div class="goods-item">
    <img class="img" :src="goodsItem.show.img" alt />
    <div class="goods-info">
      <p class="title">{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="fav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.goods-item {
  position: relative;
  width: 48%;
  padding: 0 5px 40px;
}
.goods-item .img {
  width: 100%;
  align-items: center;
  border-radius: 5px;
}
.goods-item .goods-info {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  font-size: 12px;
  text-align: center;
}
.goods-item .goods-info .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 5px;
}
.goods-item .goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .fav {
    position: relative;
  }

  .goods-info .fav::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
