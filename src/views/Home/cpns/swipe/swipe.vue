<template>
  <div class="swipe">
    <div class="business">
      <h5 class="card_head">-{{ title }}-</h5>

      <div class="swiper-container">
        <van-swipe indicator-color="#087CF0" v-bind="$attrs">
          <van-swipe-item v-for="item in 3" :key="item">
            <slot>
              <img src="@/assets/images/home/business.jpg" alt="业务推荐" />
            </slot>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
})
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
}

:deep(.van-swipe__indicators) {
  position: relative;
  bottom: 0;
  left: 0;
  transform: none;
  margin: 0.3rem 0 0.2rem;

  justify-content: center;
}

:deep(.van-swipe__indicator) {
  position: relative;
  background-color: #087cf0;
  opacity: 0.2;
}

:deep(.van-swipe__indicator--active) {
  opacity: 1;
}
</style>
