<!-- home -->
<template>
  <div class="home">
    <div style="text-align:center">
      <h3>该项目目的仅为向大家描述项目</h3>
      <h3>布局稍显粗糙，文字稍显白话</h3>
      <h3>望谅解！！！</h3>
    </div>
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
.label{
    font-size: 14px;
    line-height: 22px;
    color:#999
}
</style>
