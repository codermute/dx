<template>
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
              <input type="text" placeholder="请输入手机号码" class="inp_txt" />
            </div>
          </div>
          <div class="item" v-if="role == 2">
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
          <i
            class="icon"
            :class="{ on: isBindSetMeal }"
            @click="isBindSetMeal = !isBindSetMeal"
          ></i>
          <span class="text">同步绑定同套餐下宽带/ITV/固话号码</span>
        </div>
        <div class="content">
          <i
            :class="['icon', { on: isBindRead }]"
            @click="isBindRead = !isBindRead"
          ></i>
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
      <template v-if="isExistType">
        <a :class="['btn_confirm', { on: isBind }]">
          <span class="txt">确认绑定</span>
          <img
            src="@/assets/images/phoneBind/arr@55.png"
            class="icon ico_arr3"
          />
        </a>
      </template>

      <template v-else>
        <a :class="['btn_confirm', { on: isBind }]">
          <span class="txt">确认绑定</span>
          <img
            src="@/assets/images/phoneBind/arr@55.png"
            class="icon ico_arr3"
          />
        </a>
      </template>
    </div>
    <div class="page_footer">
      <div class="content">
        <a
          v-for="(item, index) in footerTabs"
          :key="item.name"
          :class="['btn', `btn-${index + 1}`]"
          @click="navigateTo(item.type)"
          >{{ item.name }}</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const role = ref(2) // 1表示ITPV；2表示固话绑定；
const isDown = ref(false)
const isBindSetMeal = ref(false)
const isBindRead = ref(false)
const isExistType = ref(true) // 是否有其它账号
const footerTabs = [
  { name: '宽带绑定', type: 'broadband' },
  { name: 'IPTV绑定', type: '' },
  { name: '固话绑定', type: '' }
]

const emit = defineEmits(['navigateTo'])

const isBind = computed(() => isBindSetMeal.value && isBindRead.value)

const navigateTo = (type) => {
  emit('navigateTo', type)
}
</script>

<style scoped>
.btn_down {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
