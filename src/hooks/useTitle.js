import { ref, watch } from 'vue'

export default function useTitle(value = '中国电信') {
  const title = ref(value)

  watch(
    title,
    (newValue) => {
      document.title = newValue
    },
    {
      immediate: true
    }
  )

  return title
}
