<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" v-if="$route.meta.keepAlive" />
    </keep-alive>
    <component :is="Component" v-if="!$route.meta.keepAlive" />
  </router-view>
  <MainTabbar v-show="!hideTabBar" />
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'

import MainTabbar from '@/components/MainTabbar/mainTabbar'

const route = useRoute()
const hideTabBar = ref(false)

watch(
  () => route.path,
  () => {
    hideTabBar.value = !!route.meta.hideTabBar
  }
)
</script>
