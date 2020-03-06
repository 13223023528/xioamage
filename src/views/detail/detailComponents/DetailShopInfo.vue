<template>
  <div id="shop-container">
    <div class="shop-head">
      <img :src="shopInfo.logo" alt />
      <span class="shop-name">{{shopInfo.name}}</span>
    </div>
    <div class="shop-center">
      <div class="shop-center-left">
        <div class="info-sells">
          <div>{{shopInfo.sells}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goodsCount">
          <div>{{shopInfo.goodsCount}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-center-right">
        <table>
          <tr v-for="item in shopInfo.score">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}">
              <span>{{item.isBetter ? '高':'低'}}</span>
            </td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
#shop-container {
  box-shadow: 0px 2px 2px rgb(226, 223, 223);
}
.shop-head {
  display: flex;
  padding: 20px 10px 10px;
  align-items: center;
}
.shop-head img {
  width: 43px;
  height: 43px;
  margin-right: 10px;
}
.shop-center {
  display: flex;
  font-size: 12px;
  color: #333;
}
.shop-center .shop-center-left {
  display: flex;
  flex: 1;
  border-right: 1px solid #ccc;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
}
.shop-center .shop-center-left .sells-text,
.goods-text {
  margin-top: 5px;
}
.shop-center .shop-center-right {
  flex: 1;
}
.shop-center .shop-center-right table {
  margin: 0 auto;
}
.shop-center .shop-center-right table td,
.shop-center .shop-center-right table tr {
  padding: 6px 3px;
}

.score {
  color: #5ea732;
}
.score-better {
  color: #f13e3a;
}
.better span {
  background-color: #5ea732;
  color: #fff;
}
.better-more span {
  background-color: #f13e3a;
  color: #fff;
}
.shop-bottom {
  text-align: center;
  margin-top: 10px;
}
.enter-shop {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  margin-bottom: 20px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>
