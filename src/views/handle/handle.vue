<template>
  <div class="pageContainer page2">
    <div class="page_search">
      <a class="search_txt" @click="$router.push('/search')">搜你所想</a>
      <a class="btn"></a>
    </div>
    <div class="page_content">
      <div class="pg_button_box">
        <a
          :class="['item', { active: menuCurrent === index }]"
          v-for="(item, index) in menus"
          :key="item"
          @click="handleMenuTrigger(index)"
          >{{ item }}</a
        >
      </div>
      <div class="pg_content_box">
        <div class="group">
          <div
            class="gd"
            :id="item.id"
            v-for="(item, index) in quicks"
            :key="index"
          >
            <dl class="dl" v-for="food in item.group" :key="food.food_name">
              <dt class="dt_hd" v-if="food.food_name">
                <span class="name">{{ food.food_name }}</span>
              </dt>
              <dd class="dd_ul">
                <div class="box" v-for="itemn in food.list" :key="itemn.name">
                  <i class="icon">
                    <img :src="itemn.icon" class="ico_quick" />
                  </i>
                  <span class="ico_txt">{{ itemn.name }}</span>
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onActivated } from 'vue'

import useTitle from '@/hooks/useTitle'
import { quicks } from './category_data'

onActivated(() => {
  useTitle('查询办理')
})

const menuCurrent = ref(0)
const menus = ['手机', '宽带', 'IPTV', '报障', '服务']

const handleMenuTrigger = (index) => {
  if (menuCurrent.value === index) return
  menuCurrent.value = index
}
</script>

<style scoped>
@import '../../assets/css/handle/reset.css';
@import '../../assets/css/handle/style.css';
</style>
