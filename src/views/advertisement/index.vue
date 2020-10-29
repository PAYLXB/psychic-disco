<template>
  <div>
    <van-cell
      :title="item.title"
      is-link
      @click="goDetail(item)"
      :key="index"
      v-for="(item, index) in advertisementData"
    ></van-cell>
  </div>
</template>

<script>
import { advertisement as advertisementData } from '@/data/index'
export default {
  data() {
    return {
      advertisementData
    }
  },
  methods: {
    goDetail(item) {
      this.$router.push({
        name: 'AdvertisementDetaile',
        params: item
      })
    }
  }
}
</script>

<style>
</style>