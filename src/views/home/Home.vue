<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <span slot="center">购物街</span>
    </nav-bar>
    <tab-nav class="tabNavShow" ref="tabNavShow" :title="['流行', '新款', '精选']" @tabClick="tabClick" v-show="isTabNav" />
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @imgLoad="swiperImgLoad"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-popular></home-popular>
      <tab-nav class="tabNav" ref="tabNav" :title="['流行', '新款', '精选']" @tabClick="tabClick" />
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

import HomeSwiper from "./homeComponents/HomeSwiper";
import HomeRecommend from "./homeComponents/HomeRecommend";
import HomePopular from "./homeComponents/HomePopular";

import { getMultiData, getProductData } from "network/home.js";
import { debounce } from "common/utils";
import { backTop } from "common/mixin";
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
      tabNavOffsetTop: 0,
      isTabNav: false,
      saveY: 0
    };
  },
  mixins: [backTop],
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomePopular,
    TabNav,
    GoodsList,
    Scroll
  },
  created() {
    // 后台获取推荐数据
    this.getMultiData();

    // 后台获取 流行 新款 精选数据
    this.getProductData("pop");
    this.getProductData("new");
    this.getProductData("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50);

    // 监听goodsListItem中的图片加载是否完成
    this.$bus.$on("imgLoad", () => {
      refresh();
    });
  },
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
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
      };
      this.$refs.tabNav.currentIndex = index;
      this.$refs.tabNavShow.currentIndex = index;
    },
    
    contentScroll(position) {
      // 判断返回顶部按钮是否显示
      this.isShowBackTo = -position.y > 1000;
      // 决定 tabNav 是否吸顶
      this.isTabNav = -position.y > this.tabNavOffsetTop;
    },
    // 上拉加载更多
    loadMore() {
      this.getProductData(this.currentType);
      this.$refs.scroll.finishPullUp();
    },
    swiperImgLoad() {
      this.tabNavOffsetTop = this.$refs.tabNav.$el.offsetTop - 45;
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
.tabNavShow {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 5;
}
.tabNav {
  margin-bottom: 10px;
}
.content {
  overflow: hidden;
  height: calc(100% - 49px);
}
</style>
