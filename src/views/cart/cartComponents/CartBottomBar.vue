<template>
  <div class="bottom-bar">
    <div class="bottom-left">
      <check-button :check="allSelect" @click.native="allSelected" />
      <span class="all-select">全选</span>
      <div class="total-price">合计: {{totalPrice}}</div>
    </div>
    <div class="bottom-right">去结算({{count}})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  data() {
    return {};
  },
  components: {
    CheckButton
  },
  computed: {
    // 总价格
    totalPrice() {
      let totalPrice = 0;
      this.$store.state.cartList.forEach(item => {
        if (item.check) {
          totalPrice += item.price * item.count;
        }
      });
      return '￥' + totalPrice.toFixed(2);
    },
    // 选中商品的数量
    count() {
      let count = 0;
      this.$store.state.cartList.forEach(item => {
        if (item.check) {
          count++;
        }
      });
      return count;
    },
    allSelect() {
      if (this.$store.state.cartList.length == 0) {
        return false;
      }
      return !this.$store.state.cartList.filter(item => !item.check).length;
    }
  },
  methods: {
    // 全选按钮点击
    allSelected() {
      if (!this.allSelect) {
        this.$store.state.cartList.forEach(item => {
          item.check = true;
        });
      } else {
        this.$store.state.cartList.forEach(item => {
          item.check = false;
        });
      }
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  height: 35px;
  background-color: #eee;
  padding-left: 10px;
  box-shadow: 0px -2px 2px rgb(226, 223, 223);
}
.bottom-left {
  display: flex;
  align-items: center;
}
.all-select {
  color: #888;
  font-size: 14px;
}
.total-price {
  margin-left: 7px;
  color: #666;
  font-size: 14px;
}
.bottom-right {
  padding: 0 10px;
  height: 100%;
  background-color: red;
  color: #fff;
  font-size: 13px;
  line-height: 35px;
}
</style>
