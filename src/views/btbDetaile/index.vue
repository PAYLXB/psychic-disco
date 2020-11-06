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
    <div class="title image-title">
      图片介绍：
    </div>
    <div class="image">
      <img :src="item" v-for="(item, index) in detail.img" :key="index" @click="viewImg(index)" />
    </div>
    ;

    <div class="title downloadTitle">
      {{ detail.downloadTitle }}
    </div>
    <div class="url">
      <a :href="detail.downloadUrl" target="_blank">{{ detail.downloadUrl }}</a>
    </div>
    <div class="title ">
      {{ detail.sellUrlTitle }}
    </div>

    <div class="url ">
      <a :href="detail.sellUrl" target="_blank">{{ detail.sellUrl }}</a>
    </div>

    <div class="title ">
      {{ detail.sellAppTitle }}
    </div>
    <div class="url van-ellipsis">
      <a :href="detail.sellAppUrl" target="_blank">{{ detail.sellAppUrl }}</a>
    </div>
    <div class="title">
      提现渠道
    </div>
    <div class="url">
      {{ detail.channel }}
    </div>
    <div class="title">
      邀请码:
    </div>
    <div>
      <div class="image" v-if="detail.code">
        <img :src="detail.code" @click="viewCode" />
      </div>
      <div v-else style="text-align:center;color:red;font-weight:bold;font-size:20px">
        暂无邀请码，待更新
      </div>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from 'vant'
export default {
  data() {
    return {
      detail: {}
    }
  },
  created() {
    this.detail = this.$route.params
  },
  methods: {
    viewImg(id) {
      ImagePreview({
        images: this.detail.img,
        startPosition: id
      })
    },
    viewCode() {
      ImagePreview({
        images: [this.detail.code],
        startPosition: 0
      })
    }
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
  text-align: center;
}
.label {
  color: blue;
}
.detail {
  text-indent: 28px;
}
.url {
  text-align: center;
  font-size: 18px;
}
.everyDay {
  color: red;
}
.image-title {
  color: #00b9ff;
}
.image {
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  img {
    width: 30%;
    margin: 5px 0;
    object-fit: contain;
  }
}
</style>