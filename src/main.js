import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'
import Vant from 'vant'
import 'vant/lib/index.css'

import './assets/css/base.css'
import './assets/css/media.css'
import './utils/rem'

const app = createApp(App)

app.config.globalProperties.$user = {
  name: '梅长苏',
  weapons: '长剑',
  title: '刺客'
}

app.use(router)
app.use(Vant)
app.use(createPinia())

app.mount('#app')
