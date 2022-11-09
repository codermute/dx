<template>
  <div class="popup-succeed">
    <template v-if="showConfirm">
      <div class="popup popup_center popup-6">
        <div class="popupContainer">
          <div class="pp_cont">
            <div class="mt">绑定成功！</div>
          </div>
          <div class="pp_foot">
            <button class="btn btn-1" @click="closePopup">暂不前往</button>
            <a class="btn btn-2" @click="navigateTo">前往服务大厅</a>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

defineProps({
  showConfirm: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['closePopup'])

const router = useRouter()

const closePopup = () => {
  emit('closePopup')
}
const navigateTo = () => {
  emit('closePopup')
  router.replace('/home')
}
</script>
