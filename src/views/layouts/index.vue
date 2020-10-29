<template>
  <div class="app-container">
    <NavBar></NavBar>
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
    <div class="layout-footer">
      <TabBar :data="tabbars" @change="handleChange" />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import TabBar from '@/components/TabBar'
export default {
  name: 'AppLayout',
  data() {
    return {
      tabbars: [
        {
          title: '首页',
          to: {
            name: 'Home'
          },
          icon: 'wap-home'
        },
        {
          title: '广告类',
          to: {
            name: 'Advertisement'
          },
          icon: 'video'
        },
        {
          title: '挖矿类',
          to: {
            name: 'My'
          },
          icon: 'gold-coin'
        }
      ]
    }
  },
  components: {
    TabBar , NavBar
  },
  methods: {
    handleChange(v) {
      console.log('tab value:', v)
    }
  }
}
</script>
