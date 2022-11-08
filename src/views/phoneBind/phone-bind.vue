<template>
  <div class="page page4">
    <tab-control
      :tabs="tabs"
      :tabCurrent="tabCurrent"
      @itemClik="tabCurrent = $event"
    />

    <message-authentication v-show="!tabCurrent" @navigateTo="navigateTo" />

    <machine v-show="tabCurrent === 1" />

    <!-- 模态框1 -- IPTV绑定账号 -->
    <div class="popup popup_center popup-1" v-if="showIptv">
      <div class="popupContainer">
        <img
          src="@/assets/images/phoneBind/close.png"
          class="close upper"
          @click="onClosePopup"
        />
        <div class="pp_cont">
          <div class="selection">
            <div class="shead">
              身份证<a class="cor">430320********7018</a>名下有<em
                class="num"
                >{{ iptvList.length }}</em
              >条宽带，请选择要绑定的宽带：
            </div>
            <ul class="scont">
              <template v-for="(item, index) in iptvList" :key="index">
                <li
                  :class="['item', { active: optionCurrent === index }]"
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
          @click="onClosePopup"
        />
        <div class="pp_cont">
          <div class="selection">
            <div class="shead">
              身份证<a class="cor">430320********7018</a>名下有<em
                class="num"
                >{{ networkList.length }}</em
              >条宽带，请选择要绑定的宽带：
            </div>
            <ul class="scont">
              <template v-for="(item, index) in networkList" :key="index">
                <li
                  :class="['item', { active: optionCurrent === index }]"
                  @click="onSelectItem(index)"
                >
                  <div class="name">IPTV账号：{{ item.name }}</div>
                  <div class="text">原套餐：{{ item.text }}</div>
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

    <!-- 模态框3 -- 绑定成功 -->
    <div class="popup popup_center popup-6" v-if="showConfirm">
      <div class="popupContainer">
        <div class="pp_cont">
          <div class="mt">绑定成功！</div>
        </div>
        <div class="pp_foot">
          <button class="btn btn-1" @click="onClosePopup">暂不前往</button>
          <a class="btn btn-2">前往服务大厅</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import TabControl from './cpns/tabControl/tabControl.vue'
import messageAuthentication from './cpns/messageAuthentication/messageAuthentication.vue'
import machine from './cpns/machine/machine.vue'

const router = useRouter()

const tabs = ['短信验证绑定', '本机号码绑定']
const tabCurrent = ref(0)

const navigateTo = (type) => {
  router.push({ path: `/${type}` })
}
</script>

<style scoped>
@import '../../assets/css/phoneBind/style.css';
</style>
