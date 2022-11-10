<template>
  <div class="main">
    <!-- 消息滚动 -->
    <van-notice-bar
      :left-icon="require('../../assets/images/home/msg_icon.png')"
      background="rgba(0,113,225,0.7)"
      color="#ffffff"
      style="height: 32px"
      text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
    />

    <!-- 搜索框 -->
    <search />

    <!-- tab标签页 -->
    <div class="tab_box">
      <van-tabs
        :active="currentIndex"
        background="rgba(0,113,225,0.7)"
        color="#ffffff"
        title-inactive-color="#ffffff"
        title-active-color="#ffffff"
        @click-tab="currentIndex = $event.name"
      >
        <template v-for="item in ['手机', '宽带', 'IPTV', '固话']" :key="item">
          <van-tab :title="item">
            <userMessage />
            <tab-package>
              <template #right v-if="currentIndex === 1">
                <a href="#" class="meal_num_big">
                  <span>宽带速率</span>
                  <p><b>200</b>M</p>
                </a>
                <a href="#" class="meal_num_big">
                  <span>账户余额</span>
                  <p><b>273.26</b>元</p>
                </a>
              </template>
              <template #bottom v-if="!currentIndex">
                <traffic />
              </template>
            </tab-package>
          </van-tab>
        </template>
      </van-tabs>
    </div>

    <otherServices @navigateToConcern="$router.push('/concernhome')" />

    <!-- 快捷服务 -->
    <swipe title="快捷服务">
      <van-grid :column-num="4" :border="false">
        <van-grid-item
          v-for="value in 6"
          :key="value"
          :icon="require('../../assets/images/home/1.png')"
          text="文字"
        />
      </van-grid>
    </swipe>

    <!-- 优惠办理 -->
    <swipe title="优惠办理" :autoplay="3000" />

    <!-- 业务推荐 -->
    <swipe title="业务推荐" :autoplay="3000" />

    <div class="pop_inform" v-show="isEvaluation">
      <p>评价此次小程序服务，<span>积分+40</span></p>
      <img
        class="close_pop_inform"
        src="@/assets/images/home/close_pop_inform.png"
        alt="关闭"
        @click="isEvaluation = false"
      />
    </div>

    <a href="#" class="opinions">意见反馈</a>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import search from './cpns/search/search.vue'
import userMessage from './cpns/user-message/user-message.vue'
import tabPackage from './cpns/tab-package/tab-package.vue'
import traffic from './cpns/traffic/traffic.vue'
import otherServices from './cpns/other-services/other-services.vue'
import swipe from './cpns/swipe/swipe.vue'

const currentIndex = ref(0)
const isEvaluation = ref(true)
</script>

<style lang="less" scoped>
@import '../../assets/css/home/index.css';

.main {
  width: 100%;
  min-height: 5.22rem;
  overflow: hidden;
  position: relative;

  margin: 0 auto;
  padding-bottom: 1.2rem;
  min-width: 320px;
  // max-width: 750px;
  background-image: url('../../assets/images/home/head_bg.png');
  background-size: 100%;
  background-position: center top;
  background-repeat: no-repeat;
  .tab_box {
    box-sizing: border-box;
    width: 92%;
    margin: 0% auto;
    background-color: rgba(0, 113, 225, 0.7);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.12);
    border-radius: 0.14rem;
    /* padding-top: 4%; */
    position: relative;
  }
  .opinions {
    display: block;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
    text-align: center;
    font-size: 0.24rem;
    letter-spacing: 0.02rem;
    color: #919191;
  }
}
</style>
