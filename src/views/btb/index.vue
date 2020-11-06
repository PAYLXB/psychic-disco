<template>
  <div>
    <van-cell
      :title="item.title"
      is-link
      @click="goDetail(item)"
      :key="index"
      v-for="(item, index) in btbData"
    ></van-cell>
  </div>
</template>

<script>
import { btb as btbData } from '@/data/index'
export default {
  data() {
    return {
      btbData
    }
  },
  methods: {
    goDetail(item) {
      this.$router.push({
        name: 'BtbDetaile',
        params: item
      })
    }
  }
}
</script>

<style>
</style>