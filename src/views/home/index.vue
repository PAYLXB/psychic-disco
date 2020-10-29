<!-- home -->
<template>
  <div class="home">
    <div style="text-align:center">
      <h3>该项目目的仅为向大家描述项目</h3>
      <h3>布局稍显粗糙，文字稍显白话</h3>
      <h3>望谅解！！！</h3>
    </div>
    <van-notice-bar mode="closeable">
      注册时，建议同时登陆支付宝和微信，有些需要微信授权或支付宝实名验证。
    </van-notice-bar>
    <van-notice-bar mode="closeable">
      登陆密码建议固定八位数，因为大部分APP密码都需要八位数（数字加字母组合）。
    </van-notice-bar>
    <van-notice-bar mode="closeable">
      交易密码请务必管理并记录。
    </van-notice-bar>
    <van-cell-group>
      <van-cell :title="item.title" size="large" :key="index" v-for="(item, index) in homeData">
        <div slot="label">
          <div v-html="item.label" class="label"></div>
        </div>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { home as homeData } from '@/data/index'
export default {
  data() {
    return {
      homeData
    }
  },

  computed: {},

  mounted() {
    console.log(homeData)
  },

  methods: {}
}
</script>
<style lang="scss" scoped>
.label {
  font-size: 14px;
  line-height: 22px;
  color: #999;
}
</style>
