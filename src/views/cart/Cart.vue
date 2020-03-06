<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartListLength}})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list />
    </scroll>
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import CartList from "./cartComponents/CartList";
import CartBottomBar from "./cartComponents/CartBottomBar"

import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    Scroll,
    CartBottomBar
  },
  computed: {
    ...mapGetters(["cartListLength"])
  },
  activated() {
    this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
#cart {
  height: 100vh;
}
.nav-bar {
  position: relative;
  z-index: 1;
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  height: calc(100% - 128px);
}
</style>
