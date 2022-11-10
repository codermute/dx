<template>
  <div class="network-popup">
    <div class="popup popup_center popup-2" v-if="isShowNetwork">
      <div class="popupContainer">
        <img
          src="@/assets/images/phoneBind/close.png"
          class="close upper"
          @click="closeNetwork"
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
                  :class="['item', { active: networkIndex === index }]"
                  @click="changeCurrent(index)"
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
</template>

<script setup>
defineProps({
  isShowNetwork: {
    type: Boolean,
    default: false
  },
  networkList: {
    type: Array,
    default: () => []
  },
  networkIndex: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['closeNetwork', 'update:networkIndex'])

const closeNetwork = () => {
  emit('closeNetwork')
}
const changeCurrent = (index) => {
  emit('update:networkIndex', index)
}
</script>
