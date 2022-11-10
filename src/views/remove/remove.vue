<template>
  <div class="remove">
    <div class="page page2">
      <img src="@/assets/images/phoneBind/5G-LOGO.png" class="bg" />
      <div class="page_top">
        <div class="userinfo">
          <p class="txt">检测到本机号码为</p>
          <div class="vm">177****9346</div>
        </div>
      </div>
      <div class="page_content">
        <div class="tool_wrap">
          <a @click="showConfirm = true" class="item">解除绑定</a>
          <a class="item">服务密码重置</a>
        </div>
      </div>

      <!-- 模态框1 -- 解绑提示 -->
      <div class="popup popup_center popup-6" v-if="showConfirm">
        <div class="popupContainer">
          <div class="pp_cont">
            <div class="mt">
              解绑后，您当前的号码将无法使用公众号相关服务，是否继续操作？
            </div>
          </div>
          <div class="pp_foot">
            <button class="btn btn-1" @click="showConfirm = false">取消</button>
            <a class="btn btn-2">确认</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showConfirm = ref(false)
</script>

<style scoped>
@import '../../assets/css/phoneBind/style.css';
@import '../../assets/css/phoneBind/popup.css';
</style>
