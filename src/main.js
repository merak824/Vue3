import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from "axios"

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(ElementPlus)
app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.mount('#app')
