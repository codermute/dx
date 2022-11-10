<template>
  <div class="iptv-popup">
    <div class="popup popup_center popup-1" v-if="isShowIptv">
      <div class="popupContainer">
        <img
          src="@/assets/images/phoneBind/close.png"
          class="close upper"
          @click="closeClick"
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
                  :class="['item', { active: iptvIndex === index }]"
                  @click="changeCurrent(index)"
                >
                  IPTV账号：{{ item }}
                </li>
              </template>
            </ul>
          </div>
        </div>
        <div class="pp_foot">
          <span class="btn" @click="closeClick">确认绑定</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isShowIptv: {
    type: Boolean,
    default: false
  },
  iptvList: {
    type: Array,
    default: () => []
  },
  iptvIndex: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['closeClick', 'update:iptvIndex'])

const closeClick = () => {
  emit('closeClick')
}
const changeCurrent = (index) => {
  emit('update:iptvIndex', index)
}
</script>
