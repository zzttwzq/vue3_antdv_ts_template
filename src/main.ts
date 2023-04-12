import { createApp } from 'vue'
import App from './App.vue'

// 三方库注入
import PublicInit from '@/public-init'

// 引入
createApp(App)
    .use(PublicInit)
    .mount('#app')