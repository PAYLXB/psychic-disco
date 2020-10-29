<template>
  <van-sticky>
    <van-nav-bar
      :title="title"
      :left-arrow="showLeftArrow"
      @click-left="onClickLeft"
      @click-right="onClickRight"
      style="background:#000"
    />
  </van-sticky>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      title:'首页',
      showLeftArrow: false,
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {}
  },
  watch: {
    $route(newVal) {
      console.log(newVal)
      this.title = newVal.meta.title
      this.showLeftArrow = newVal.meta.title !== '广告类详情' ? false : true
    }
  }
}
</script>

<style lang="scss">
.van-nav-bar {
  background: #1db6f0;
  .van-nav-bar__title {
    color: #fff;
  }
}
</style>