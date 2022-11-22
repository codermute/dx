<template>
  <div class="main">
    <div class="bg_color"></div>

    <div class="switch_account">
      <span>177****9945</span>
      <span class="switch_account_btn">切换号码</span>
    </div>

    <div class="flex_between">
      <a @click="$router.back()"> 返回正式版 </a>
      <a href="javascript:;"> 在线客服 </a>
    </div>

    <div class="account_information">
      <div class="data_info">
        <div class="info_item">
          <span>话费余额</span>
          <p><b>273.26</b>元</p>
        </div>
        <div class="info_item">
          <span>本月费用(已扣)</span>
          <p><b>273.26</b>元</p>
        </div>
      </div>

      <div class="account_information_btns">
        <a href="javascript:;" class="look_btn_1 account_information_btn_1"
          ><span>看教程</span></a
        >
        <a
          href="javascript:;"
          class="telephone_charge account_information_btn_2"
          ><span>充话费</span></a
        >
      </div>
    </div>

    <div class="account_information">
      <div class="data_info">
        <div class="info_item">
          <span>已用通用流量</span>
          <p><b>273.26</b>GB</p>
        </div>
        <div class="info_item">
          <span>剩余流量</span>
          <p><b>273.26</b>GB</p>
        </div>
      </div>

      <div class="account_information_btns">
        <a href="javascript:;" class="look_btn_2 account_information_btn_1"
          ><span>看教程</span></a
        >
        <a
          href="javascript:;"
          class="quantity_of_flow account_information_btn_2"
          ><span>充话费</span></a
        >
      </div>
    </div>

    <div class="handle_box">
      <ul>
        <li v-for="item in 8" :key="item">
          <a href="javascript:;">
            <div><img src="@/assets/images/home/1.png" alt="icon" /></div>
            <span>余额查询</span>
          </a>
        </li>
      </ul>

      <a href="javascript:;" class="more">更多></a>
    </div>

    <a href="#" class="opinions">意见反馈</a>
  </div>
</template>

<script setup>
import { onActivated } from 'vue'

import useTitle from '../../hooks/useTitle'

onActivated(() => {
  useTitle('服务大厅')
})
</script>

<style scoped>
@import '../../assets/css/concernLoveVersions/concernLoveVersions.css';
.opinions {
  display: block;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  text-align: center;
  font-size: 0.24rem;
  letter-spacing: 0.02rem;
  color: #919191;
}
</style>
