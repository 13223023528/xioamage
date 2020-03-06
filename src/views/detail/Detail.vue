<template>
  <div id="detail">
    <detail-nav-bar ref="navBar" @topNavClick="topNavClick" />
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <!-- <div>{{$store.state.cartList}}</div> -->
      <detail-swiper :swiperImages="topImages"></detail-swiper>
      <detail-base-info :goodsInfo="goods" />
      <detail-shop-info :shopInfo="goodsShop" />
      <detail-goods-desc :goodsDesc="goodsDesc" @imgLoad="imgLoad" />
      <detail-params-info ref="params" :paramsInfo="paramsInfo" />
      <detail-comment-info ref="comment" :commentInfo="commentInfo" />
      <goods-list ref="recommendList" class="recommend-goods" :goods="recommendInfo" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTo" />
    <detail-bottom-bar @addCart="addCart" />
  </div>
</template>

<script>
import DetailNavBar from "./detailComponents/DetailNavBar";
import DetailSwiper from "./detailComponents/DetailSwiper";
import DetailBaseInfo from "./detailComponents/DetailBaseInfo";
import DetailShopInfo from "./detailComponents/DetailShopInfo";
import DetailGoodsDesc from "./detailComponents/DetailGoodsDesc";
import DetailParamsInfo from "./detailComponents/DetailParamsInfo";
import DetailCommentInfo from "./detailComponents/DetailCommentInfo";
import DetailBottomBar from "./detailComponents/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";

import { debounce } from "common/utils";

import {
  getDetailData,
  Goods,
  GoodsShop,
  GoodsParams,
  getRecommend
} from "network/detail";
import { backTop } from "common/mixin";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      goodsShop: {},
      goodsDesc: {},
      paramsInfo: {},
      commentInfo: {},
      recommendInfo: [],
      topNavScroll: []
    };
  },
  mixins: [backTop],
  created() {
    this.iid = this.$route.params.iid;
    // 根据商品 iid 获取商品数据
    getDetailData(this.$route.params.iid).then(res => {
      const data = res.result;
      console.log(data);
      // 获取顶部轮播图
      this.topImages = data.itemInfo.topImages;
      // 获取商品基本信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 获取商铺信息
      this.goodsShop = new GoodsShop(data.shopInfo);
      // 获取商品描述信息
      this.goodsDesc = data.detailInfo;
      // 获取商品参数信息
      this.paramsInfo = new GoodsParams(data.itemParams);
      // 获取评论信息
      if (data.rate.cRate != 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    // 获取推荐数据
    getRecommend().then(res => {
      this.recommendInfo = res.data.list;
    });
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsDesc,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar
  },
  methods: {
    // 监听商品图片信息加载完成
    imgLoad() {
      this.$refs.scroll.refresh();
      this.topNavScroll = [];
      this.topNavScroll.push(0);
      this.topNavScroll.push(this.$refs.params.$el.offsetTop - 44);
      this.topNavScroll.push(this.$refs.comment.$el.offsetTop - 44);
      this.topNavScroll.push(this.$refs.recommendList.$el.offsetTop - 44);
    },
    // 顶部导航栏点击事件
    topNavClick(index) {
      this.$refs.scroll.scrollTo(0, -this.topNavScroll[index], 500);
    },  
    // 显示返回顶部按钮
    contentScroll(position) {
      this.isShowBackTo = -position.y > 1000;
      this.listenSroll(position);
    },
    // 监听滚动改变对应的navTop
    listenSroll(position) {
      if (-position.y < this.topNavScroll[1]) {
        this.$refs.navBar.currentIndex = 0;
      } else if (-position.y >= this.topNavScroll[1] && -position.y < this.topNavScroll[2]) {
        this.$refs.navBar.currentIndex = 1;
      } else if (-position.y >= this.topNavScroll[2] && -position.y < this.topNavScroll[3]) {
        this.$refs.navBar.currentIndex = 2;
      } else {
        this.$refs.navBar.currentIndex = 3;
      }
    },
    // 将商品添加到购物车
    addCart() {
      // 获取购物车需要展示商品的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // 将商品添加到购物车
      this.$store.dispatch("addToCart", product).then(() => {
        this.$toast({ message: "加入购物车成功", duration: 3000 });
      });
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 1;
  height: 100vh;
  background-color: #fff;
}
.content {
  overflow: hidden;
  height: calc(100% - 93px);
}
.recommend-goods {
  margin-top: 20px;
}
</style>
