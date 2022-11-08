<template>
  <div class="page page1">
    <div class="page_content">
      <div class="form_wrap">
        <div class="content">
          <div class="item">
            <div class="icon">
              <img src="@/assets/images/phoneBind/map.png" class="ico_map" />
            </div>
            <div class="text_content" @click="isAddressShow = true">
              <input
                type="text"
                placeholder="请选择归属地"
                readonly
                class="inp_txt"
                v-model="address"
                id="triggerAddress"
              />
              <img
                src="@/assets/images/phoneBind/arr@1934.png"
                class="ico_arr2"
              />
            </div>
          </div>
          <div class="item">
            <div class="icon">
              <img
                src="@/assets/images/phoneBind/user@3035.png"
                class="ico_user2"
              />
            </div>
            <div class="text_content">
              <input type="text" placeholder="请输入开户姓名" class="inp_txt" />
            </div>
          </div>
          <div class="item">
            <div class="icon">
              <img src="@/assets/images/phoneBind/card.png" class="ico_card" />
            </div>
            <div class="text_content">
              <input
                type="text"
                placeholder="请输入身份证号码"
                class="inp_txt"
              />
            </div>
          </div>
          <div class="item" v-if="role == 3">
            <div class="icon">
              <img
                src="@/assets/images/phoneBind/tel@3428.png"
                class="ico_tel2"
              />
            </div>
            <div class="text_content">
              <input type="text" placeholder="请输入固话账号" class="inp_txt" />
            </div>
          </div>
          <div class="item" v-if="role == 1 || role == 2 || role == 3">
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
          <div class="item" v-if="role == 1 || role == 2 || role == 3">
            <div class="icon">
              <img
                src="@/assets/images/phoneBind/verify.png"
                class="ico_verify"
              />
            </div>
            <div class="text_content">
              <input type="text" placeholder="请输入验证码" class="inp_txt" />
              <input
                type="button"
                class="btn_verify"
                value="获取验证码"
                id="btnSendCode1"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="read_wrap" v-if="role == 3 && tabCurrent == 1">
        <div class="userinfo">
          <p class="txt">检测到本机号码为</p>
          <div class="vm">177****9346</div>
        </div>
      </div>
      <div class="agree_wrap">
        <div class="content" v-if="role == 3">
          <i
            class="icon"
            :class="[isSynchro ? 'on' : '']"
            @click="onSynchro"
          ></i>
          <span class="text">同步绑定同套餐下宽带/ITV/固话号码</span>
        </div>
        <div class="content">
          <i class="icon" :class="isRead ? 'on' : ''" @click="onRead"></i>
          <span class="text"
            >我已阅读并同意 <a class="btn">《湖南电信公众号隐私协议》</a></span
          >
        </div>
      </div>
    </div>

    <div class="page_btns" v-if="isSynchro">
      <a class="btn_confirm on">
        <span class="txt">确认绑定</span>
        <img src="@/assets/images/phoneBind/arr@55.png" class="icon ico_arr3" />
      </a>
    </div>

    <div class="page_btns" v-else>
      <a
        class="btn_confirm"
        :class="[isRead ? 'on' : '']"
        @click="openSelection"
      >
        <span class="txt">确认绑定</span>
        <img src="@/assets/images/phoneBind/arr@55.png" class="icon ico_arr3" />
      </a>
    </div>

    <div class="page_footer">
      <div class="content">
        <a href="./手机绑定.html" class="btn btn-1">手机绑定</a>
        <a class="btn btn-2" data-target="2">IPTV绑定</a>
        <a class="btn btn-3" data-target="3">固话绑定</a>
      </div>
    </div>

    <!-- 模态框1 -- IPTV绑定账号 -->
    <div class="popup popup_center popup-1" v-if="showIptv">
      <div class="popupContainer">
        <img
          src="@/assets/images/phoneBind/close.png"
          class="close upper"
          @click="onClockPopup"
        />
        <div class="pp_cont">
          <div class="selection">
            <div class="head">
              身份证<a class="cor">430320********7018</a>名下有<em
                class="num"
                >{{ iptvList.length }}</em
              >条宽带，请选择要绑定的宽带：
            </div>
            <ul class="list">
              <template v-for="(item, index) in iptvList" :key="index">
                <li
                  class="item"
                  :class="[optionCurrent == index ? 'active' : '']"
                  @click="onSelectItem(index)"
                >
                  IPTV账号：{{ item }}
                </li>
              </template>
            </ul>
          </div>
        </div>
        <div class="pp_foot">
          <span class="btn">确认绑定</span>
        </div>
      </div>
    </div>

    <!-- 模态框2 -- 宽带绑定账号 -->
    <div class="popup popup_center popup-2" v-if="showNetwork">
      <div class="popupContainer">
        <img
          src="@/assets/images/phoneBind/close.png"
          class="close upper"
          @click="onClockPopup"
        />
        <div class="pp_cont">
          <div class="selection">
            <div class="head">
              身份证<a class="cor">430320********7018</a>名下有<em
                class="num"
                >{{ networkList.length }}</em
              >条宽带，请选择要绑定的宽带：
            </div>
            <ul class="list">
              <template v-for="(item, index) in networkList" :key="index">
                <li
                  class="item"
                  :class="[optionCurrent == index ? 'active' : '']"
                  @click="onSelectItem(index)"
                >
                  <!-- <span class="tag">该账号已绑定</span> -->
                  <div class="name">IPTV账号：{{ item.name }}</div>
                  <div class="text">原套餐：{{ item.text }}</div>
                  <div class="text">地址：湖南长沙市雨花区韶山南路99号</div>
                </li>
              </template>
            </ul>
          </div>
        </div>
        <div class="pp_foot">
          <span class="btn">确认绑定</span>
        </div>
      </div>
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
      @confirm="ddas"
      :columns="cityData"
      :columns-field-names="{ text: 'value' }"
    />
  </van-popup>
</template>

<script setup>
import { ref } from 'vue'

import { cityData } from './address_data'

const address = ref('')
const role = ref(1) // 1：手机绑定；2：ITPV绑定；3：固话绑定；
const isAddressShow = ref(false)

const ddas = (option) => {
  address.value = option.value
  isAddressShow.value = false
  console.log(option.value)
}
</script>

<style scoped>
@import '../../assets/css/phoneBind/style.css';
</style>
