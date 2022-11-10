<template>
  <div class="page page4">
    <!-- 手机绑定 -->
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

    <!-- 宽带绑定 -->
    <template v-else-if="activeIndex === 1">
      <authentication
        :activeIndex="activeIndex"
        @handleClick="networkData.isShowNetwork = true"
      />
    </template>

    <!-- IPTV绑定 -->
    <template v-else-if="activeIndex === 2">
      <authentication
        :activeIndex="activeIndex"
        @handleClick="iptvData.isShowIptv = true"
      />
    </template>

    <!-- 固话绑定 -->
    <template v-else-if="activeIndex === 3">
      <authentication
        :activeIndex="activeIndex"
        @handleClick="networkData.isShowNetwork = true"
      >
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
    <iptvPopup
      :iptvList="iptvData.iptvList"
      :isShowIptv="iptvData.isShowIptv"
      v-model:iptvIndex="iptvData.iptvIndex"
      @closeClick="iptvData.isShowIptv = false"
    />

    <!-- 模态框2 -- 宽带绑定账号 -->
    <networkPopup
      :isShowNetwork="networkData.isShowNetwork"
      :networkList="networkData.networkList"
      v-model:networkIndex="networkData.networkIndex"
      @closeNetwork="networkData.isShowNetwork = false"
    />

    <!-- 模态框3 -- 绑定成功 -->
    <popupSucceed
      :showConfirm="showConfirm"
      @closePopup="showConfirm = false"
    />
  </div>
</template>

<script setup>
import { ref, reactive, onActivated } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import tabControl from './cpns/tabControl/tabControl.vue'
import authentication from './cpns/authentication/authentication.vue'
import machine from './cpns/machine/machine.vue'
import iptvPopup from './cpns/iptvPopup/iptvPopup.vue'
import networkPopup from './cpns/networkPopup/networkPopup.vue'
import popupSucceed from './cpns/popupSucceed/popupSucceed'

const router = useRouter()
const route = useRoute()

const tabs = ['短信验证绑定', '本机号码绑定']
const tabCurrent = ref(0)
const activeIndex = ref(0)
const footerTabs = ref([
  { name: '宽带绑定', type: 1 },
  { name: 'IPTV绑定', type: 2 },
  { name: '固话绑定', type: 3 }
])
const showConfirm = ref(false)

const iptvData = reactive({
  isShowIptv: false,
  iptvIndex: 0,
  iptvList: ['0731****6448@VOD', '0731****6214@VOD', '0731****1820@VOD']
})
const networkData = reactive({
  isShowNetwork: false,
  networkIndex: 0,
  networkList: [
    { name: '0731****6448@VOD', text: '50M有线宽带不限时-240元档' },
    { name: '0731****6448@VOD', text: '30M有线宽带不限时-100元档' },
    { name: '0731****6448@VOD', text: '100M有线宽带不限时-300元档' },
    { name: '0731****6448@VOD', text: '300M有线宽带不限时-360元档' }
  ]
})

onActivated(() => {
  console.log(route.query)
})

const handleTabTrigger = (type) => {
  if (activeIndex.value === type) return
  switch (type) {
    case 0:
      footerTabs.value[0] = { name: '宽带绑定', type: 1 }
      break
    case 1:
      footerTabs.value[0] = { name: '手机绑定', type: 0 }
      break
    case 2:
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
    router.push('/accountChoose')
  }
}
</script>

<style scoped>
@import '../../assets/css/phoneBind/style.css';
@import '../../assets/css/phoneBind/popup.css';
</style>
