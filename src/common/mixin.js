import BackTop from "components/content/backTop/BackTop";

export const backTop = {
  data() {
    return {
      isShowBackTo: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    }
  },
  components: {
    BackTop
  }
}