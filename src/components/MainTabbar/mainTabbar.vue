<template>
  <div class="paging_box">
    <div class="paging">
      <a href="#" :class="{ on: isActiveHome }">
        <img class="showImg" src="@/assets/images/home/index_icon1.png" />
        <img class="noneImg" src="@/assets/images/home/index_icon.png" />
        <span>首页</span>
      </a>

      <a href="#">
        <img class="showImg" src="@/assets/images/home/search_log_icon1.png" />
        <img class="noneImg" src="@/assets/images/home/search_log_icon.png" />
        <span>查询办理</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeHomeList = ['/', '/home', '/concernhome']

const isActiveHome = computed(() => activeHomeList.includes(route.path))
</script>

<style scoped>
@import '../../assets/css/public.css';
</style>
