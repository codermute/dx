<template>
  <div class="traffic">
    <ul class="progress_box">
      <li v-for="item in menuItem" :key="item.name">
        <p>
          <span>{{ item.value }}</span
          >{{ item.symbol }}
        </p>
        <span>{{ item.name }}</span>
        <div class="progress_line">
          <div :style="{ width: `${item.length}%` }"></div>
        </div>
      </li>
      <li>
        <div class="swiper-container">
          <van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false">
            <van-swipe-item v-for="item in 3" :key="item">
              <div class="swiper-slide">
                <p><span>60.17</span>GB</p>
                <span>定向流量剩余</span>
                <div class="progress_line">
                  <div style="width: 30%"></div>
                </div>
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuItem = ref([
  { value: 273.26, symbol: 'GB', name: '通用流量剩余', length: 70 },
  { value: 60.17, symbol: 'GB', name: '定向流量剩余', length: 30 }
])
</script>

<style lang="less" scoped>
.swiper-container {
  width: 93%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 0.1rem;
  /*padding-bottom: 0.5rem;*/
  .swiper-slide {
    -webkit-flex-shrink: 0;
    flex: 0 0 auto;
    flex-shrink: 0;
    height: 100%;
    position: relative;
  }
  .swiper-slide > img {
    border-radius: 0.1rem;
  }
}
</style>
