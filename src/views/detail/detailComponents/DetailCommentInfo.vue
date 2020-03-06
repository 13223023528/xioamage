<template>
  <div id="comment-info-container" v-if="Object.keys(commentInfo).length != 0">
    <div class="info-titile clear-fix">
      <div class="user-value">用户评价</div>
      <div class="more">更多</div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt />
      <span class="user-name">{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-text">{{commentInfo.content}}</div>
    <div class="info-other">
      <span class="time">{{commentInfo.created | showDate}}</span>
      <span class="goods-style">{{commentInfo.style}}</span>
    </div>
    <div class="imgLoad" v-if="commentInfo.images != 0">
      <img v-for="(item, index) in commentInfo.images" :key="index" :src="item" alt />
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";
export default {
  data() {
    return {};
  },
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    // 过滤器  将时间戳转换为年月日 时间戳单位为秒   需要 * 1000 转换为毫秒
    showDate(value) {
      let time = new Date(value * 1000);
      return formatDate(time, "yyyy-MM-dd");
    }
  }
};
</script>

<style scoped>
#comment-info-container {
  padding: 20px 10px;
  box-shadow: 0px 2px 2px rgb(226, 223, 223);
}
.info-titile {
  color: #333;
  border-bottom: 1px solid #ccc;
  padding-bottom: 17px;
}
.user-value {
  float: left;
  font-size: 14px;
}
.more {
  float: right;
  font-size: 12px;
}
.info-user {
  display: flex;
  align-items: center;
  padding: 15px 0px 10px;
}
.info-user img {
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
.info-user .user-name {
  margin-left: 10px;
  font-size: 15px;
  color: #333;
}
.info-text {
  font-size: 12px;
  line-height: 1.5;
}
.info-other {
  padding: 10px 0 10px;
  font-size: 12px;
}
.info-other .time {
  margin-right: 5px;
}
.imgLoad img {
  width: 50px;
  height: 50px;
  margin-right: 2px;
}
</style>
