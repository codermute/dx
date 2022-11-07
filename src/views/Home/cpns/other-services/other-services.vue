<template>
  <div class="other-services">
    <!--星级服务-->
    <a href="#" class="star-row">
      <div class="star-left">
        <img src="@/assets/images/home/icon-star.png" />星级服务
      </div>
      <div class="star-right">
        享受您的专属权益<img src="@/assets/images/home/star-arrow.png" />
      </div>
    </a>
    <!--0928 专属客服经理-->
    <a href="#" class="manager-btn">查看我的专属客服经理</a>

    <!-- 关爱版 在线客服 -->
    <div class="flex_between">
      <a @click="navigateToConcern"> 关爱版 </a>
      <a href="#"> 在线客服 </a>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['navigateToConcern'])

const navigateToConcern = () => {
  emit('navigateToConcern')
}
</script>

<style>
.flex_between {
  width: 92%;
  margin: 0.4rem auto 0rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 10;
}
.flex_between > a {
  width: 49%;
  height: 1.1rem;
  line-height: 1.1rem;
  box-sizing: border-box;
  padding-left: 0.3rem;
  font-weight: 600;
  font-size: 0.36rem;
  color: #ffffff;
  border-radius: 0.14rem;
}
.flex_between > a:nth-child(1) {
  background: url('../../../../assets/images/home/a_bg3.png') no-repeat center
    center;
  background-size: 100% 100%;
}
.flex_between > a:nth-child(2) {
  background: url('../../../../assets/images/home/a_bg2.png') no-repeat center
    center;
  background-size: 100% 100%;
}
</style>
