<template>
  <div class="cart-list-item">
    <div class="check-button-container">
      <check-button :check="cartListItem.check" @click.native="isSelect"></check-button>
    </div>
    <div class="img-container">
      <img :src="cartListItem.image" alt />
    </div>
    <div class="item-info">
      <div class="base-info">
        <div class="info title-info">{{cartListItem.title}}</div>
        <div class="info desc-info">{{cartListItem.desc}}</div>
        <div class="bottom-info">
          <div class="price-info">￥{{cartListItem.price}}</div>
          <div class="count">x{{cartListItem.count}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
  data() {
    return {};
  },
  props: {
    cartListItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    CheckButton
  },
  methods: {
    isSelect() {
      // this.cartListItem.check = !this.cartListItem.check;
      this.$store.commit('changeCheck', {
        iid: this.cartListItem.iid,
        check: this.cartListItem.check
      })
    }
  }
};
</script>

<style scoped>
.cart-list-item {
  display: flex;
  position: relative;
  border-bottom: 1px solid #ccc;
  padding: 10px;
}
.check-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3px;
}
.img-container img {
  flex: 1;
  width: 68px;
  height: 80px;
  border-radius: 10px;
}
.item-info {
  overflow: hidden;
  position: relative;
  padding: 0 0 0 10px;
}
.info {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.title-info {
  margin-bottom: 10px;
  font-size: 15px;
  color: #333;
}
.desc-info {
  font-size: 12px;
  color: rgb(102, 102, 102);
}
.bottom-info {
  position: absolute;
  bottom: 0px;
  left: 10px;
  right: 10px;
  display: flex;
  justify-content: space-between;
}
.price-info {
  color: orangered;
}
</style>
