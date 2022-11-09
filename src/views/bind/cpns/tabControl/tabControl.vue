<template>
  <div class="page_tab">
    <div class="content">
      <template v-for="(item, index) in tabs" :key="item">
        <span
          class="tab_item"
          :class="{ active: tabCurrent === index }"
          @click="itemClik(index)"
          >{{ item }}</span
        >
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps({
  tabs: {
    type: Array,
    default: () => []
  },
  tabCurrent: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['itemClik'])

const itemClik = (index) => {
  emit('itemClik', index)
}
</script>
