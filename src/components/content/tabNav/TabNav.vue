<template>
   <div class="tab-nav">
     <div class="tab-nav-item" v-for="(item, index) in title"
      @click="tabNavClick(index)"
      :class="{active: index == currentIndex}"
      >
       <span>{{item}}</span>
     </div>
   </div>
</template>

<script>
export default {
   data () {
       return {
         currentIndex: ''
       }
   },
   props: {
     title: {
       type: Array,
       default() {
         return []
       }
     }
   },
   methods: {
     tabNavClick(index) {
       this.currentIndex = index;
       this.$emit('tabClick', index);
     }
   }
}
</script>

<style scoped>
.tab-nav {
  display: flex;
  height: 35px;
  line-height: 35px;
  font-size: 15px;
  justify-content: space-around;
}
.tab-nav .tab-nav-item {
  padding: 0 3px;
}
.active {
  color: var(--color-tint);
  border-bottom: 2px solid var(--color-tint);
}
</style>
