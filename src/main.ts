import { createApp } from 'vue'
import App from './App.vue'

// 三方库注入
import PublicInjector from '@/public-lib'

// 引入
createApp(App)
.use(PublicInjector)
.mount('#app')