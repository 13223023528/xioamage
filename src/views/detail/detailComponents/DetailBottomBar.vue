<template>
  <div id="bottom-bar">
    <div class="bar-left">
      <div>
        <i class="icon service"></i>
        <div class="text">客服</div>
      </div>
      <div>
        <i class="icon shop"></i>
        <div class="text">店铺</div>
      </div>
      <div>
        <i class="icon select"></i>
        <div class="text">收藏</div>
      </div>
    </div>
    <div class="bar-right">
      <div class="shop-car" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    addCart() {
      this.$emit('addCart');
    }
  }
};
</script>

<style scoped>
#bottom-bar {
  display: flex;
  height: 49px;
  background-color: #fff;
  text-align: center;
}
#bottom-bar .bar-left,
#bottom-bar .bar-right {
  display: flex;
  flex: 1;
}
#bottom-bar .bar-left div,
#bottom-bar .bar-right div {
  flex: 1;
}
#bottom-bar .bar-left .text {
  font-size: 13px;
}
.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 7px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.bar-left .service {
  background-position: 0 -54px;
}
.bar-left .shop {
  background-position: 0 -98px;
}
#bottom-bar .bar-right {
  font-size: 13px;
  line-height: 49px;
}
#bottom-bar .bar-right .shop-car {
  color: #333;
  background-color: #ffe817;
}
#bottom-bar .bar-right .buy {
  color: #fff;
  background-color: #ff6699;
}
</style>
