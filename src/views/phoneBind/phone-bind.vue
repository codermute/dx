<template>
  <div class="page page4">
    <div class="page_main">
      <div class="page_content">
        <div class="form_wrap">
          <div class="content">
            <div class="item">
              <div class="icon">
                <img
                  src="@/assets/images/phoneBind/phone.png"
                  class="ico_phone"
                />
              </div>
              <div class="text_content">
                <input
                  type="text"
                  placeholder="请输入手机号码"
                  class="inp_txt"
                />
              </div>
            </div>
            <div class="item">
              <div class="icon">
                <img
                  src="@/assets/images/phoneBind/verify.png"
                  class="ico_verify"
                />
              </div>
              <div class="text_content">
                <input type="text" placeholder="请输入验证码" class="inp_txt" />
                <template v-if="!isDown">
                  <input
                    type="button"
                    @click="isDown = true"
                    class="btn_verify"
                    value="获取验证码"
                    id="btnSendCode1"
                  />
                </template>
                <template v-else
                  ><van-count-down
                    class="btn_verify btn_down"
                    :time="60000"
                    @finish="isDown = false"
                    format="ss秒再获取"
                  />
                </template>
              </div>
            </div>
          </div>
        </div>
        <div class="agree_wrap">
          <div class="content">
            <i class="icon on"></i>
            <span class="text">同步绑定同套餐下宽带/ITV/固话号码</span>
          </div>
          <div class="content">
            <i class="icon on"></i>
            <span class="text"
              >我已阅读并同意
              <a href="http://www.baidu.com" class="btn"
                >《湖南电信公众号隐私协议》</a
              ></span
            >
          </div>
        </div>
      </div>
      <div class="page_btns">
        <a class="btn_confirm">
          <span class="txt">确认绑定</span>
          <img
            src="@/assets/images/phoneBind/arr@55.png"
            class="icon ico_arr3"
          />
        </a>
      </div>
      <div class="page_enter">
        <a class="btn-login">本机号码一键登录</a>
      </div>
      <div class="page_footer">
        <div class="content">
          <template
            v-for="(item, index) in ['宽带绑定', 'IPTV绑定', '固话绑定']"
            :key="item"
          >
            <a :class="['btn', `btn-${index + 1}`]">{{ item }}</a>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isDown = ref(false)
</script>

<style scoped>
@import '../../assets/css/phoneBind/style.css';
.btn_down {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
