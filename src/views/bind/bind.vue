<template>
  <div class="page page4">
    <template v-if="!activeIndex">
      <authentication v-show="!tabCurrent" @handleClick="handleClick">
        <template #control>
          <tab-control
            :tabs="tabs"
            :tabCurrent="tabCurrent"
            @itemClik="tabCurrent = $event"
          />
        </template>
      </authentication>

      <machine v-show="tabCurrent === 1">
        <tab-control
          :tabs="tabs"
          :tabCurrent="tabCurrent"
          @itemClik="tabCurrent = $event"
        />
      </machine>
    </template>

    <template v-else-if="activeIndex === 1">
      <authentication :activeIndex="activeIndex" />
    </template>

    <template v-else-if="activeIndex === 2">
      <authentication :activeIndex="activeIndex" />
    </template>

    <template v-else-if="activeIndex === 3">
      <authentication :activeIndex="activeIndex">
        <template #fixed>
          <div class="item">
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
        </template>
      </authentication>
    </template>

    <div v-show="!tabCurrent" class="page_footer">
      <div class="content">
        <a
          v-for="(item, index) in footerTabs"
          :key="item.type"
          :class="['btn', `btn-${index + 1}`]"
          @click="handleTabTrigger(item.type)"
          >{{ item.name }}</a
        >
      </div>
    </div>

    <!-- 模态框1 -- IPTV绑定账号 -->
    <!-- <div class="popup popup_center popup-1" v-if="showIptv">
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
    </div> -->

    <!-- 模态框2 -- 宽带绑定账号 -->
    <!-- <div class="popup popup_center popup-2" v-if="showNetwork">
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
    </div> -->

    <!-- 模态框3 -- 绑定成功 -->
    <popupSucceed
      :showConfirm="showConfirm"
      @closePopup="showConfirm = false"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import tabControl from './cpns/tabControl/tabControl.vue'
import authentication from './cpns/authentication/authentication.vue'
import machine from './cpns/machine/machine.vue'
import popupSucceed from './cpns/popupSucceed/popupSucceed'

const router = useRouter()

const tabs = ['短信验证绑定', '本机号码绑定']
const tabCurrent = ref(0)
const activeIndex = ref(0)
const footerTabs = ref([
  { name: '宽带绑定', type: 1 },
  { name: 'IPTV绑定', type: 2 },
  { name: '固话绑定', type: 3 }
])

const showConfirm = ref(false)

const handleTabTrigger = (type) => {
  if (activeIndex.value === type) return
  switch (type) {
    case 0:
      footerTabs.value[0] = { name: '宽带绑定', type: 1 }
      break
    case 1:
      footerTabs.value[0] = { name: '手机绑定', type: 0 }
      break
  }
  activeIndex.value = type
}
const handleClick = ({ isBindRead, isBindSetMeal }) => {
  // console.log(option, '-----')
  if (isBindRead && !isBindSetMeal) {
    showConfirm.value = true
  }
  if (isBindSetMeal) {
    router.push('/account')
  }
}
</script>

<style scoped>
@import '../../assets/css/phoneBind/style.css';
@import '../../assets/css/phoneBind/popup.css';
</style>
