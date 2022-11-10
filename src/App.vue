<template>
  <router-view v-slot="{ Component }">
    <keep-alive max="8">
      <component
        :is="Component"
        :key="$route.name"
        v-if="$route.meta.keepAlive"
      />
    </keep-alive>
    <component
      :is="Component"
      :key="$route.name"
      v-if="!$route.meta.keepAlive"
    />
  </router-view>
  <MainTabbar v-show="showTabBar" />
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'

import MainTabbar from '@/components/MainTabbar/mainTabbar'

const route = useRoute()
const showTabBar = ref(false)

watch(
  () => route.path,
  () => {
    showTabBar.value = !!route.meta.showTabBar
  }
)
</script>
