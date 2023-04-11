import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'ant-design-vue/dist/antd.css';
import antd from 'ant-design-vue';

createApp(App)
.use(antd)
.use(router)
.mount('#app')
