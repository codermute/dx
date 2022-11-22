<template>
  <div class="pageContainer page3">
    <div class="search_wrap">
      <div class="content">
        <i class="icon"></i>
        <input type="text" placeholder="输入关键词" class="inp_txt" />
      </div>
      <button class="btn">搜索</button>
    </div>
    <div class="quick_section">
      <div class="group">
        <div class="gTit">
          <span class="title">查询</span>
          <a class="btn">查看更多></a>
        </div>
        <div class="gCon">
          <div class="block">
            <div class="nav_list">
              <a
                class="item"
                v-for="(item, index) in [
                  '我的账单',
                  '话费查询',
                  '话费充值',
                  '流量订购',
                  '积分兑换',
                  '电子发票',
                  '充值代扣'
                ]"
                :key="item"
              >
                <img src="@/assets/images/handle/quickIco.png" class="ico" />
                <span class="name"
                  >{{ item
                  }}<img
                    v-if="index === 3"
                    src="@/assets/images/handle/hot@6028.png"
                    class="ico_hot"
                /></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="group">
        <div class="gTit">
          <span class="title">办理</span>
          <a class="btn">查看更多></a>
        </div>
        <div class="nav_list">
          <a
            class="item"
            v-for="item in ['我的账单', '话费查询', '话费充值']"
            :key="item"
          >
            <img src="@/assets/images/handle/quickIco.png" class="ico" />
            <span class="name">{{ item }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onActivated } from 'vue'

import useTitle from '@/hooks/useTitle'

onActivated(() => {
  useTitle('搜索')
})
</script>

<style scoped>
@import '../../assets/css/handle/reset.css';
@import '../../assets/css/handle/style.css';
</style>
