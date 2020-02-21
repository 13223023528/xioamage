<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <span slot="center">购物街</span>
    </nav-bar>
    <scroll class="content"
            ref="scroll"
            :probeType="3"
            @scroll="contentScroll"
            :pullUpLoad="true"
            @pullingUp="loadMore"
    >
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-popular></home-popular>
      <tab-nav class="tab-nav" :title="['流行', '新款', '精选']" @tabClick="tabClick" />
      <goods-list :goods="goods[currentType].list" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTo" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabNav from "components/content/tabNav/TabNav";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./homeComponents/HomeSwiper";
import HomeRecommend from "./homeComponents/HomeRecommend";
import HomePopular from "./homeComponents/HomePopular";

import { getMultiData, getProductData } from "network/home.js";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTo: false
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomePopular,
    TabNav,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    this.getMultiData();
    this.getProductData("pop");
    this.getProductData("new");
    this.getProductData("sell");
  },
  methods: {
    // 网络请求相关的方法
    getMultiData() {
      getMultiData().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getProductData(type) {
      const page = this.goods[type].page + 1;
      getProductData(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
      });
      this.goods[type].page++;
    },

    // 事件监听相关的方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    // 返回顶部按钮
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    // 判断返回顶部按钮是否显示
    contentScroll(position) {
      this.isShowBackTo = (-position.y) > 1000;
    },
    // 上拉加载更多
    loadMore() {
      this.getProductData(this.currentType);
      this.$refs.scroll.finishPullUp();
    }
  }
};
</script>

<style scoped>
#home {
  width: 100%;
  height: 100vh;
  padding-top: 44px;
}
.home-nav-bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: var(--color-tint);
  color: #fff;
  z-index: 1;
}
.tab-nav {
  background: #fff;
  margin-bottom: 10px;
}
.content {
  overflow: hidden;
  height: calc(100% - 49px);
}
</style>
