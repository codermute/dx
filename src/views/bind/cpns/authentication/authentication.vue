<template>
  <div class="authentication">
    <slot name="control"></slot>
    <div class="page_main">
      <div class="page_content">
        <div class="form_wrap">
          <div class="content">
            <template v-if="activeIndex">
              <div
                class="item"
                v-for="(item, index) in broadData"
                :key="item.field"
              >
                <div class="icon">
                  <img :src="item.start_img" :class="item.start_class_name" />
                </div>
                <div class="text_content" @click="changePopup(index)">
                  <input
                    type="text"
                    :placeholder="item.placeholder"
                    v-bind="item.customObj"
                    class="inp_txt"
                    v-model="info[`${item.field}`]"
                  />
                  <img
                    v-if="item.end_img"
                    :src="item.end_img"
                    :class="item.end_class_name"
                  />
                </div>
              </div>
            </template>
            <slot name="fixed"></slot>
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
                  v-model="info.phone"
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
          <div class="content" v-show="isAsync">
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
        <a :class="['btn_confirm', { on: isBind }]" @click="handleClick">
          <span class="txt">确认绑定</span>
          <img
            src="@/assets/images/phoneBind/arr@55.png"
            class="icon ico_arr3"
          />
        </a>
      </div>
    </div>

    <van-popup
      :show="isAddressShow"
      @click-overlay="isAddressShow = false"
      round
      position="bottom"
    >
      <van-picker
        @cancel="isAddressShow = false"
        @confirm="confirm"
        :columns="cityData"
        :columns-field-names="{ text: 'value' }"
      />
    </van-popup>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'

import { cityData } from '@/utils/address_data'
import { broadData } from './form_data'

const props = defineProps({
  activeIndex: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['handleClick'])

const info = reactive({
  address: '',
  phone: ''
})
const isDown = ref(false)
const isBindSetMeal = ref(false) // 同步绑定
const isBindRead = ref(false) // 阅读

const isAddressShow = ref(false)

const isAsync = computed(
  () => props.activeIndex !== 1 && props.activeIndex !== 2
)
const isBind = computed(() => isBindSetMeal.value || isBindRead.value)

const changePopup = (index) => {
  if (index) return
  isAddressShow.value = true
}
const confirm = (option) => {
  info.address = option.value
  isAddressShow.value = false
}
const handleClick = () => {
  emit('handleClick', {
    isBindSetMeal: isBindSetMeal.value,
    isBindRead: isBindRead.value,
    info: { ...info }
  })
}
</script>

<style scoped>
.btn_down {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
