<template>
  <div class="box" style="">
    <div class="title label">
      {{ detail.label }}
    </div>
    <div class="detail">
      {{ detail.detail }}
    </div>
    <div class="everyDay title">
      每日任务：
    </div>
    <div class="detail">
      {{ detail.task }}
    </div>
    <div class="title">
      图片介绍：
    </div>
    <div class="image">
      <img src="../../assets/image/zy1.png" v-for="(item, index) in detail.img" :key="index" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detail: {}
    }
  },
  created() {
    this.detail = this.$route.params
  }
}
</script>

<style lang="scss" scoped>
.box {
  padding: 10px;
  color: #000;
  div {
    margin-top: 10px;
  }
}
.title {
  font-size: 18px;
  font-weight: bold;
}
.label {
  color: blue;
  font-size: 18px;
  font-weight: bold;
}
.detail {
  text-indent: 28px;
}
.everyDay {
  color: red;
}
.image{
  display: flex;
  justify-content: space-around;
  img{
    width: 30%;
  }
}
</style>