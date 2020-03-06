<template>
  <div>
    <nav-bar>
      <div slot="left" class="detail-nav-bar-left" @click="back">
        <img src="~assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="detail-nav-bar-center">
        <div
          class="detail-nav-bar-center-item"
          v-for="(item, index) in titles"
          :key="index"
          @click="detailNavBarItemClick(index)"
          :class="{actived: currentIndex == index}"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
    detailNavBarItemClick(index) {
      this.currentIndex = index;
      this.$emit('topNavClick', index);
    },
    back() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.detail-nav-bar-left {
  position: relative;
}
.detail-nav-bar-left img {
  position: absolute;
  top: 22px;
  left: 30px;
  margin-top: -11px;
  margin-left: -11px;
}
.detail-nav-bar-center {
  display: flex;
}
.detail-nav-bar-center .detail-nav-bar-center-item {
  flex: 1;
  font-size: 14px;
}
.actived {
  color: var(--color-tint);
}
</style>
